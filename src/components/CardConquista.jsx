import styles from "./cardConquista.module.css"

const CardConquista = ({nome, imagem, data, descricao}) => {
  return (
    
    <div className={styles.card}>
        <div className={styles.imagem}>
            <img src={imagem} alt={nome} />
        </div>
        <div className={styles.content}>
            <h3>{nome} - <small>{data}</small></h3>
            {
                descricao.map(paragrafo => (
                    <p>{paragrafo}</p>
                ))
            }
        </div>
    </div>
  )
}

export default CardConquista