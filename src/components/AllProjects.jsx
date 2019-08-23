import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AllProjects.css';
import projectlist from '../data/projects.json';

export default class AllProjects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      hover: false
    }
  }

  componentDidMount() {
    const projects = projectlist;
    this.setState({
      projects: projects
    })
  }

  onMouseEnter = () => {
    this.setState({
      hover: true
    });
  }

  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  }

  clickedTile = () => {
    const data = {
      image: this.props.image,
      link: this.props.link,
      caption: this.props.caption,
    };
    this.props.clickedTile(data, this.props.index);
  }

  getTileRank = () => {
    const id = this.props.id;
    return parseInt(id.replace(/\D/g, ''), 10);
  }

  render() {
    if (this.state !== null && this.state.hover) {
      backgroundClass = `${backgroundClass} photo-tile-background-hover`;
    }

    const rank = this.getTileRank();
    let delay = (rank * 0.05) + 0.05;
    let entranceAnimation = 'tile-entrance';

    if (rank >= 20) {
      delay = 0;
      entranceAnimation = 'tile-skip-entrance';
    }

    const tileStyle = {
      width: this.props.size.width,
      paddingTop: this.props.size.height,
      animationDelay: `${delay}s`,
      cursor: 'pointer',
    };


    return (
      <div>
        <p>This is a full list of porjects.</p>
        <div className="all-projects-container">
          {this.state.projects.map(p =>
            <div className={`project-box tile ${entranceAnimation}`}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              onClick={this.clickedTile}
              role="link"
              tabIndex="0"
              style={tileStyle}
            >
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className={backgroundClass} style={backgroundStyle}>
              </div>
            </div>)}
        </div>
      </div>
    )
  }
}

PhotoTile.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string,
  link: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
  clickedTile: PropTypes.func.isRequired,
};
