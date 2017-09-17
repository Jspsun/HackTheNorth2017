import React, { Component } from 'react';
import styled from 'styled-components';
import {MaterialCard} from '../UI/MaterialCard';
import YouTube from 'react-youtube';

const VideoPlayerWrapper = styled.div`
  display: inline-block;
  width: 75%;
  max-height: 100%;
  position: relative;
`

const IframeWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 56.25%;
  position: relative;

  iframe {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

export class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      e: null
    }
  }

  downloadVideo = () => {
    fetch('http://localhost:1338/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.props.videoUrl
      })
    })
  }

  render() {
    var width = window.innerWidth;
    this.downloadVideo()

    return (
      <VideoPlayerWrapper>
        <IframeWrapper>
          <YouTube
            videoId={this.props.videoUrl.replace('https://www.youtube.com/embed/', '')}
            onReady={this._onReady}
            onStateChange={(e)=> {
              this.setState({
                e: e.target
              })
            }}
          />
          {/* <iframe id="player" frameborder="0" type="text/html" src={this.props.videoUrl + '?enablejsapi=1'} /> */}
        </IframeWrapper>
      </VideoPlayerWrapper>
    );
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      if (this.state.e !== null) {
        console.log("Making request in VideoPlayer at time: " + this.state.e.getCurrentTime());
        this.props.triggerTextRequest(parseInt(this.state.e.getCurrentTime()) + 1);
      }
    
    }, 2000);
  }
}
