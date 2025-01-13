import './App.css'
import Header from './components/Header'
import Certificacoes from './pages/Certificacoes'
import Conquistas from './pages/Conquistas'
import Experiencias from './pages/Experiencias'
import Formacoes from './pages/Formacoes'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Footer from './components/Footer'
import Projetos from './pages/Projetos'
function App() {

  return (
    <>
      <Header/>
      <main>
        <Inicio/>
        <Sobre/>
        <Projetos/>
        <Experiencias/>
        <Formacoes/>
        <Certificacoes/>
        <Conquistas/>
      </main>
      <Footer/>
    </>
  )
}

export default App
