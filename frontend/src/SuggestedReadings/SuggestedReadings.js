import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard'

export class SuggestedReadings extends React.Component {
  render () {
    return (
      <MaterialCard className={styles.card}>
        <div className={css(styles.title)}> Readings related to '{this.props.title}': 
          {this.props.readings && 
            <div>
              <br />
              <a href={this.props.readings[0]}>{this.props.readings[0]}</a>
              <br />
              <a href={this.props.readings[1]}>{this.props.readings[1]}</a>
              <br />
              <a href={this.props.readings[2]}>{this.props.readings[2]}</a>
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
    width:'45%',
    display: 'inline-block'
  },
  title: {

  }
});