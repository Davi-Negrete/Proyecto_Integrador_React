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
              <h1>Bienvenido a "La Mueblería" la manera más fácil y rápida de decorar tu hogar!</h1>
              <h2>Diseño de interiores online</h2>
              <h3>Aquí encontrarás todos los diseños y muebles disponibles para tu casa:</h3>
            </header>


            <div className="cards-container" id="contenedor-cards">

              {
                    productos && productos.map( producto => (
                      <Card key={producto.id} producto={producto} />
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
