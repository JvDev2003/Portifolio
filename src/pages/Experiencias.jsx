import CardExperiencia from "../components/CardExperiencia"
import { experiencias } from "../Data/experiencias.data"
import styles from "./Experiencias.module.css"

const Experiencias = () => {
  return (
    <article className={styles.experiecias}>
        <h2>Experiências</h2>
        <div>
        {experiencias.map(experiencia => (
            <CardExperiencia {...experiencia}/>
        ))}
        </div>
    </article>
  )
}

export default Experiencias