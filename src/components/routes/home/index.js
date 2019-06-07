import React from 'react'
import SearchBox from '../../layout/searchbox/index'
const containerStyle = {
    backgroundColor: "white",
    height:"1000px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}

class Home extends React.Component {
    render() {
        return (
            <div style={containerStyle} className="container">
                <SearchBox />
            </div>
        )
    }
}

export default Home;