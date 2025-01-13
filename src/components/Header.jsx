import styles from './Header.module.css'
import { useState } from 'react'

const Header = () => {

  const [menuMobile, setMenuMobile] = useState(false)

  const handleChange = () => {
    setMenuMobile(!menuMobile)
  }

  return (
    <header className={styles.menu}>
        <span>Portifólio</span>
        <ul className={styles.desktop}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#experiencias">Experiências</a></li>
            <li><a href="#formacoes">Formações</a></li>
            <li><a href="#certificacoes">Certificados</a></li>
            <li><a href="#conquistas">Conquistas</a></li>
        </ul>
        <img 
          src="https://img.icons8.com/?size=32&id=S5biqohaDgd1&format=png&color=FFFFFF" 
          alt="botão abrir menu"
          onClick={handleChange}
        />
        {
          menuMobile && (
            <div className={styles.mobile}>
              <ul>
              <li onClick={handleChange}><a href="#inicio">Inicio</a></li>
                <li onClick={handleChange}><a href="#projetos">Projetos</a></li>
                <li onClick={handleChange}><a href="#experiencias">Experiências</a></li>
                <li onClick={handleChange}><a href="#formacoes">Formações</a></li>
                <li onClick={handleChange}><a href="#certificacoes">Certificados</a></li>
                <li onClick={handleChange}><a href="#conquistas">Conquistas</a></li>
              </ul>
            </div>
          )
        }
    </header>
  )
}

export default Header