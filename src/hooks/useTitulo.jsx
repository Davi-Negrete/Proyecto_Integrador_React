import { useEffect } from "react"

const useTitulo = ( textoTitulo = "Sin titulo") => {

    useEffect(() => {
        document.title = `${textoTitulo} - Muebles de Hogar`
    }, [])

}

export default useTitulo
