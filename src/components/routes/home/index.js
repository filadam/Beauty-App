import React from 'react'
import SearchBox from '../../layout/searchbox/index'
import YtBackground from '../../layout/ytvid/index'
import AboutMe from '../../layout/aboutme/index'
const containerStyle = {
    backgroundColor: "#white",
    height: "700px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10",
}

class Home extends React.Component {
    render() {
        return (

            <div className="container">
                <div style={containerStyle}>
                    <YtBackground />
                    <SearchBox />
                </div>
                <div>
                    <AboutMe />
                </div>
            </div>
        )
    }
}

export default Home;