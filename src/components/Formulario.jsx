import './Formulario.scss'
import { useContext, useEffect, useState } from "react"
import ProductosContext from "../context/ProductosContext"

const Formulario = () => {

  const formInit = {
    id:null,
    nombre: '',
    precio: '',
    stock: '',
    categoria: '',
    descripcion: '',
    foto: '',
    instalacion: false
  }

  const [form, setForm] = useState(formInit)

  const { crearProductoContext, actualizarProductoContext, productoAEditar, setProductoAEditar } = useContext(ProductosContext)

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInit)
  }, [productoAEditar])
  

  const handleSubmit = async e => {

    e.preventDefault()

    try {

      if ( form.id === null) {

        await crearProductoContext(form)

      } else {

        await actualizarProductoContext(form)

      }

    } catch (error) {
      console.error('[handleSubmit]', error)
    }

    handleReset()

  }

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const valor = type === 'checkbox' ? checked : value;
    setForm({ ...form, [name]: valor })
  }

  const handleReset = () => {
    setForm(formInit)
    setProductoAEditar(formInit)
  }


  return (
    
      <form className='form-alta' onSubmit={handleSubmit}>

        <h1 className='h1-alta'>Bienvenido a la sección de Alta:</h1>

        <fieldset className='form-alta__fieldset-alta'>

          <legend className='form-alta__legend-alta'>Agrege o edite productos:</legend>

          <label className='form-alta__label-alta' htmlFor="lbl-nombre">Nombre:
            <input 
              className='form-alta__input-alta'
              type="text" 
              name="nombre" 
              id="lbl-nombre" 
              value={form.nombre} 
              onChange={handleChange}
              required
            />
          </label>
          
        
        
          <label className='form-alta__label-alta' htmlFor="lbl-precio">Precio:
            <input
              className='form-alta__input-alta'
              type="text" 
              name="precio" 
              id="lbl-precio" 
              value={form.precio} 
              onChange={handleChange}
              required
            />
          </label>
          
        
        
          <label className='form-alta__label-alta' htmlFor="lbl-stock">Stock:
            <input
              className='form-alta__input-alta'
              type="text" 
              name="stock" 
              id="lbl-stock" 
              value={form.stock} 
              onChange={handleChange}
              required
            />
          </label>
          
        
        
          <label className='form-alta__label-alta' htmlFor="lbl-categoria">Categoría:
            <input
              className='form-alta__input-alta' 
              type="text" 
              name="categoria" 
              id="lbl-categoria" 
              value={form.categoria} 
              onChange={handleChange}
              required
            />
          </label>
          
        
        
          <label className='form-alta__label-alta-descripcion' htmlFor="lbl-descripcion">Descripción:
            <textarea
              className='form-alta__input-alta-descripcion'
              name="descripcion" 
              id="lbl-descripcion" 
              value={form.descripcion} 
              onChange={handleChange}
              placeholder='Por favor describa los detalles del producto...'
              required
            />
          </label>
         
        
        
          <label className='form-alta__label-alta' htmlFor="lbl-foto">Foto:
            <input
              className='form-alta__input-alta' 
              type="text" 
              name="foto" 
              id="lbl-foto" 
              value={form.foto} 
              onChange={handleChange}
              required
            />
          </label>
          
        
        
          <label className='form-alta__label-alta-instalacion' htmlFor="lbl-instalacion">Incluye instalación:
            <input
              className='form-alta__input-alta-instalacion' 
              type="checkbox" 
              name="instalacion" 
              id="lbl-instalacion" 
              checked={form.instalacion} 
              onChange={handleChange}
            />
          </label>

        </fieldset>

        <div className="container-buttons">
          <button className='button__submit' type="submit">Guardar</button>
          <button className='button__reset' type="reset" onClick={handleReset}>Limpiar</button>
        </div>
            
      </form>
    
  )
}

export default Formulario

