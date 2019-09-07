import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


export default class Nav extends Component {

  render() {
    return (
      <div className="nav-links">
        <div className="nav-links-top">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
        </div>
        <div className="nav-links-bottom">
          <Link className="nav-link" to="/sketch">SketchBook</Link>
          <Link className="nav-link" to="/about">About</Link>
        </div>
      </div>
    )
  }
}
