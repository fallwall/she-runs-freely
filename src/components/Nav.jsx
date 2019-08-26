import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/sketch">SketchBook</Link>
      <Link to="/about">About</Link>
    </div>
  )
}
