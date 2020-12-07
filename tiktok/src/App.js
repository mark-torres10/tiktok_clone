import React from 'react'; 
import './App.css';
import Video from './Video'; 

function App() {
  return (
    <div className="app">
      <div className = "app_videos">
        <Video 
          source = "https://v25.tiktokcdn.com/e8ec0df2745af3f7c2cfe76a50f71c27/5fcea874/video/tos/useast2a/tos-useast2a-pve-0068/4a42d4d7b6a04b6f909f65d8dcdcfc8a/?a=1233&br=2466&bt=1233&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202012071610200101890731323301EF48&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2d3aHd2M2poeTMzaDczM0ApaTg7NGU4aDtmNzRkPGg4N2c0azU2ZmJpai9fLS00MTZzczUwNS5fM2IuM15jNC80L2I6Yw%3D%3D&vl=&vr="
          channel = "YouTube"
          description = "Sample TikTok video" 
          song = "99 problems but REACT ain't one" 
          likes = {103946}
          messages = {3422}
          shares = {9788}/>
        <Video 
          source = "https://v25.tiktokcdn.com/ed70639e0c0333ac88e38449a33c9e10/5fcea884/video/tos/useast2a/tos-useast2a-ve-0068c001/ac7903ad006a4a2e90aecd7f13a3df35/?a=1233&amp;br=3758&amp;bt=1879&amp;cd=0%7C0%7C1&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=202012071610200101890731323301EF48&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=amtsaW94PDw0eDMzZzczM0ApaWQ2ODozMzw0N2U1aTg3N2cvb2ctY2ZnZHBfLS1jMTZzc140LjYwLzIxNmJfYS5fYDI6Yw%3D%3D&amp;vl=&amp;vr="
          channel = "George the Monkey"
          description = "Just your everyday pet money, doing monkey things"
          song = "Curious George"
          likes = {45563}
          messages = {1922}
          shares = {6771}/>
      </div>
    </div>
  );
}

export default App;
