import React, { Component } from 'react';
import {NavBar} from './Navbar/NavBar';
import {VideoPlayer} from './VideoPlayer/VideoPlayer';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      videoUrl: null,
    }
  }

  onVideoSelect = videoUrl => {
    this.setState({ videoUrl: videoUrl.replace(/\watch\?v=/g, 'embed/') });
  }

  render() {
    return (
      <div>
        <NavBar onVideoSelect={this.onVideoSelect} />
        {this.state.videoUrl &&
          <VideoPlayer videoUrl={this.state.videoUrl} />
        }
      </div>
    );
  }
}

export default App;
