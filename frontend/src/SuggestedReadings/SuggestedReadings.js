import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard'

const style = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '14px'
}

export class SuggestedReadings extends React.Component {
  render () {
    return (
      <MaterialCard className={styles.card}>
        <div className={css(styles.title)}> Readings related to <i>{this.props.title}</i>
          {this.props.readings && 
            <div>
              <br />
              <a style={style} href={this.props.readings[0]}>{this.props.readings[0]}</a>
              <br />
              <a style={style} href={this.props.readings[1]}>{this.props.readings[1]}</a>
              <br />
              <a style={style} href={this.props.readings[2]}>{this.props.readings[2]}</a>
            </div>
          }
        </div>
      </MaterialCard>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: '0px',
    marginRight: '10px',
    width: '48%',
    display: 'inline-block',
    padding: '0px'
  },

  title: {
    padding:'20px',
    background: '#4E8BD9',
    color: '#fff'
  },
  body: {
    padding:'20px',
  }
});