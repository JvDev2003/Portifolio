import styles from "./Redes.module.css"
import { redes } from '../Data/redes.data'


const Redes = () => {
    const handleClick = (link) => {
        window.open(link, '_blank');
    }

  return (
    <div className={styles.container}>
        {redes.map(rede => (
            <div>
                <img src={rede.image} />
            </div>
        ))}
    </div>
  )
}

export default Redes