import React from 'react';

import { Icon } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

const Scroll = (props) => {

  const showScroll = props.showScroll;

  return (
    <Fade bottom opposite when={showScroll}>
      <Icon size='huge' name='chevron down' className='scroll-arrow' />
    </Fade>
  )
}
export default Scroll;
