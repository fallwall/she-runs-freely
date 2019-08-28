import React from 'react';
import AboutMe from './AboutMe';
import './About.css';

export default function About(props) {
  return (
    <div className="about-stuff">
      <AboutMe handleResume={props.handleResume}/>
    </div>
  )
}
