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
      designModal: false
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
    if (!this.state.designModal) {
      this.setState({ designModal: currentDesignURL });
    } else {
      this.setState({ designModal: false });
    }
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
          <Route path="/sketch" render={() => <SketchBook />} />
          <Route path="/about" render={() => <About />} />

         

          <div className="home-page-container">
            <div className="home-page">
              <h1>TIBBY XU</h1>
              <h2>DEVELOPER</h2>
              <h2>DESIGNER</h2>
            </div>
          </div>

        </ ParallaxProvider>
      </div>
    );
  }
}

export default App;
