import './Tabla.scss'
import { useContext } from "react"
import TablaFila from "./TablaFila"
import ProductosContext from "../context/ProductosContext"

const Tabla = () => {

  const { productos } = useContext(ProductosContext)

  return (

      <table className="tabla-alta">

        <thead>
          <tr>
            <th className='th-nombre'>Nombre</th>
            <th className='th-precio'>Precio</th>
            <th className='th-stock'>Stock</th>
            <th className='th-categoria'>Categoría</th>
            <th className='th-descripcion'>Descripción</th>
            <th className='th-foto'>Foto</th>
            <th className='th-instalacion'>Instalación</th>
            <th className='th-acciones'>Acciones</th>
          </tr>
        </thead>

        <tbody>

        {
          productos && productos.map((producto) => (
            <TablaFila key={producto.id} producto={producto} />
          ))
        }

        </tbody>

      </table>
    
  )
}

export default Tabla
