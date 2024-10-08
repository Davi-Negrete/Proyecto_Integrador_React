import './ListadoCarrito.scss'
import React, { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'
import ItemCarrito from './ItemCarrito'
import { notificacionSweetCarrito } from './ListadoCarrito.service'

const ListadoCarrito = () => {

    const { carrito, limpiarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)

    const handleComprar = () => {
        // console.log('Comprando los siguientes productos:')
        guardarCarritoContext(carrito) // me guarda el carrito en  la base de datos en la collection carritos
        limpiarCarritoContext() // me limpia el LocalStorage
        notificacionSweetCarrito() // aviso de compra aprobada
    }

    const handleLimpiarCarrito = () => {
        limpiarCarritoContext()
    }

  return (
    <>

        <table className={`tabla-carrito ${carrito.length <= 0 ? 'empty-car' : ''}`}>
            <thead>
               <tr>
                    <th className='th-foto-carrito'>Foto</th>
                    <th className='th-nombre-carrito'>Nombre</th>
                    <th className='th-cantidad-carrito'>Cantidad</th>
                    <th className='th-precio-carrito'>Precio</th>
                    <th className='th-acciones-carrito'>Acciones</th>
               </tr>
            </thead>
            <tbody>
                {
                    carrito.length <= 0 ? (
                        <tr>
                            <td className='td-noProductos-carrito' colSpan={5} style={{textAlign:'center'}}>No hay productos</td>
                        </tr>
                    ) : (
                        carrito.map((producto, idx) => (
                            <ItemCarrito key={idx} producto={producto} />
                        ))
                    )
                }
            </tbody>
        </table>
        
        { !carrito.length <= 0 && (
                <>
                    <div className="contenedor-botones-carrito">
                        <button className='boton-limpiar-carrito' onClick={handleLimpiarCarrito}>Limpiar</button>
                        <button className='boton-comprar-carrito' onClick={handleComprar}>Comprar</button>
                    </div>  
                </>
            )
        }

    </>
  )
}

export default ListadoCarrito
