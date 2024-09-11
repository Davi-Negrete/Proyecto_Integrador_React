import './NoEncontrado.scss'
import useTitulo from "../hooks/useTitulo";
import { Link } from 'react-router-dom';
import IconoWhatsApp from '../components/IconoWhatsApp';

const NoEncontrado = () => {
  useTitulo('404 ERROR - No Encontrado');

  return (
    <>
      <div className="container-error">
        <h1>Error 404: No Encontrado</h1>
        <p>Lo sentimos, la página que estás buscando no se pudo hallar.</p>
        <p>Te recomendamos que vayas a la página de <Link to="/">Inicio</Link> para que puedas ver todos nuestros productos disponibles.</p>
      </div>

      <IconoWhatsApp />
    </>
    
  )
}

export default NoEncontrado;
