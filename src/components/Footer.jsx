import './Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightSymbol = '\u00A9';
  const muebleriaText = 'LA MUEBLERÍA';
  const brandIcon = <i className="fa-solid fa-couch" />;
  const derechosReservadosText = ' TODOS LOS DERECHOS RESERVADOS.';

  return (
    <footer className="footer"> {/* FOOTER */}

      <div className="footer__seccion-0"> {/* Seccion del footer para redirigir a la pagina de CONTACTO */}

        <div className="footer__seccion-0__box-0">
          <h3 className="footer__seccion-0__box-1">Siéntete libre de hacernos cualquier pregunta!</h3>
          <Link className ="footer__seccion-0__box-2__link" to="/contacto">CONTACTO</Link>
          {/* Boton para la pagina de CONTACTO en la linea 18 */}
        </div>

      </div>

      <hr/>

      <div className="footer__seccion-1">  {/* Seccion del footer para redirigir a la pagina de NOSOTROS Y REDES SOCIALES */}

        <div className="footer__seccion-1__box-1">
          <h3 className="footer__seccion-1__box-1__h3">Mira cómo empezó nuestra historia y nuestra idea desde cero:</h3>
          <Link  className="footer__seccion-1__box-1__link" to="/nosotros">NOSOTROS</Link>
          {/* Boton para la pagina de NOSOTROS en la linea 30 */}
        </div>

        <div className="footer__seccion-1__box-2">  {/* Descripcion breve de la Empresa */}
          <h3 className="footer__seccion-1__box-2__h3">Aquí te dejamos una pequeña descripción de Nosotros:</h3>
          <div className="footer__seccion-1__box-2__p">
            <p>La Mueblería S.A. <i className="fa-solid fa-couch"></i> es una compañía dedicada al diseño,
              fabricación, comercialización e instalación de muebles, desde una mirada decorativa como cocinas, comedores,
              salas de estar, salas de trabajo y armarios,  hasta una mirada de confort y relajación, como camas, sofas y baños.
            </p>
          </div>
        </div>

        <div className="footer__seccion-1__box-3">  {/* REDES SOCIALES */}
          <h3 className="footer__seccion-1__box-3__h3">Síguenos en nuestras Redes Sociales:</h3>
          <div className="footer__seccion-1__box-3__redes-sociales">
            <a className="icono-instagram__link" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
            <a className="icono-facebook__link" href="https://www.facebook.com/Meta/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          </div>    
        </div>
    
      </div>

      <div className="footer__seccion-2">  {/* Seccion del footer de DERECHOS DE AUTOR Y COPY RIGHT */}
        <small className='footer__seccion-2__small'>
          {copyrightSymbol} {currentYear} <b>{muebleriaText} {brandIcon}</b> -{derechosReservadosText}
        </small>
      </div>

    </footer>
  )
}


export default Footer;
