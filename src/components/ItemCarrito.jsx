import { useContext } from "react"
import CarritoContext from "../context/CarritoContext"

const ItemCarrito = ( { producto }) => {

    const { eliminarProductoDelCarritoContext } = useContext(CarritoContext)

    const handleEliminar = (id) => {
        eliminarProductoDelCarritoContext(id)
    }

  return (
    <tr className="Item-Carrito">
        <td className='td-foto-carrito'>
            <img className='foto-carrito' src={producto.foto} alt={producto.nombre} width='85px' />
        </td>
        <td className='td-nombre-carrito'>{producto.nombre}</td>
        <td className='td-cantidad-carrito'>{producto.cantidad}</td>
        <td className='td-precio-carrito'>{producto.precio} USD</td>
        <td className='td-acciones-carrito'>
            <button className='btn-eliminarProductoDeCarrito' onClick={() => handleEliminar(producto.id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default ItemCarrito