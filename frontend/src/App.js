import React, { Component } from 'react';
import {NavBar} from './Navbar/NavBar';
import {VideoPlayer} from './VideoPlayer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <VideoPlayer videoUrl="https://www.youtube.com/embed/9pdj4iJD08s" />
      </div>
    );
  }
}

export default App;
