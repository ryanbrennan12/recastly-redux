import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
// import currentVideoReducer from '../reducers/currentVideo.js';
// import videoListReducer from '../reducers/videoList.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  //videos: videos;
  const options = {
    key: YOUTUBE_API_KEY,
    query: q
  }
  return (dispatch) => {
    searchYouTube(options, (videos, error) => {
      console.log(error);
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  }
};



export default handleVideoSearch;
