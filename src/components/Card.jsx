import './Card.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'


const Card = ( { producto } ) => {

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

  const handleAgregar = (producto) => {
    agregarProductoAlCarritoContext(producto)
  }

 
  return (
      <div className="card">
        <article className="card__article">
          <div className="card__image-container">
            <img src={producto.foto} alt={producto.nombre} className="card__image" />
          </div>
          <div className="card__content">
            <h2 className="card__content__heading">{producto.nombre}</h2>
            <div className="card__content__description">
              <p>{producto.descripcion}</p>
            </div>
          </div>
        </article>
        <div className="icono-bolsa">
          <Link className="icono-bolsa__link" to="/carrito" onClick={() => handleAgregar(producto)} >
            <i className="fa-solid fa-bag-shopping"></i>    
          </Link>   
        </div>
        <div className="boton-detalle">
          <Link className='boton-detalle__link' to={`detalle_producto/${producto.id}`} >
            <i className="fa-solid fa-info"></i>
          </Link>
        </div>
      </div> 
  )
}

export default Card

