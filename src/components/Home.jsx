import React from 'react';
import Scroll from './Scroll';
import Title from './Title';
import { Fade } from 'react-reveal';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function Home(props) {

  return (
    <div>
      <div className='splash-page'>
        <Fade clear when={!props.loaded} >
          <div className='load-screen'>
          </div>
        </Fade>
        <ParallaxBanner
          className='splash-parallax'
          layers={[
            {
              image: '/teton-11.png',
              amount: 0,
            }, {
              image: '/teton2.png',
              amount: 0.6,
            }, {
              image: '/teton3.png',
              amount: 0.2,
            }, {
              image: '',
              amount: 0.1,
              children: <div className='scroll'>
                <Scroll showScroll={props.showScroll} />
              </div>
            }, {
              image: '',
              amount: 0.9,
              children: <>
                <Title showName={props.showName} />
              </>,
            }
          ]}
          style={{
            height: '700px',
          }}
        >
        </ParallaxBanner>
      </div>
    </div>
  )
}

