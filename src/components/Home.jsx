import React from 'react';
import Scroll from './Scroll';
import Title from './Title';
import { Fade } from 'react-reveal';
import { ParallaxBanner } from 'react-scroll-parallax';
import HomeContent from './HomeContent';

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
              image: '/teton1.png',
              amount: 0.0,
            }, {
              image: '/teton2.png',
              amount: -0.3,
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
              amount: 0.8,
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
      <HomeContent />
    </div>
  )
}

