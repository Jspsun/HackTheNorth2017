import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export class NavBar extends Component {
  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      let reg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
      if (e.target.value.match(reg)){
        this.props.onVideoSelect(e.target.value);
      }
    }
  }

  render() {
    const styles = StyleSheet.create({
      wrapper: {
        display: 'flex',
        padding: '30px 10px 0px 30px',
        color: '#4E8BD9',
        backgroundColor: '#fff',
        fontFamily: 'Baloo Tammudu',
        lineHeight: '50px',
        fontSize: '40px',
        fontWeight: '100',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        flexDirection: 'row'
      },
      search: {
        marginLeft: 'Auto',
        border: 'none',
        borderRadius: '5px',
        display: 'flex',
        backgroundColor: '#F1F1F1',
        height: '20px',
        width: '500px',
        padding: '15px',
        marginTop: '-14px',
        fontFamily: 'Montserrat',
        fontSize: '15px',
        marginRight: '10px'
      },
      enter: {
        // position: 'absolute'
      }
    });

    return (
      <div className={css(styles.wrapper)}>
        <div>
          Learnr
        </div>
        <input className={css(styles.search)} onKeyPress={this.onKeyPress} id='search' type='text' placeholder='input youtube url'/>
      </div>
    );
  }
}


