import React from 'react'
import SearchBox from '../../layout/searchbox/index'
import YtBackground from '../../layout/ytvid/index'
const containerStyle = {
    backgroundColor: "#white",
    height:"700px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex:"10",
}

class Home extends React.Component {
    render() {
        return (
            
            <div style={containerStyle} className="container">
                <YtBackground />
                <SearchBox />
            </div>
        )
    }
}

export default Home;