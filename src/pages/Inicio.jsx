import styles from "./Inicio.module.css"
import TypingText from "../components/TypingText"

const Inicio = () => {
  return (
    <article className={styles.inicio}>
        <div className={styles.overlay}>
          <TypingText text="Olá meu nome é João" speed={100}/>
          <p>Eu sou um programador fullstack</p>
        </div>
    </article>
    
  )
}

export default Inicio