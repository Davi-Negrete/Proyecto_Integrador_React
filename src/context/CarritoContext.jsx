import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

//! Creacion del Contexto:

const CarritoContext = createContext()

// ! Armado del Provider

const CarritoProvider = ({ children }) => {

    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

    
    function elProductoEstaEnElCarrito(producto) {
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)
        return nuevoArray.length
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)
    }

    const agregarProductoAlCarritoContext = (producto) => {
        if (!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }

    const eliminarProductoDelCarritoContext = (id) => { 
        eliminarDelCarrito(id)
    }

    const limpiarCarritoContext = () => {
        limpiarCarrito()
    }

    const guardarCarritoContext = async () => {
        console.log(carrito)
    }



    const data = {
        carrito,
        agregarProductoAlCarritoContext,
        eliminarProductoDelCarritoContext,
        guardarCarritoContext,
        limpiarCarritoContext
    }

    return <CarritoContext.Provider value={data}>{ children }</CarritoContext.Provider>

}

// ! Exportaciones

export { CarritoProvider }
export default CarritoContext
