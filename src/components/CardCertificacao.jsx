import styles from "./CardCertificacao.module.css"

const CardCertificacao = ({curso, instituicao, conclusao, tecnologias, link}) => {

    const handleClick = () => {
      window.open(link, '_blank');
    }

  return (
    <div className={styles.card} onClick={handleClick}>
        <h3>{curso}</h3>
        <small>{instituicao}</small>
        <p>Concluido em {conclusao}</p>
        <ul className={styles.tecnologias}>
            {tecnologias.map(tecnologia => (
                <li>{tecnologia}</li>
            ))}
        </ul>
    </div>
  )
}

export default CardCertificacao