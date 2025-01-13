import styles from './Formacoes.module.css'
import { formacoes } from '../Data/formacoes.data'
import CardFormacao from '../components/CardFormacao'

const Formacoes = () => {
  return (
    <article className={styles.container} id='formacoes'>
        <h2>Formações</h2>
        <div>
            {formacoes.map(formacao => (
                <CardFormacao {...formacao}/>
            ))}
        </div>
    </article>
  )
}

export default Formacoes