// import React from 'react';
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import { bindActionCreators } from '../../node_modules/redux';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleVideoListEntryTitleClick: changeVideo
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {videos: state.videoList}
};

var VideoListContainer = () => {

};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.


//handleVideoListEntryTitleClick (mapDispatch)
//videos (mapState)

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);