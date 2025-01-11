import styles from "./Certificacoes.module.css"
import { certificacoes } from '../Data/certificacoes.data'
import CardCertificacao from '../components/CardCertificacao'


const Certificacoes = () => {
  return (
    <article className={styles.container}>
        <h2>Certificados</h2>
        <div>
            {certificacoes.map(certificacao => <CardCertificacao {...certificacao}/>)}
        </div>
    </article>
  ) 
}

export default Certificacoes