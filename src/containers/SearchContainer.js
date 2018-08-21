import React from 'react';
import Search from './../components/Search.js';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleSearchInputChange: handleSearchChange
  }, dispatch);
}
var SearchContainer = () => {};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(null, mapDispatchToProps)(SearchContainer);


