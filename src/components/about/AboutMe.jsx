import React, { Component } from 'react';
import Skills from './Skills';
import { Fade } from 'react-reveal';
import Jump from 'react-reveal/Jump';

import ProPic from '../../images/temp_profile.jpg';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Jump><h1>ABOUT ME</h1></Jump>
        <div className='bio-container'>

          <Fade clear cascade>

            <div className='intro'>
              <p className='intro-more'>Hiiii. I'm Tibby Xu - run all the mile and drink all the ciders.</p>
            </div>


            <div className='bio'>
              <div className='profile-pic-container'>
                <img src={ProPic} className='profile-pic' alt='write something?' />
                <Skills handleResume={this.props.handleResume} />

              </div>
              <div className='bio-copy'>

                <p>New York City based maker, web designer & developer.</p>
                <p>Never not learning, creating, and exploring something new.</p>
                <p>Can be found coding from either a coffee shop or a cider bar.</p>
                <p>Currently calls Upper West Side home with fierce kitty Roe.</p>
                <p>Running since 2014, chasing unicorn and a bi-coastal dream.</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}
