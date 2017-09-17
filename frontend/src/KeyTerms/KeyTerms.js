import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard'

export class KeyTerms extends React.Component {
  render () {
    return (
      <MaterialCard className={styles.card}>
        <div className={css(styles.title)}> Key Terms
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