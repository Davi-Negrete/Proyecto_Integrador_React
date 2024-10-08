import './Inicio.scss'
import { useContext } from 'react'
import Card from '../components/Card'
import useTitulo from '../hooks/useTitulo'
import ProductosContext from '../context/ProductosContext'
import IconoWhatsApp from '../components/IconoWhatsApp'

const Inicio = () => {

  const { productos } = useContext(ProductosContext)

  useTitulo('Inicio')
  return (
    <>
       <main>
          <section className="section-cards">
            <header className="section-cards__header">
              <div className="section-cards__header__h1__h3">
                <h1>¡Bienvenido al lugar más fácil y rápido para decorar tu hogar!</h1>
                <h3 className="section-cards__header__h3">Estos son todos los diseños y muebles disponibles:</h3>
              </div>
            </header>


            <div className="cards-container" id="contenedor-cards">

              {
                    productos && productos.map( (producto, idx) => (
                      <Card key={producto.id+idx} producto={producto} />
                    ))
              }

            </div>

          </section> 
      </main>

      <IconoWhatsApp />
    </>

  )
}


export default Inicio
