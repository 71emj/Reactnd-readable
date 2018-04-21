import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { initialize, comment } from "./actions";
import { NavBar, Footer } from "./components";
import { PostPage, Dashboard } from "./routes";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.setup();
  }

  render() {
    console.log(this.props);
    const style = {
      minHeight: "calc(100vh - 5rem)",
      padding: "10rem 0 3rem",
      boxSizing: "border-box"
    };

    return (
      <div className="App">
        <Route path="*" component={NavBar} />
        <div style={style}>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/post" render={props => (
              <PostPage {...props} />
            )}/>
          </Switch>
        </div>
        <Route path="*" component={Footer} />
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
