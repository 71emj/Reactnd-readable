import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { initialize, comment } from "./actions";
import { NavBar } from "./components";
import { PostPage, Dashboard } from "./routes";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.setup();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Route path="*" component={NavBar} />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/post" render={props => (
            <PostPage {...props} />
          )}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = initialize =>
  dispatch => ({
    setup: bindActionCreators(initialize, dispatch),
    delTest: bindActionCreators(comment.delComment, dispatch)
  });
const initStore = initialize.initializeStore;

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps(initStore)
  )(App)
);
