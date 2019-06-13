import React from 'react';
import { flexbox } from '@material-ui/system';
import { withTheme } from '@material-ui/styles';

const styledContainer = {
    // marginTop: "500px",
    background: "linear-gradient(to right, #acffff, #8ef7f2, #6eefe4, #4ae7d4, #0adec2)",
    width: "100%",
    padding:"40px",
    fontFamily: "Roboto",
    fontWeight: 500,
    lineHeight: 1.75,
    borderRadius: "4px",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    color:"white",
    // height: "50vh",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
}

class AboutMe extends React.Component {
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
            <div className="row">
                <div style={styledContainer} className="col">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere odio orci, et faucibus nisi pretium vel. Nunc laoreet nibh id rutrum pretium. Maecenas gravida pellentesque nulla nec dictum. Donec ac velit nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ipsum lorem, venenatis at diam id, aliquam luctus nulla. Pellentesque a ipsum id dolor semper rhoncus nec in lacus. Aenean suscipit egestas nisi, vitae varius augue pharetra vel. Mauris fermentum hendrerit mauris eget accumsan. Nulla et sodales mauris, a mattis velit.
                        Sed quis velit sit amet felis ultricies eleifend eget nec massa. Integer euismod orci ut dolor aliquet, at facilisis mi placerat. Morbi blandit nulla non turpis mattis dapibus. Integer in tortor eget leo ornare ultricies eu eget elit. Duis mattis pretium turpis ut eleifend. Sed eleifend justo sit amet eros laoreet mattis. Quisque eget congue lorem. Sed elit neque, lacinia a tortor et, fringilla sagittis ante. Integer est arcu, efficitur sed dignissim eu, porta ac urna.
                    </p>
                    <img style={{ width: "100%" }} src="https://picsum.photos/id/370/4928/3264" />
                </div>
            </div>
        )
    }
}

export default AboutMe; 