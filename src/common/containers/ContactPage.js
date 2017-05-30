import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Contact from '../components/Contact';
import * as ContactActions from '../actions/contact';

//Data that needs to be called before rendering the component
//This is used for server side rending via the fetchComponentDataBeforeRending() method
Contact.need = [
  ContactActions.fetchRepos
]

function mapStateToProps(state) {
  const {
    isFetching,
    lastUpdated,
    error,
    results
  } = state.repos || {
    isFetching: true,
    error:false,
    results: []
  };
  return {
    isFetching,
    lastUpdated,
    error,
    results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ContactActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);
