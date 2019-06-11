import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
const loginPageStyles = {
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    height:"100vh",
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
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Wprowadz email"
                                    onChange={this.handleChange}
                                    disabled={this.state.isPending}
                                />
                                <input
                                    type="password"
                                    placeholder="Twoje haslo"
                                    onChange={this.handleChange}
                                    disabled={this.state.isPending}
                                />
                                <button disabled={this.state.isPending}>Go!</button>
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