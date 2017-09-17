import React, { Component } from 'react';
import styled from 'styled-components';

const VideoPlayerWrapper = styled.div`
  width: 50%;
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
  render() {
    var width = window.innerWidth;
    return (
      <VideoPlayerWrapper>
        <IframeWrapper>
          <iframe src={this.props.videoUrl} />
        </IframeWrapper>
      </VideoPlayerWrapper>
    );
  }
}