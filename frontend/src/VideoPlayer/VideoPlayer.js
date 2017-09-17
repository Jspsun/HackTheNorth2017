import React, { Component } from 'react';
import styled from 'styled-components';
import {MaterialCard} from '../UI/MaterialCard'

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
  }

  downloadVideo = () => {
    fetch('http://localhost:1338/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
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
          <iframe src={this.props.videoUrl} />
        </IframeWrapper>
      </VideoPlayerWrapper>
    );
  }

  componentDidMount() {
    this.interval=setInterval(() => {
      //get video time
      var curVideoTime = 0;
      console.log("Making request in VideoPlayer at time: " + curVideoTime);
      this.props.triggerTextRequest(curVideoTime);
    
    }, 1000);
  }
}
