import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Fade } from 'react-reveal';


function Title (props) {
  const showName = props.showName;

  const makeName = () => {
    const myName = 'Tibby Xu'.split('');
    const letters = myName.map((letter, i) => {
      return (
        <Parallax
          key={i}
          offsetXMax={100 * (i - 1)}
        >
          <div>
            <h1 className='letter'>{letter}</h1>
          </div>
        </Parallax>
      )
    })
    return letters;
  }
  return (
   
      <div className='name-parallax' >
        <Fade bottom opposite when={showName}>
          {makeName()}
        </Fade>
      </div>

  )
};

export default Title;