import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import Jump from 'react-reveal/Jump';
import { Image } from 'semantic-ui-react';

import './Sketch.css';


export default class SketchBook extends Component {
  render() {
    const sketchURLS = [
      'https://i.imgur.com/xpSTghz.jpg',
      'https://i.imgur.com/YqsexQY.jpg',
      'https://i.imgur.com/iQTzSNU.jpg',
      'https://i.imgur.com/cOoNix5.jpg',
      'https://i.imgur.com/DSQsezb.jpg',
      'https://i.imgur.com/9E9zZaA.jpg'];
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

