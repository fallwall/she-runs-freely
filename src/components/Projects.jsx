import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import projectlist from '../data/projects.json';


export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectsleft: [],
      projectsright: [],
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

  render() {
    return (
      <div>
        <h2>project List</h2>
        <div className="project-container">
          <div className="project-container-left">
            {this.state.projectsleft.map(p =>
              <div className="project">
                <h2>{p.project}</h2>
                <p>{p.time}</p>
                <p>{p.description}</p>
              </div>)}
            <div className="project-refresh">
            </div>
              <Link className="link-button" to="/projects-all">see full list of projects</Link>
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
              <Link className="link-button" to="/projects-all">see full list of projects</Link>
          </div>
        </div>
      </div>
    )
  }
}
