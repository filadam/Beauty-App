import React from "react";
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";
import "firebase/auth";
import Fire from '../../../config/firebase.config'
import UserPanel from "../userpanel";

const loginPageStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
}
const loginFormStyle = {

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to left, #acffff, #8ef7f2, #6eefe4, #4ae7d4, #0adec2)",
    borderRadius: "5px 5px",

}
const loginInputStyle = {
    border: "none",
    padding: "10px",
    margin: "5px",
    height: 50,
    width: "450px",
}
class Login extends React.Component {
    state = {
        email: "",
        password: "",
        isPending: true
    };

    componentDidMount() {
        this.setState({ isPending: true });
        Fire.auth().onAuthStateChanged(user => {
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
        Fire
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                console.log(error);
                if (error.code === "auth/email-already-in-use") {
                    Fire
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
        Fire
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
                            <h2
                                style={{
                                    marginLeft: "45px",
                                    fontSize: "1.5rem",
                                    fontFamily: "'Roboto'",
                                    fontWeight: 500,
                                    lineHeight: 1.75,
                                    letterSpacing: "0.02857em",
                                    textTransform: "uppercase"
                                }}
                            >
                                Jesteś zalogowany
                                </h2>
                            <button
                                style={{
                                    padding: "11px",
                                    backgroundColor: "inherit",
                                    border: "none",
                                    color: "white",
                                    fontSize: "0.875rem",
                                    fontFamily: "'Roboto'",
                                    fontWeight: 500,
                                    lineHeight: 1.75,
                                    letterSpacing: "0.02857em",
                                    textTransform: "uppercase",
                                    borderRadius: "5px 5px",
                                    background: "linear-gradient(to right, #acffff, #8ef7f2, #6eefe4, #4ae7d4, #0adec2)"
                                }}
                            >
                                <Link style={{ color: "white", textDecoration: "none" }} to="/userpanel/">
                                    Przejdź do panelu
                                    </Link>
                            </button>
                            <button
                                onClick={this.handleLogout}
                                disabled={this.state.isPending}
                                style={{
                                    padding: "11px",
                                    marginLeft: "80px",
                                    backgroundColor: "inherit",
                                    border: "none",
                                    color: "white",
                                    fontSize: "0.875rem",
                                    fontFamily: "'Roboto'",
                                    fontWeight: 500,
                                    lineHeight: 1.75,
                                    letterSpacing: "0.02857em",
                                    textTransform: "uppercase",
                                    borderRadius: "5px 5px",
                                    background: "linear-gradient(to right, #acffff, #8ef7f2, #6eefe4, #4ae7d4, #0adec2)"
                                }}
                                disabled={this.state.isPending}
                            >
                                Wyloguj się
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
                                <button
                                    style={{
                                        padding: "11px",
                                        marginRight: "5px",
                                        backgroundColor: "inherit",
                                        border: "none",
                                        color: "white",
                                        fontSize: "0.875rem",
                                        fontFamily: "'Roboto'",
                                        fontWeight: 500,
                                        lineHeight: 1.75,
                                        letterSpacing: "0.02857em",
                                        textTransform: "uppercase"
                                    }}
                                    disabled={this.state.isPending}
                                >
                                    ZALOGUJ SIĘ
                                    </button>
                            </form>
                        )}

                </div>
            </BrowserRouter>
        );
    }
}

export default Login;