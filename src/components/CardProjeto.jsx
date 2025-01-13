import styles from "./CardProjeto.module.css"

const CardProjeto = ({nome, imagem, descricao, tecnologias, link, finished}) => {

  const handleClick = () => {
    window.open(link, '_blank');
  }

  return (
    <div onClick={handleClick} className={styles.card}>
      <div className={styles.image}>
        <img src={imagem} alt={nome} />
      </div>
       <div className={styles.content}>
          <h2>{nome}</h2>
          <p>{descricao}</p>
          <div className={styles.tecnologias}>
            {tecnologias.map(tecnologia => (
              <span>{tecnologia}</span>
            ))}
          </div>
          {finished? <span className={styles.ok}>Concluido</span>: <span className={styles.noOk}>Em andamento</span>}
       </div>
    </div>
  )
}

export default CardProjeto