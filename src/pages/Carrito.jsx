import useTitulo from "../hooks/useTitulo"
import ListadoCarrito from "../components/ListadoCarrito"
import IconoWhatsApp from '../components/IconoWhatsApp'

const Carrito = () => {

  useTitulo('Carrito')

  return (
    <>
      <h1 className='h1-carrito'>Productos en el Carrito:</h1>
      <ListadoCarrito />
      <IconoWhatsApp />
    </>
  )
}

export default Carrito
