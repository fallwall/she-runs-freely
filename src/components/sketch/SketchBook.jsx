import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import { Image } from 'semantic-ui-react';

import './Sketch.css';
import SketchBox from './SketchBox';

export default class SketchBook extends Component {
  render() {
    const sketchURLS = ['pic1.jpg', 'pic2.jpg', 'pic1.jpg', 'pic2.jpg'];
    const sketchs = sketchURLS.map((sketch, i) => {
      return (

        <Image
          src={sketch}
          className='sketch-thumb'
          id={i}
          size='small'
          onClick={this.props.handlesketchModal}
        />
      )
    });

    return (
      <>
        <h1>SKETCH</h1>
        <Fade left opposite when={this.props.showsketch} >

          <div className='sketch'>
            
          
              <div className='sketch-header'>
                <p>I was asked to write instruction for my successor in previous job and I drew 20 pages instead.</p>
                <p className='enlarge'>(click to enlarge)</p>
              </div>
        
            <div className='sketch-port'>
              <Fade left cascade when={this.props.showsketch} >

                {sketchs}
              </Fade>
            </div>
            <div className='sketch-footer'>
              <p>Music inspired.</p>
            </div>
          </div>
        </Fade>
        <SketchBox
          handlesketchModal={this.props.handlesketchModal}
          sketchModal={this.props.sketchModal}
        />
      </>
    )
  }
}

