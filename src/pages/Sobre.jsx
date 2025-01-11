import React from 'react'
import styles from './Sobre.module.css'
import sobre from '../Data/sobre.data'

const Sobre = () => {
  return (
    <article className={styles.container}>
        <h2>Sobre</h2>
        <span>{sobre}</span>
    </article>
  )
}

export default Sobre