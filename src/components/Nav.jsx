import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


export default class Nav extends Component {

  render() {
    return (
      <div className="nav-links">

        <Link className="nav-link" to="/">Home <span>/</span> </Link>

        <Link className="nav-link" to="/projects">Projects <span>/</span> </Link>

        <Link className="nav-link" to="/sketch">SketchBook <span>/</span> </Link>

        <Link className="nav-link" to="/about">About</Link>

      </div>
    )
  }
}
