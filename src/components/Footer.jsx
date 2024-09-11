import './Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightSymbol = '\u00A9';
  const muebleriaText = 'LA MUEBLERÍA';
  const brandIcon = <i className="fa-solid fa-couch" />;
  const derechosReservadosText = ' TODOS LOS DERECHOS RESERVADOS.';

  return (
    <footer className="footer">

      <div className="footer__seccion-0">

        <div className="footer__seccion-0__box-0">
          <h3 className="footer__seccion-0__box-1">Siéntete libre de hacernos cualquier pregunta!</h3>
          <button className="footer__seccion-0__box-2"><Link className ="footer__seccion-0__box-2__link" to="/contacto">CONTACTO</Link></button>
        </div>

      </div>

      <hr/>

      <div className="footer__seccion-1">

        <div className="footer__seccion-1__box-1">
          <h3 className="footer__seccion-1__box-1__h3">Mira cómo empezó nuestra historia y nuestra idea desde cero:</h3>
          <button className="footer__seccion-1__box-1__button"><Link  className="footer__seccion-1__box-1__button__link" to="/nosotros">NOSOTROS</Link></button>
        </div>

        <div className="footer__seccion-1__box-2">
          <h3 className="footer__seccion-1__box-2__h3">Aquí te dejamos una pequeña descripción de Nosotros:</h3>
          <div className="footer__seccion-1__box-2__p">
            <p>La Mueblería S.A. <i className="fa-solid fa-couch"></i> es una compañía dedicada al diseño,
              fabricación, comercialización e instalación de muebles, desde una mirada decorativa como cocinas, comedores,
              salas de estar, salas de trabajo y armarios,  hasta una mirada de confort y relajación, como camas, sofas y baños.
            </p>
          </div>
        </div>

        <div className="footer__seccion-1__box-3">
          <h3 className="footer__seccion-1__box-3__h3">Síguenos en nuestras Redes Sociales:</h3>
          <div className="footer__seccion-1__box-3__redes-sociales">
            <a className="icono-instagram__link" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
            <a className="icono-facebook__link" href="https://www.facebook.com/Meta/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          </div>    
        </div>
    
      </div>

      <div className="footer__seccion-2">
        <small>
          {copyrightSymbol} {currentYear} <b>{muebleriaText} {brandIcon}</b> -{derechosReservadosText}
        </small>
      </div>

    </footer>
  )
}


export default Footer;
