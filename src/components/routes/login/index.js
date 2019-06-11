import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import * as firebase from "firebase/app";
import "firebase/auth";
import { connect } from "react-redux";
import signIn from "../../../index"


const loginPageStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
}
const loginFormStyle = {

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:"linear-gradient(to left, #acffff, #8ef7f2, #6eefe4, #4ae7d4, #0adec2)",
    borderRadius: "5px 5px",
    
}
const loginInputStyle = {

    padding:"10px",
    margin:"5px",
    height:50,
    width:"450px",
    
}
var config = {
    apiKey: "AIzaSyAegmL6Mg2_GtAyV5Htexb6AEzJ69dwDxY",
    authDomain: "projektfiladam.firebaseapp.com",
    databaseURL: "https://projektfiladam.firebaseio.com",
    projectId: "projektfiladam",
    storageBucket: "projektfiladam.appspot.com",
    messagingSenderId: "351211230753",
    appId: "1:351211230753:web:2e7de9f23fea8b19"
};
firebase.initializeApp(config);

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        isPending: true
    };

    componentDidMount() {
        this.setState({ isPending: true });
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user,
                isPending: false
            });
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        //console.log(this.state);
        this.setState({ isPending: true });
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                console.log(error);
                if (error.code === "auth/email-already-in-use") {
                    firebase
                        .auth()
                        .signInWithEmailAndPassword(this.state.email, this.state.password)
                        .catch(function (error) {
                            alert(error.message);
                            this.setState({ isPending: false });
                        });
                } else {
                    alert(error.message);
                    this.setState({ isPending: false });
                }
            });
    };

    handleChange = e => {
        this.setState({
            [e.target.type]: e.target.value
        });
    };

    handleLogout = () => {
        this.setState({ isPending: true });
        firebase
            .auth()
            .signOut()
            .then(function () {
                alert("Wylogowano...");
            })
            .catch(function (error) {
                alert("Nie wylogowano...");
                this.setState({ isPending: false });
            });
    };

    render() {
        return (
            <BrowserRouter >
                <div style={loginPageStyles} className="App">
                    {this.state.user ? (
                        <div>
                            <h2>Zalogowany</h2>
                            {/* <pre>{JSON.stringify(this.state.user, null, 2)}</pre> */}
                            <button
                                onClick={this.handleLogout}
                                disabled={this.state.isPending}
                            >
                                Wyloguj
              </button>
                        </div>
                    ) : (
                            <form style={loginFormStyle} onSubmit={this.handleSubmit}>
                                <input
                                style={loginInputStyle}
                                    type="email"
                                    placeholder="E-Mail"
                                    onChange={this.handleChange}
                                    disabled={this.state.isPending}
                                />
                                <input
                                style={loginInputStyle}
                                    type="password"
                                    placeholder="Hasło"
                                    onChange={this.handleChange}
                                    disabled={this.state.isPending}
                                />
                                <Button style={{padding:"11px", marginRight:"5px", backgroundColor:"inherit", border:"none", }} disabled={this.state.isPending}>LOG IN</Button>
                            </form>
                        )}
                    <Route
                        path="/Home"
                        component={() => (
                            <div>
                                {!this.state.user && !this.state.isPending && (
                                    <Redirect to="/" />
                                )}

                            </div>
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default Login;