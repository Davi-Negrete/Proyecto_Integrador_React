import './Nosotros.scss'
import useTitulo from "../hooks/useTitulo"
import IconoWhatsApp from '../components/IconoWhatsApp'

const Nosotros = () => {

  useTitulo('Nosotros')
  return (
    <>
      <main className='main-nosotros'>

        <div className='contenedor-img-1'>
          <img src="../../img/Nosotros/nosotros_3.webp" alt="Imagen de trabajador tallando madera en nuestros talleres" />
        </div>

        <div className="container">

            <div className="container__descripcion">

                <h2 className="container__descripcion__titulo">¿Quiénes somos?</h2>

               <p className="container__descripcion__p">
                  La Mueblería <i className="fa-solid fa-couch"></i> S.A es una compañía nacional con visión internacional dedicada al diseño, fabricación,
                  comercialización e instalación de muebles y accesorios para tu hogar.
                </p>

                <p className="container__descripcion__p">
                  Proponemos por el mejoramiento continuo de nuestros procesos mediante la capacitación y motivación de nuestro talento humano, satisfaciendo así las expectativas y requerimientos de nuestro clientes. Nuestra empresa realiza el proceso completo de fabricación, desde el diseño, la producción (Soldadura,  Mecanización, Electricidad, Montaje
                  final) hasta las pruebas finales del producto. Contando en la producción con modernas tecnologías de soldadura, maquinas CNC, prensa, entre otros.
                </p>

                <p className="container__descripcion__p">
                  En nuestra empresa la innovación y la mejora continua son parte de nuestra cultura, tenemos avanzados sistemas de fabricación permitiéndonos alcanzar estándares de calidad satisfactorios para el consumidor final siendo esta
                  una característica vital de nuestros productos.
                </p>

                <p className="container__descripcion__p">
                  Igualmente apoyándonos en la utilización de modernas tecnologías de construcción 3D, controlamos y supervisamos todos los factores que intervienen en el diseño y fabricación de nuestros muebles de línea metálica, madera y tela.
                </p>
        
                <p className="container__descripcion__p">
                  Como siempre, tenemos en cuenta el "diseño", por eso en nuestra empresa contamos con expertos en diseño de interiores, dando así una total satisfacción para nuestros clientes para su hogar.
                </p>
               
            </div>

        </div>

        <div className='contenedor-img-2'>
          <img src="../../img/Nosotros/nosotros_2.webp" alt="Imagen de nuestros talleres de carpinteria" />
          <img src="../../img/Nosotros/nosotros_1.webp" alt="Imagen de trabajador cortando y lijando madera" />
        </div>

      </main>

      <IconoWhatsApp />

    </>
  )
}

export default Nosotros
