import React from 'react'; 
import "./Video.css"; 

const Video = ({source}) => {
    return (
        <div className="video">
            <video 
                className = "video_player"
                loop = ""
                src={source}></video>
            
            {/* VideoFooter */}

            {/* VideoSidebar */}
        </div>
    )
}

export default Video