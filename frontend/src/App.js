import React, { Component } from 'react';
import {NavBar} from './Navbar/NavBar';
import {VideoPlayer} from './VideoPlayer';
import {TextBox} from './TextBox';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      videoUrl: "https://www.youtube.com/embed/9pdj4iJD08s",
      responseText: "default response text",
    }
  }
  onVideoSelect = videoUrl => {
    this.setState({ videoUrl: videoUrl.replace(/\watch\?v=/g, 'embed/') });
  }
  
  triggerTextRequest = responseText => {
    this.setState({responseText: this.postRequest()});
  }

  render() {
    return (
      <div>
        <NavBar onVideoSelect={this.onVideoSelect} />
        <VideoPlayer videoUrl={this.state.videoUrl} triggerTextRequest={this.triggerTextRequest}/>
        <TextBox responseText={this.state.responseText}/>
      </div>
    );
  }
  
  postRequest(){
    console.log("posting request in App");
    
    //return response
  }

}

export default App;
