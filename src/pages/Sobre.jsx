import React from 'react'
import styles from './Sobre.module.css'
import sobre from '../Data/sobre.data'
import Redes from '../components/Redes'

const Sobre = () => {
  return (
    <article className={styles.container} id='sobre'>
        <h2>Sobre</h2>
        <span>{sobre}</span>
        <Redes/>
    </article>
  )
}

export default Sobre