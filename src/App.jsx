import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/Projects';
import SketchBook from './components/SketchBook';
import AllProjects from './components/AllProjects';
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
        <Route path="/projects-all" render={() => <AllProjects />} />
      </div>
    );
  }
}

export default App;
