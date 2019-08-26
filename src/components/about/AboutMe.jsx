import React, { Component } from 'react';
import Skills from './Skills';
import { Fade } from 'react-reveal';

import ProPic from '../../images/temp_profile.jpg';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -60, scrollDuration: 200 });

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className='bio-container'>

          <Fade clear cascade>
            <ScrollableAnchor id={'hi'}	>
              <div className='intro'>
                <p className='intro-more'>Hiiii. I'm Tibby Xu - run all the mile and drink all the ciders.</p>
              </div>
            </ScrollableAnchor>

            <div className='bio'>
              <div className='profile-pic-container'>
                <img src={ProPic} className='profile-pic' alt='something?' />
                {/* <Skills handleResume={props.handleResume} /> */}
                <Skills />
              </div>
              <div className='bio-copy'>
                <h1>about me</h1>
                <p></p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}
