import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import Jump from 'react-reveal/Jump';
import { Image } from 'semantic-ui-react';

import './Sketch.css';


export default class SketchBook extends Component {
  render() {
    const sketchURLS = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg'];
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
        <Jump><h1>SKETCH</h1></Jump>
        <Fade clear cascade>

          <div className='sketch'>

            <div className='sketch-header'>
              <p>I draw things. Sometimes to clarify something between black and white. </p>
            </div>
            <p className='enlarge'>Lights & Music</p>
            <div className='sketch-port'>
              <Fade left cascade when={this.props.showsketch} >

                {sketchs}
              </Fade>
            </div>
            <div className='sketch-footer'>

            </div>
          </div>
        </Fade>

      </>
    )
  }
}

