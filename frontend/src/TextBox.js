import React, { Component } from 'react';
import styled from 'styled-components';

const SpaceWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: 5px;
  width: 25%;
  max-height: 100%;
  position: relative;
`

const TextWrapper = styled.div`
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

export class TextBox extends Component { 
  render() {
    var response = this.props.responseText;
    return (
      <SpaceWrapper>
        <TextWrapper>
          <p>memes</p>
          <p>{response}</p>
        </TextWrapper>
      </SpaceWrapper>
    );
  }
}
