import './Contacto.scss'
import useTitulo from "../hooks/useTitulo"
import IconoWhatsApp from '../components/IconoWhatsApp'

const Contacto = () => {

  useTitulo('Contacto')
  return (
    <>
      <form className="form-contacto">

        <h1 className="h1-contacto">Contáctate con nosotros</h1>
        <p className="p-contacto">Por favor complete todos los campos con la información requerida:</p>


        <fieldset className="form-contacto__fieldset-personales">
    
            <legend className="form-contacto__legend-personales">Datos Personales</legend>

            <label className="form-contacto__label-personales" htmlFor="nombre">Nombre:
                <input className="form-contacto__input-personales" type="text" id="nombre" name="nombre" required />
            </label>


            <label  className="form-contacto__label-personales" htmlFor="apellido">Apellido:
                <input className="form-contacto__input-personales" type="text" id="apellido" name="apellido" required />
            </label>


            <label  className="form-contacto__label-personales" htmlFor="correo">Correo:
                <input className="form-contacto__input-personales" type="email" id="correo" name="correo" required />
            </label>


            <label  className="form-contacto__label-personales" htmlFor="telefono">Teléfono:
                <input className="form-contacto__input-personales" type="text" id="telefono" name="telefono" required />
            </label>

        </fieldset>

        <fieldset className="form-contacto__fieldset-consulta">

          <legend className="form-contacto__legend-consulta">¿Cómo te ayudamos?</legend> 
    
            <label  className="form-contacto__label-consulta" htmlFor="consulta">Consulta:
              <textarea className="form-contacto__input-consulta" name="consulta" id="consulta" placeholder="Escríbenos tu pregunta aquí, o avísanos si deseas hacer un mueble a medida..." required></textarea>
            </label>

        </fieldset>

        <label className="form-contacto__label-términos">
            <input className="form-contacto__input-términos" type="checkbox" required />
            Acepto los <a className="form-contacto__link-términos" href="#">términos y condiciones</a>
        </label>

        <input  className="form-contacto__submit" value="Enviar" type="submit" />

      </form>

      <IconoWhatsApp />

    </>
  )
}

export default Contacto
