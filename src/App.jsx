import React from 'react';
import { Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Nav from './components/Nav';
import Projects from './components/projects/Projects';
import SketchBook from './components/sketch/SketchBook';
import About from './components/about/About';
import Home from './components/Home';
import './App.css';

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
      showsketch: true,
      sketchModal: false,
    }

  }

  handleHideScroll = () => {
    this.setState({ showScroll: false });
  }

  handleHideName = () => {
    this.setState({ showName: false });
  }

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  handlesketch = () => {
    this.setState({
      showsketch: true,
      showWriting: false
    });
  }

  handlesketchModal = (e) => {
    e.persist();
    const currentsketchURL = e.target.src;
    // if (!this.state.sketchModal) {
    //   this.setState({ sketchModal: currentsketchURL });
    // } else {
    //   this.setState({ sketchModal: false });
    // }
  }

  handleResume = () => {
    this.setState(prevState => ({
      showResume: !prevState.showResume
    }))
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

          <Route exact path="/" render={() => <Home
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
            handlesketch={this.handlesketch}
            handlesketchModal={this.handlesketchModal}
            showWriting={this.state.showWriting}
            showsketch={this.state.showsketch}
          />} />
          <Route path="/about" render={() => <About
            handleResume={this.handleResume}
          />} />


        </ ParallaxProvider>
      </div>
    );
  }
}

export default App;
