import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { runInThisContext } from 'vm';

export default class Nav extends Component {

  render() {
    return (
      <div className="nav-links">

        <Link className="nav-link" to="/">Home</Link>

        <Link className="nav-link" to="/projects">Projects</Link>

        <Link className="nav-link" to="/sketch">SketchBook</Link>

        <Link className="nav-link" to="/about">About</Link>

      </div>
    )
  }
}
