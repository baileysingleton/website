import React from "react"
import { Link } from "gatsby"

const activeStyles = {
  // color: "blue",
  fontWeight: "bold",
  backgroundImage: "none",
}

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link
      to={props.to}
      style={{ textShadow: "none" }}
      activeStyle={activeStyles}
    >
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 700, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>bailey singleton</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}

    <hr />
    <div>Last updated April 2nd, 2020</div>
  </div>
)
