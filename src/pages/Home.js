/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
// import { NavLink } from "react-router-dom";
// import { Route } from "react-router-dom";
import { container, background } from "../css/style";
import { Route } from "react-router-dom";

function Home() {
  return (
    <div css={container}>
      <h1>Hello!</h1>
      <hr />
      <h2>I'm Bailey Singleton</h2>
      <h3>
        Currently, I am enrolled at Oregon State University, where I will be
        graduating mid-March, 2020.{" "}
      </h3>
      <p>stuff - aobut - me</p>
    </div>
  );
}

export default Home;
