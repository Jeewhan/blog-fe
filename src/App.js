import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
// import PostIndex from "./pages/post/PostIndex";
import TopPost from "./pages/post/TopPost";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={TopPost} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
