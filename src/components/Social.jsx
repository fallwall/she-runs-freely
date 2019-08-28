import React from 'react';
import Email from '../images/email.png';
import Git from '../images/git.png';
import Insta from '../images/insta.png';
import LinkedIn from '../images/linkedin.png';
import Music from '../images/music.png';
import Bounce from 'react-reveal/Bounce';

export default function Social() {
  return (

    <div className="social">
      <Bounce right cascade>
        <a href="mailto:sherunsfreely@gmail.com"><img src={Email} /></a>
        <a href="https://github.com/fallwall"><img src={Git} /></a>
        <a href="https://www.instagram.com/fallwall19/"><img src={Insta} /></a>
        <a href="https://www.linkedin.com/in/tibbyxu/"><img src={LinkedIn} /></a>
        <a href="https://music.apple.com/us/playlist/coding-crushing-it/pl.u-76oNNrBC42qobo"><img src={Music} /></a>


      </Bounce>
    </div>
  )
}
