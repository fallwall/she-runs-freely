import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';

import Projects from './components/projects/Projects';
import SketchBook from './components/sketch/SketchBook';
import About from './components/about/About';

import Home from './components/Home';
import './App.css';
import Slide from 'react-reveal/Slide';
import { ParallaxProvider } from 'react-scroll-parallax';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      showScroll: true,
      showName: true,
      showModal: false,
      showResume: false,
      showWriting: false,
      showDesign: true,
      designModal: false,
    }

  }

  handleHideScroll() {
    this.setState({ showScroll: false });
  }

  handleHideName() {
    this.setState({ showName: false });
  }

  handleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleDesign() {
    this.setState({
      showDesign: true,
      showWriting: false
    });
  }

  handleDesignModal(e) {
    e.persist();
    const currentDesignURL = e.target.src;
    // if (!this.state.designModal) {
    //   this.setState({ designModal: currentDesignURL });
    // } else {
    //   this.setState({ designModal: false });
    // }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 500);
  }

  render() {



    return (
      <div className="App">
        <ParallaxProvider>
          <header>
            <Nav />
          </header>

          <Route path="/" render={() => <Home
            loaded={this.state.loaded}
            handleModal={this.handleModal}
            handleResume={this.handleResume}
            showScroll={this.state.showScroll}
            showName={this.state.showName}
          />} />
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/sketch" render={() => <SketchBook
            handleHideScroll={this.handleHideScroll}
            handleHideName={this.handleHideName}
            handleModal={this.handleModal}
            handleResume={this.handleResume}
            handleWriting={this.handleWriting}
            handleDesign={this.handleDesign}
            handleDesignModal={this.handleDesignModal}
            showWriting={this.state.showWriting}
            showDesign={this.state.showDesign}
          />} />
          <Route path="/about" render={() => <About />} />

        </ ParallaxProvider>
      </div>
    );
  }
}

export default App;
