import React from 'react'

const styledContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px"
}
const styledUserContainer = {
    background: "#E9E9E9",
    width: "70%",
    height: "700px",
    borderRadius: "50px 20px",
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
                        <input placeholder={user.name.first} />
                        <input placeholder={user.name.last} />
                        <input placeholder={user.email} />
                        <input placeholder={user.name.first} />
                        <input placeholder={user.name.first} />

                    </div>
                ))}
            </div>
        )
    }
}

export default UserPanel;