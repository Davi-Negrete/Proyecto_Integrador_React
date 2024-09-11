import { useEffect, useState } from "react"
import { createContext } from "react"
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http"

// ! Creamos el Contexto

const ProductosContext = createContext()


// ! Armamos el Provider

const ProductosProvider = ( { children } ) => {

    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)
    
    useEffect(() => {
        getAllProductos()
    },[])

    const getAllProductos = async () => {

        try {
           
            const prods = await helperPeticionesHttp(url, {})
            
            setProductos(prods)

        } catch (error) {
            console.error('[getAllProductos]', error)
        }

    }

    
    const crearProductoContext = async (nuevoProducto) => {

       try {
        
            const options = {
                method: 'POST',
                headers: { 'content-type' : 'application/json'},
                body: JSON.stringify(nuevoProducto)
            }

            const newProducto = await helperPeticionesHttp(url, options)

            setProductos([...productos, newProducto])

        } catch (error) {
            console.error('[crearProductoContext]', error)
        }

    }

    const actualizarProductoContext = async (ProductoEditado) => {
        
        try {
        
            const options = {
                method: 'PUT',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(ProductoEditado)
            }

            const urlEdicion = url + ProductoEditado.id

            const editedProduct = await helperPeticionesHttp(urlEdicion, options)

            const nuevoEstadoProducto = productos.map(
                producto => ( producto.id === editedProduct.id ? editedProduct : producto))

            setProductos(nuevoEstadoProducto)

        } catch (error) {
            console.error('[actualizarProductoContext]', error)
        }

    }

    const eliminarProductoContext = async (id) => {

        try {
            
            const urlEliminacion = url + id

            const options = {
                method: 'DELETE'
            }

            const dataEliminada = await helperPeticionesHttp(urlEliminacion, options)

            const productoEliminado = {
                id: id, 
                producto: dataEliminada
            }
            
            const nuevoEstadoProductos = productos.filter(producto => (producto.id !== productoEliminado.id))

            setProductos(nuevoEstadoProductos)

        } catch (error) {
            console.error('[eliminarProductoContext]', error)
        }

    }

    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        productoAEditar,
        setProductoAEditar,
        eliminarProductoContext
    }

    return <ProductosContext.Provider value={data}>{ children }</ProductosContext.Provider>

}


// ! Exportamos el Contexto y Provider

export { ProductosProvider }
export default ProductosContext