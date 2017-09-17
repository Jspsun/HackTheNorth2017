import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard'

export class KeyTerms extends React.Component {
  render () {
    return (
      <MaterialCard className={styles.card}>
        <div className={css(styles.title)}> Key Terms
          <p>Scala - a general-purpose programming language providing support for functional programming and a strong static type system.</p>
          <p>Closures - are techniques for implementing lexically scoped name binding in languages with first-class functions.</p>
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