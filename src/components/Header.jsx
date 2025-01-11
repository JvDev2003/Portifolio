import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.menu}>
        <span>Portifólio</span>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Experiências</a></li>
            <li><a href="#">Formações</a></li>
            <li><a href="#">Conquistas</a></li>
        </ul>
    </header>
  )
}

export default Header