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
      responseText: '',
      videoUrl: 'https://www.youtube.com/embed/Ykc5COodXis',
      dp: {},
      search: null,
      title: 'Scala Tutorials - Closures' 
    }
    this.setTitle()
  }

  setTitle = () => {
    fetch('http://localhost:1338/search?title=' + this.state.title, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 100,
    }).then(resp => {
      return resp.json();
    }).then(resp => {
      this.setState({
        search: resp
      })
    })
  }

  onVideoSelect = (videoUrl) => {
    this.setState({ videoUrl: videoUrl.replace(/\watch\?v=/g, 'embed/'), dp: {} });
    if (videoUrl.replace(/\watch\?v=/g, 'embed/') !== 'https://www.youtube.com/embed/Ykc5COodXis') {
      this.setState({
        title: 'Molarity - Chemistry Tutorial'
      })
    }
    this.setTitle()
  }
  
  triggerTextRequest = (time) => {
    if (time in this.state.dp) {
      this.setState({
        responseText: this.state.dp[time]
      })
      return;
    }

    fetch('http://localhost:1338/?id=' + this.state.videoUrl + '&time=' + time, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 100,
    }).then(resp => {
      return resp.json();
    }).then(resp => this.setState({
      responseText: resp
    }))
    this.state.dp[time] = this.state.responseText
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
        <SuggestedReadings readings={this.state.search} title={this.state.title} url={this.state.videoUrl}/>
        <KeyTerms url={this.state.videoUrl}/>        
      </div>
    );
  }
  
}

export default App;
