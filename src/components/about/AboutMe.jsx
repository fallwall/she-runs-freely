import React, { Component } from 'react';
import Skills from './Skills';
import { Fade } from 'react-reveal';
import Jump from 'react-reveal/Jump';

import ProPic from '../../images/temp_profile.jpg';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Jump><h1 className="page-title">ABOUT ME</h1></Jump>
        <div className='bio-container'>

          <Fade clear cascade>

            <div className='intro'>
              <p className='intro-more'>Hiiii. I'm Tibby Xu. a New York City based web designer & developer.</p>
            </div>


            <div className='bio'>
              <div className='profile-pic-container'>
                <img src={ProPic} className='profile-pic' alt='write something?' />
                <Skills handleResume={this.props.handleResume} />

              </div>
              <div className='bio-copy'>
                <p>I thrive in combining lo-fi themes with hi-fi methods.</p>
                <p>I enjoy learning, creating, and exploring something new.</p>
                <p>Can be found coding from either a coffee shop or a cider bar.</p>
                <p>Currently calls Upper West Side home with fierce kitty Roe.</p>
                <p>Running distance, chasing unicorn and a bi-coastal dream.</p>
                <br />
                <p>For inquiries and collaboration,</p>
                <p>Feel free to<a href="mailto:sherunsfreely@gmail.com">drop me a line.</a></p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}
