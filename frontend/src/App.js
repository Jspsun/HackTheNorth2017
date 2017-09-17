import React, { Component } from 'react';
import {NavBar} from './Navbar/NavBar';
import {VideoPlayer} from './VideoPlayer';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      videoUrl: "https://www.youtube.com/embed/9pdj4iJD08s",
    }
  }
  onVideoSelect = videoUrl => {
    this.setState({ videoUrl: videoUrl.replace(/\watch\?v=/g, 'embed/') });
  }

  render() {
    return (
      <div>
        <NavBar onVideoSelect={this.onVideoSelect} />
        <VideoPlayer videoUrl={this.state.videoUrl} />
      </div>
    );
  }
}

export default App;
