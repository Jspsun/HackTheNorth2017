import React, { Component } from 'react';
import { NavBar } from './Navbar/NavBar';
import { TextBox } from './TextBox';
import { VideoPlayer } from './VideoPlayer/VideoPlayer';
import { SuggestedReadings } from './SuggestedReadings/SuggestedReadings';
import { KeyTerms } from './KeyTerms/KeyTerms';
import { MaterialCard } from './UI/MaterialCard';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      responseText: "default response text",
      videoUrl: null,
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
        <MaterialCard>
          {this.state.videoUrl &&
            <VideoPlayer videoUrl={this.state.videoUrl} triggerTextRequest={this.triggerTextRequest}/>
          }
          <TextBox responseText={this.state.responseText}/>
        </MaterialCard>
        <SuggestedReadings />
        <KeyTerms />        
      </div>
    );
  }
  
  postRequest(){
    console.log("posting request in App");
    
    //return response
  }

}

export default App;
