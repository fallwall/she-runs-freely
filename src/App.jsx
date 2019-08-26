import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/projects/Projects';
import SketchBook from './components/sketch/SketchBook';
import About from './components/about/About';

import Home from './components/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>

        <Route path="/" render={() => <Home />} />
        <Route path="/projects" render={() => <Projects />} />
        <Route path="/sketch" render={() => <SketchBook />} />
        <Route path="/about" render={() => <About />} />
  
      </div>
    );
  }
}

export default App;
