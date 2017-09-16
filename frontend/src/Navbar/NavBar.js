import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export class NavBar extends Component {

  render() {
    const styles = StyleSheet.create({
      wrapper: {
        display: 'flex',
        backgroundColor: '#000',
        color: '#F9CC9D'
      }
    });

    return (
      <div className={css(styles.wrapper)}>
        sampleText
      </div>
    );
  }
}


