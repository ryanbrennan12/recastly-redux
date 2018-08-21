// import React from 'react';
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import { bindActionCreators } from '../../node_modules/redux';

const mapStateToProps = (state) => {
  return {videos: state.videoList}
};

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators({
  //   handleVideoListEntryTitleClick: dispatch(changeVideo)
  // }, dispatch);

  return {
    handleVideoListEntryTitleClick: (video) => {
      dispatch(changeVideo(video));
    }
  }
}


// handleVideoListEntryTitleClick(video) {
//   this.setState({currentVideo: video});
//   store.dispatch(video);
// }

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;