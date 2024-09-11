import './TablaFila.scss'
import { useContext } from 'react'
import { notificacionSweet } from './TablaFila.service'
import ProductosContext from '../context/ProductosContext'

const TablaFila = ( { producto } ) => {

  const { setProductoAEditar, eliminarProductoContext } = useContext(ProductosContext)

  const handleEditar = (producto) => {

    setProductoAEditar(producto)
    
  }

  const handleEliminar = () => {

    notificacionSweet(producto.nombre, () => {
      eliminarProductoContext(producto.id)
    })

  }

  return (
    <tr>
      <td className='td-nombre'>{producto.nombre}</td>
      <td className='td-precio'>{producto.precio} USD</td>
      <td className='td-stock'>{producto.stock}</td>
      <td className='td-categoria'>{producto.categoria}</td>
      <td className='td-descripcion'>{producto.descripcion}</td>
      <td className='td-foto'>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td className='td-instalacion'>{producto.instalacion ? 'SI' : 'NO'}</td>
      <td className='td-botones'>
        <button className='boton__editar' onClick={() => handleEditar(producto)}>Editar</button>
        <button className='boton__borrar' onClick={handleEliminar}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila
