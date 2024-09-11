import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import Alta from "../pages/Alta"
import NoEcontrado from "../pages/NoEcontrado"
import Carrito from "../pages/Carrito"
import DetalleProducto from "../pages/DetalleProducto"


const Rutas = () => {

    const routes = useRoutes(
        [
           {
                path: '/',
                element: <Inicio/>
           },
           {
                path: '/nosotros',
                element: <Nosotros/>
           },
           {
                path: '/contacto',
                element: <Contacto/>
           },
           {
                path: '/alta',
                element: <Alta/>
           },
           {
                path: '*',
                element: <NoEcontrado/>
           },
           {
                path: '/carrito',
                element: <Carrito/>
           },
           {
               path: '/detalle_producto/:id',
               element: <DetalleProducto />
           }
        ]
    )

    return routes

}

export default Rutas