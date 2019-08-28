import React, { Component } from 'react';

import './Projects.css';
import projectlist from '../../data/projects.json';

import { Waypoint } from 'react-waypoint';
import { Parallax } from 'react-scroll-parallax';
import { Fade } from 'react-reveal';
import { Icon } from 'semantic-ui-react';
import Jump from 'react-reveal/Jump';


export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      project1: [],
      project2: [],
      project3: [],
      project4: [],
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
    const projects = this.shuffle(projectlist).slice(0, 5);
    this.setState({
      project1: projects[0],
      project2: projects[1],
      project3: projects[2],
      project4: projects[3]
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
      <>
        <Jump><h1>PROJECTS</h1></Jump>
        <Fade>
          <div className="projectall">
            <div className='project-header'>
              <p>I make things like this.</p>
            </div>
            <p className='enlarge'>Also Lights & Music</p>
            <div className="project-page-container">

              <div className="project-container">


                <Fade clear opposite when={this.state.show1}>
                  <div className="project" id="project-1">
                    <Waypoint onEnter={this.handle1} onLeave={this.handle1} />
                    <Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
                      <img src={this.state.project1.coverimage} className='project-img' alt='project1 thumbnail' />
                    </Parallax>
                    <Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
                      <div className='project-body'>
                        <div className='project-head'>
                          {/* <div className='project-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}> */}
                          <h1>
                            <a href={this.state.project1.url} target="_blank">{this.state.project1.project}</a>
                          </h1>
                          <Icon name='chevron left' className='demo-arrow' />
                          <div className='demo'>
                            <Fade right when={this.state.showDemo} >click to demo</Fade>
                          </div>
                        </div>
                        <p>{this.state.project1.description}</p>
                      </div>
                    </Parallax>
                  </div>
                </Fade>

                <Fade clear opposite when={this.state.show2}>
                  <div className="project" id="project-2">
                    <Waypoint onEnter={this.handle2} onLeave={this.handle2} />
                    <Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
                      <img src={this.state.project2.coverimage} className='project-img' alt='project2 thumbnail' />
                    </Parallax>
                    <Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >

                      <div className='project-body'>
                        <div className='project-head'>
                          {/* <div className='project-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}> */}
                          <h1>
                            <a href={this.state.project2.url} target="_blank">{this.state.project2.project}</a>
                          </h1>
                          <Icon name='chevron left' className='demo-arrow' />
                          <div className='demo'>
                            <Fade right when={this.state.showDemo} >click to demo</Fade>
                          </div>
                        </div>
                        <p>{this.state.project2.description}</p>
                      </div>

                    </Parallax>
                  </div>
                </Fade>

                <Fade clear opposite when={this.state.show3}>
                  <div className="project" id="project-3">
                    <Waypoint onEnter={this.handle3} onLeave={this.handle3} />
                    <Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
                      <img src={this.state.project3.coverimage} className='project-img' alt='project3 thumbnail' />
                    </Parallax>
                    <Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >

                      <div className='project-body'>
                        <div className='project-head'>
                          {/* <div className='project-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}> */}
                          <h1>
                            <a href={this.state.project3.url} target="_blank">{this.state.project3.project}</a>
                          </h1>
                          <Icon name='chevron left' className='demo-arrow' />
                          <div className='demo'>
                            <Fade right when={this.state.showDemo} >click to demo</Fade>
                          </div>
                        </div>
                        <p>{this.state.project3.description}</p>
                      </div>

                    </Parallax>
                  </div>
                </Fade>

                <Fade clear opposite when={this.state.show4}>
                  <div className="project" id="project-4">
                    <Waypoint onEnter={this.handle4} onLeave={this.handle4} />
                    <Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
                      <img src={this.state.project4.coverimage} className='project-img' alt='project4 thumbnail' />
                    </Parallax>
                    <Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >

                      <div className='project-body'>
                        <div className='project-head'>
                          {/* <div className='project-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}> */}
                          <h1>
                            <a href={this.state.project4.url} target="_blank">{this.state.project4.project}</a>
                          </h1>
                          <Icon name='chevron left' className='demo-arrow' />
                          <div className='demo'>
                            <Fade right when={this.state.showDemo} >click to demo</Fade>
                          </div>
                        </div>
                        <p>{this.state.project4.description}</p>
                      </div>

                    </Parallax>
                  </div>
                </Fade>

              </div>
            </div>
          </div>
        </Fade>
      </>
    )
  }
}
