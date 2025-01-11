import style from "./Conquistas.module.css"
import { conquistas } from "../Data/conquistas.data"
import CardConquista from "../components/CardConquista"

const Conquistas = () => {
  return (
    <article className={style.container}>
        <h2>Conquistas</h2>
        <div>
            {conquistas.map(conquista => (
                <CardConquista {...conquista}/>
            ))}
        </div>
    </article>
  )
}

export default Conquistas