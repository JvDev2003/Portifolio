import React from 'react'
import { projetos } from '../Data/projetos.data'
import CardProjeto from '../components/CardProjeto'
import styles from './Projetos.module.css'
import SelecionarTecnilogia from '../components/SelecionarTecnologia'
import { useState } from 'react'

const Projetos = () => {

  const [projetosData, setProjetos] = useState(projetos)

  return (
    <article id='projetos' className={styles.conteiner}>
        <h2>Projetos</h2>
        <div>
            <SelecionarTecnilogia setProjetos={setProjetos}/>
        </div>
        <div>
            {projetosData.map(projeto => (
              <CardProjeto {...projeto}/>
            ))}
        </div>
    </article>
  )
}

export default Projetos