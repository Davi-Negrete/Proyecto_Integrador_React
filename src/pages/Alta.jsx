import Formulario from "../components/Formulario"
import IconoWhatsApp from "../components/IconoWhatsApp"
import Tabla from "../components/Tabla"
import useTitulo from "../hooks/useTitulo"

const Alta = () => {
  
  useTitulo('Alta')
  return (
    <>
      <Formulario />
      <hr />
      <Tabla />
      <IconoWhatsApp />
    </>
  )
}

export default Alta
