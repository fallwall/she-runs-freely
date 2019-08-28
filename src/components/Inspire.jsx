import React, { Component } from 'react';
import Typist from 'react-typist';

export default class SketchContent extends Component {
  render() {
    return (
      <div className="inspire">
        <Typist>
          <span> Inspired by Four Tet. </span>
          <Typist.Backspace count={10} delay={200} />
          <span> Pantha Du Prince. </span>
          <Typist.Backspace count={18} delay={200} />
          <span> Nightmares On Wax. </span>
          <Typist.Backspace count={19} delay={200} />
          <span> Sly & The Family Stone. </span>
          <Typist.Backspace count={24} delay={200} />
          <span> Parliament. </span>
          <Typist.Backspace count={12} delay={200} />
          <span> SBTRKT. </span>
          <Typist.Backspace count={8} delay={200} />
          <span> Kendrick Lamar. </span>
          <Typist.Backspace count={16} delay={200} />
          <span> Jon Hopkins. </span>
          <Typist.Backspace count={13} delay={200} />
          <span> Vampire Weekend. </span>
          <Typist.Backspace count={17} delay={200} />
          <span> Gil Scott-Heron. </span>
          <Typist.Backspace count={17} delay={200} />
          <span> Jamie XX. </span>
          <Typist.Backspace count={10} delay={200} />
          <span> Mount Kimbie. </span>
        </Typist>
      </div>
    )
  }
}
