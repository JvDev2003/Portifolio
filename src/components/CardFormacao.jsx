import styles from "./CardFormacao.module.css"

const CardFormacao = ({curso, instituicao, periodo, descricao}) => {
  return (
    <div className={styles.card}>
        <h2>{curso} - {periodo}</h2>
        <small>{instituicao}</small>
        <p>{descricao}</p>
    </div>
  )
}

export default CardFormacao