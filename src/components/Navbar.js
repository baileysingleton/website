/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import { NavLink } from "react-router-dom";

function Button() {
  const [showSidebar, setShowSidebar] = useState(false);
  const hamburger = css`
    align-text: center;
    display: none;
    font-size: 48px;
    border: none;

    @media (max-width: 768px) {
      display: block;
    }
  `;
  const sidebar = css`
    background-color: mediumvioletred;
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    width: 50%;
    margin: 0;
    li {
      list-style-type: none;
    }
    @media (min-width: 768px) {
      display: none;
    }
  `;

  const sideBarItem = css`
    float: left;
    text-decoration: none;
    width: 400px;
    text-align: left;
    font-size: 32px;
    color: white;
    flex: 1;
    &.active {
      background-color: lightpink;
    }
    &:hover {
      background-color: lightpink;
    }
  `;
  const closeSidebar = css`
    background-color: mediumvioletred;
    align-text: right;
    font-size: 32px;
    color: white;
    outline: none;
    margin: 0;
  `;
  const column = css`
    background-color: mediumvioletred;
    margin: 0;
  `;
  return (
    <div>
      {!showSidebar && (
        <button onClick={() => setShowSidebar(true)} css={hamburger}>
          ☰
        </button>
      )}
      {showSidebar && (
        <div css={sidebar}>
          <div style={{ backgroundColor: "grey" }}>
            <NavLink css={sideBarItem} exact to="/">
              Home
            </NavLink>
          </div>
          <div css={column}>
            <button css={closeSidebar} onClick={() => setShowSidebar(false)}>
              ❮
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const navItem = css`
  float: left;
  text-decoration: none;
  width: 100px;
  height: 100%;
  text-align: center;
  font-size: 32px;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  &.active {
    background-color: lightpink;
  }
  &:hover {
    background-color: lightpink;
  }
`;

export default function Navbar() {
  const navbar = css`
    height: 50px;
    overflow: hidden;
    background-color: mediumvioletred;
    color: white;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  `;

  return (
    <div>
      <div css={navbar}>
        <NavLink css={navItem} exact to="/">
          Home
        </NavLink>
      </div>
      <Button />
    </div>
  );
}
