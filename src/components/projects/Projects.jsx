import React, { Component } from 'react';

import './Projects.css';
import projectlist from '../../data/projects.json';

import { Waypoint } from 'react-waypoint';
import { Parallax } from 'react-scroll-parallax';
import { Fade } from 'react-reveal';
import { Icon } from 'semantic-ui-react';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: 226, scrollDuration: 200 });


export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectsleft: [],
      projectsright: [],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      showDemo: false,
    }
  }

  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }


  componentDidMount() {
    const projects = this.shuffle(projectlist).slice(0, 6);
    this.setState({
      projectsleft: projects.slice(0, 3),
      projectsright: projects.slice(3, 6)
    })
  }

  handle1 = () => {
    this.setState({ show1: !this.state.show1 });
  }

  handle2 = () => {
    this.setState({ show2: !this.state.show2 });
  }

  handle3 = () => {
    this.setState({ show3: !this.state.show3 });
  }

  handle4 = () => {
    this.setState({ show4: !this.state.show4 });
  }

  showDemo = () => {
    this.setState({ showDemo: true });
  }

  hideDemo = () => {
    this.setState({ showDemo: false });
  }

  render() {
    return (
      <div className="project-page-container">
        <h2>project List</h2>
        <div className="project-container">
          <div className="project-container-left">
            {this.state.projectsleft.map(p =>
              <Fade clear opposite when={this.state.show1}>
                <div className="project">
                  <Waypoint onEnter={this.handle1} onLeave={this.handle1} />
                  <Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
                    <img src='/bg.png' className='project-img' alt='PROJECT thumbnail' />
                  </Parallax>
                  
                  <Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
                    <div className='project-body'>
                      <div className='project-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
                        <h1>
                          <a href='#'>{p.project}</a>
                        </h1>
                        <Icon name='chevron left' className='demo-arrow' />
                        <div className='demo'>
                          <Fade right when={this.state.showDemo} >click to demo</Fade>
                        </div>
                      </div>
                      <p>{p.description}</p>
                    </div>
                  </Parallax>
                </div>
              </Fade>)}
            <div className="project-refresh">
            </div>

          </div>
          <div className="project-container-right">
            {this.state.projectsright.map(p =>
              <div className="project">
                <h2>{p.project}</h2>
                <p>{p.time}</p>
                <p>{p.description}</p>
              </div>)}
            <div className="project-refresh">
            </div>

          </div>
        </div>
      </div>
    )
  }
}
