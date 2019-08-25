import React, { Component } from 'react';
import Skills from './Skills';
import Waypoint from 'react-waypoint';
import { Fade } from 'react-reveal';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -60, scrollDuration: 200 });

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className='bio-container'>
          <Waypoint onEnter={props.handleHideScroll} />
          <Fade clear cascade>
            <ScrollableAnchor id={'hi'}	>
              <div className='intro'>
                <p className='drop-cap-graf'>Hiiii. I'm Tibby Xu - run all the mile and drink all the ciders.</p>
              </div>
            </ScrollableAnchor>
            <Waypoint onEnter={props.handleHideName} />
            <div className='bio'>
              <div className='prof-pic-container'>
                <img src={insert image after importing} className='prof-pic' alt='something?' />
                <Skills handleResume={props.handleResume} />
              </div>
              <div className='bio-copy'>
                <h1>about me</h1>
                <p> Some bio here.
						</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}
