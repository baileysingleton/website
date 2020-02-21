import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Global, css } from "@emotion/core";

import Home from "./pages/Home";
import ResumeViewer from "./pages/ResumeViewer";
const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Muli");
  body {
    font-family: "Muli", sans-serif;
    margin: 0;
  }
  background-color: red;
`;

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      {/* <Navbar /> */}
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <ResumeViewer />
          </Route>
          <Route path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
