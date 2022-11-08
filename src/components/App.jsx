import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
const { useState, useEffect } = React;

var App = () => {

  const [videos, setVideos] = useState([]);
  const [currVideo, setCurrVideo] = useState(exampleVideoData[0]);

  var changeVideo = function (index) {
    setCurrVideo(videos[index]);
  };

  var updateVideos = function (data) {
    setVideos(data);
  };

  useEffect(() => {
    searchYouTube('cats', (data) => {
      setVideos(data);
    });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchYouTube={searchYouTube} updateVideos={updateVideos}/>
        </div>
        <p>Autoplay On/Off:</p>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={ currVideo }/>
        </div>
        <div className="col-md-5">
          <VideoList videos={ videos } changeVideo={changeVideo}/>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
