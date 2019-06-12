import React from 'react';
import Video from "./JUMBO-BEAUTY-NAILS-_1_.webm";

const videoStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "hidden",
    zIndex: -100,
    minWidth:"100%",
    minHeight:"100%"
}
 
class YtBackground extends React.Component {
  render() {
    return(
            <div class id="theVideo">
                <video style={videoStyles} id="samp" autoPlay muted loop>
                    <source src = {Video} type="video/mp4">
                    </source>
                </video>
            </div>
    );
  }
}

export default YtBackground