import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard'

export class KeyTerms extends React.Component {
  render = () => {
    console.log(this.props.url)
    if (this.props.url === 'https://www.youtube.com/embed/Ykc5COodXis') {
      return (
        <MaterialCard className={styles.card}>
          <div className={css(styles.title)}> Key Terms
            <p>Scala - <span style={{fontSize: '14px'}}>a general-purpose programming language providing support for functional programming and a strong static type system.</span></p>
            <p>Closures - <span style={{fontSize: '14px'}}>are techniques for implementing lexically scoped name binding in languages with first-class functions.</span></p>
          </div>
        </MaterialCard>
      )
    } else {
      return (
        <MaterialCard className={styles.card}>
          <div className={css(styles.title)}> Key Terms
            <p>Molarity - <span style={{fontSize: '14px'}}>a unit of concentration measuring the number of moles of a solute per liter of solution.</span></p>
            <p>Chemistry - <span style={{fontSize: '14px'}}>a branch of physical science that studies the composition, structure, properties and change of matter.</span></p>
          </div>
        </MaterialCard>
      )
    }
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: '0px',
    marginLeft: '10px',
    width: '48%',
    display: 'inline-block',
    padding: '0px',
    marginRight: '0px'
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