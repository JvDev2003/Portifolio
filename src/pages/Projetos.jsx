import React from 'react'
import { projetos } from '../Data/projetos.data'
import CardProjeto from '../components/CardProjeto'
import styles from './Projetos.module.css'

const Projetos = () => {
  return (
    <article id='projetos' className={styles.conteiner}>
        <h2>Projetos</h2>
        <div>
            {projetos.map(projeto => (
              <CardProjeto {...projeto}/>
            ))}
        </div>
    </article>
  )
}

export default Projetos