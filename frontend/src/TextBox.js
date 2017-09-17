import React, { Component } from 'react';
import styled from 'styled-components';

const SpaceWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding-left: 10px;
  width: 25%;
  max-height: 550px;
  overflow: hidden;
  position: relative;
`

const TextWrapper = styled.div`
  padding-left: 5px;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 0;
  padding-top: 0;
  position: relative;
  font-size: 16px;
  height: 550px;
  margin-bottom: 0;
  border: 1px solid gray;

  iframe {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

const sketchStyle = {
  fontSize: '16px',
}

export class TextBox extends Component { 
  render() {
    var response = this.props.responseText;
    return (
      <SpaceWrapper>
        <TextWrapper>
          <div style={sketchStyle}>
          {response.split('\n').map(resp => 
              <p>{resp}</p>
          )}
          </div>
        </TextWrapper>
      </SpaceWrapper>
    );
  }
}
