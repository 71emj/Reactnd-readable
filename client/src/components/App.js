import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { initialize, comment } from "../actions";
import logo from '../logo.svg';
import Comment from "./Comment";
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.setup();
  }

  testDelete = evt => {
    this.props.delTest({ id: "894tuq4ut84ut8v4t8wun89g" });
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1 onClick={this.testDelete}>Hello World</h1>
        <Comment></Comment>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = initialize =>
  dispatch => ({
    setup: bindActionCreators(initialize, dispatch),
    delTest: bindActionCreators(comment.delComment, dispatch)
  })
const initStore = initialize.initializeStore;

export default connect(
  mapStateToProps,
  mapDispatchToProps(initStore)
)(App);
