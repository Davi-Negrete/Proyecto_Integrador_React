import './DetalleProducto.scss'
import Spinner from "../components/Spinner"
import useTitulo from "../hooks/useTitulo"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import IconoWhatsApp from '../components/IconoWhatsApp'

const DetalleProducto = () => {

  const { id }= useParams()
  const [product, setProduct] = useState(null)

  useTitulo(`Detalle-Producto ${id}`)

  useEffect(() => {
      getOneProduct()
    }, [])

    const getOneProduct = async () => {

      const url = `${import.meta.env.VITE_BACKEND_PRODUCTOS}${id}`

      try {

          const res = await fetch(url)

          if (!res.ok) {
              throw new Error('No se pudo obtener el producto', res.status)
          }

          const data = await res.json()

          setProduct(data)
          
      } catch (error) {
          console.error('[getOneProduct]', error)
      }

    }

  return (
    <>
      {
        product ?
          <div className="detalle-producto">
            <h1 className='nombre-product'>{product.nombre}:</h1>
            <div className="contenedor-detalle-img">
              <img src={product.foto} alt={product.nombre} />
            </div>
            <h1 className='h1-detalle-producto'>Detalles del producto:</h1>
            <p>{product.descripcion}</p>
            <p>Precio: {product.precio} USD</p>
            <p>Categoría: {product.categoria}</p>
            <p>Stock: {product.stock}</p>  
        </div>
        : <Spinner />
      }

      <IconoWhatsApp />

    </>
  )
}

export default DetalleProducto