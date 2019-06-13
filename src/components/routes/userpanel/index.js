import React from 'react'
import './style.css'

const styledContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px"
}
const styledUserContainer = {
    background: "#E9E9E9",
    width: "40%",
    height: "700px",
    borderRadius: "20px 20px",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontWeight: 500,
    lineHeight: 1.75,
    borderRadius: "4px",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    fontSize: "0.875rem",
}
const inputStyle = {
    minHeight: "50px",
    minWidth: "500px",
    padding: 10,
    border: "none",
}
const styledImg = {
    borderRadius: "1000px",
    height: "200px",
    // marginLeft: "150px",
}
const gradientDiv = {
    background: "linear-gradient(to right, #acffff, #8ef7f2, #6eefe4, #4ae7d4, #0adec2)",
    borderRadius: "1000px",
    height: "220px",
    width: "220px",
    marginLeft: "150px",
    marginTop: "40px",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: "150px",
}

class UserPanel extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=1")
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data.results });
            });
    }

    render() {
        return (
            <div style={styledContainer}>
                {this.state.users.map(user => (
                    <div key={user.id} style={styledUserContainer}>
                        <div style={gradientDiv}><img style={styledImg} src={user.picture.large} /></div>
                        <p>IMIĘ:</p>
                        <input style={inputStyle} placeholder={user.name.first} />
                        <p>Nazwisko:</p>
                        <input style={inputStyle} placeholder={user.name.last} />
                        <p>E-mail:</p>
                        <input style={inputStyle} placeholder={user.email} />
                        <p>Telefon:</p>
                        <input style={inputStyle} placeholder={user.phone} />

                    </div>
                ))}
            </div>
        )
    }
}

export default UserPanel;