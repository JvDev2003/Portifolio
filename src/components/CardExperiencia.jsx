import styles from "./CardExperiencia.module.css"

const CardExperiencia = ({cargo, periodo, localizacao, feitos, tecnologias, empresa }) => {
  return (
    <div className={styles.card}>
        <h4>{cargo} - <span>{periodo}</span></h4>
        <small>{empresa} - {localizacao}</small>
        <ul>
            {feitos.map(feito => (
                <li>{feito}</li>
            ))}
        </ul>
        <ul className={styles.tecnologias}>
            {tecnologias.map(tecnologia => (
                <li>{tecnologia}</li>
            ))}
        </ul>
    </div>
  )
}

export default CardExperiencia