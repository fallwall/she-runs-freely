import React from 'react';
import { Fade } from 'react-reveal';

const Scroll = (props) => {

  const showScroll = props.showScroll;

  return (
    <Fade bottom opposite when={showScroll}>
      <h2>Web Designer & Developer</h2>
    </Fade>
  )
}
export default Scroll;
