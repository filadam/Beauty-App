import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import "firebase/auth";
import Fire from '../../../config/firebase.config'
import { flexbox } from "@material-ui/system";
import { FaCentercode } from "react-icons/fa";

const loginPageStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
}
const loginFormStyle = {
    background: "linear-gradient(to left, #acffff, #8ef7f2, #6eefe4, #4ae7d4, #0adec2)",
    borderRadius: "5px 5px",

}
const loginInputStyle = {
    border: "none",
    padding: "10px",
    margin: "5px",
    height: 50,
    width: "450px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

class SignIn extends React.Component {
    state = {
        name: "",
        surname: "",
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
        this.setState({ isPending: true });
        Fire
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(function (error) {
                alert(error.message);
                this.setState({ isPending: false });
            });
    };

    handleChange = e => {
        this.setState({
            [e.target.type]: e.target.value
        });
    };

    render() {
        return (
            <BrowserRouter >
                <div style={loginPageStyles} className="App">
                    {this.state.user ? (
                        <div>
                            <h2>Twoje konto zostało utworzone</h2>
                            <button
                                    style={{
                                        padding: "11px",
                                        marginLeft:"100px",
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
                                        background:"linear-gradient(to right, #acffff, #8ef7f2, #6eefe4, #4ae7d4, #0adec2)"
                                    }}
                                    disabled={this.state.isPending}
                                >
                                    <Link style={{color:"white", textDecoration:"none"}} to="/">Przejdź na stronę główną</Link>
                                    </button>
                        </div>
                    ) : (
                            <form style={loginFormStyle} onSubmit={this.handleSubmit}>
                                <input
                                    style={loginInputStyle}
                                    type="name"
                                    placeholder="Imię"
                                    onChange={this.handleChange}
                                    disabled={this.state.isPending}
                                />
                                <input
                                    style={loginInputStyle}
                                    type="surname"
                                    placeholder="Nazwisko"
                                    onChange={this.handleChange}
                                    disabled={this.state.isPending}
                                />
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
                                    Zarejestruj się
                                    </button>
                            </form>
                        )}
                </div>
            </BrowserRouter>
        );
    }
}

export default SignIn;