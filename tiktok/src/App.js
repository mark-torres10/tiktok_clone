import React from 'react'; 
import './App.css';
import Video from './Video'; 
import axios from './axios'; 
import VideoSidebar from './VideoSidebar';

function App() {

  const [videos, setVideos] = useState([]); 
  // run when app loads, fetch posts
  useEffect(() => {
    async function fetchPosts() {
      // GET request from backend, to get videos
      const response = await axios.get('/v2/posts'); 
      // update videos state
      setVideos(response.data); 
      return response; 
    }

    fetchPosts(); 
  }, []); 

  return (
    <div className="app">
      <div className = "app_videos">
        {/* loop through videos, add videos */}
        {videos.map(({video}) => (
          <Video 
            source={source}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
