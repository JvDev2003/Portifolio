import styles from "./SelecionarTecnologia.module.css"
import { projetos } from '../Data/projetos.data'
import { useEffect, useState } from "react"

const SelecionarTecnilogia = ({ setProjetos }) => {

  const [selected, setSelected] = useState([])
  const [tecnologias, setTecnologias] = useState([])


  useEffect(() => {
    setTecnologias(Array.from(
      new Set(projetos.flatMap((projeto) => projeto.tecnologias))
    ));
  }, []); 

  useEffect(() => {

    setProjetos(handleFilter())
  
  }, [selected])

  const handleClick = (tecnologia) => {
    setSelected((prevState) => {
      if(prevState.includes(tecnologia)){
        return prevState.filter((tec) => tec !== tecnologia)
      }
      return [...prevState, tecnologia]
    });
  }

  const handleFilter = () => {
    const filteredProjetos = projetos.filter((projeto) =>
      projeto.tecnologias.some((tecnologia) => selected.includes(tecnologia))
    );

    if(filteredProjetos.length === 0 ){
      return projetos
    }

    return filteredProjetos;
  };

  return (
    <div className={styles.select}>
      {tecnologias && tecnologias.map((tecnologia) => (
        <span 
          onClick={() => handleClick(tecnologia)}
          className={selected.includes(tecnologia)? styles.selected: ""}
        >
          {tecnologia}
        </span>
      ))}
    </div>
  )
}

export default SelecionarTecnilogia