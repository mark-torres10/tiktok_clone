import React, { useRef , useState } from 'react'; 
import "./Video.css"; 
import VideoFooter from "./VideoFooter"; 
import VideoSidebar from "./VideoSidebar"; 

const Video = ({source}) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null); 

    const handleVideoPress = () => {
        // if video is playing, stop it. 
        if (playing) {
            videoRef.current.pause(); 
            setPlaying(false); 
        } 
        // otherwise, play it
        else {
            videoRef.current.play(); 
            setPlaying(true); 
        }
    }

    return (
        <div className="video">
            <video 
                onClick = {handleVideoPress}
                className = "video_player"
                loop = ""
                ref = {videoRef}
                src={source}></video>
            
            {/* VideoFooter */}
            <VideoFooter />
            {/* VideoSidebar */}
            <VideoSidebar />
        </div>
    )
}

export default Video