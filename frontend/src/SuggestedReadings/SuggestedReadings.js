import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard'

export class SuggestedReadings extends React.Component {
  render () {
    return (
      <MaterialCard className={styles.card}>
        <div className={css(styles.title)}> Key Terms</div>
        <div className={css(styles.body)}>
          FillerText

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