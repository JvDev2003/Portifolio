import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.menu}>
        <span>Portifólio</span>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#experiencias">Experiências</a></li>
            <li><a href="#formacoes">Formações</a></li>
            <li><a href="#certificacoes">Certificados</a></li>
            <li><a href="#conquistas">Conquistas</a></li>
        </ul>
    </header>
  )
}

export default Header