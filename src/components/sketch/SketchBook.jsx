import React, { Component } from 'react';

import { Fade } from 'react-reveal';
import { Image } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class SketchBook extends Component {
  render() {
    const designURLS = ['design1.jpg', 'design2.jpg', 'design3.jpg', 'design4.jpg'];
    const designs = designURLS.map((design, i) => {
      return (

        <Image
          src={design}
          className='design-thumb'
          id={'design-' + i}
          size='small'
          onClick={props.handleDesignModal}
        />
      )
    });

    return (
      <Fade left opposite when={props.showDesign} >
        <div className='design'>
          <h1>design</h1>
          <ScrollableAnchor id={'design'}>
            <div className='design-header'>
              <p>I was asked to write instruction for my successor in previous job and I drew 20 pages instead.</p>
              <p className='enlarge'>(click to enlarge)</p>
            </div>
          </ScrollableAnchor>
          <div className='design-port'>
            <Fade left cascade when={props.showDesign} >
              {designs}
            </Fade>
          </div>
          <div className='design-footer'>
            <p>I spent seven years of my life drawing on weekends. It was nothing.</p>
          </div>
        </div>
      </Fade>
    )
  }
}

