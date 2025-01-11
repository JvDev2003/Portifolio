import styles from "./Footer.module.css"

const Footer = () => {
    const data = new Date();

  return (
    <footer className={styles.footer}>
          <p>© Copyright {data.getFullYear()} Jv.DEV - All Rights Reserved</p>
    </footer>
  )
}

export default Footer