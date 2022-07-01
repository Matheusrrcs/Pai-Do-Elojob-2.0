import React, { Component } from 'react';
import video from "../../assets/video/braum.webm"
import "../Background/background.css"

class BackgroundVideo extends Component {
    render() {
        return (
            <div className="video-full-bg d-flex flex-column vw-100 vh-100 overflow-hidden position-absolute">

                <video className="video-full-bg__clip video-full-bg__clip--black-white" autoPlay muted loop>
                    <source src={video} type="video/webm" />
                </video>

            </div>
        )
    }
}

export default BackgroundVideo;