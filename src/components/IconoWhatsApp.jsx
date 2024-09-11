const IconoWhatsApp = () => {

  {/* Este componente hereda estilos de la primera instancia en la que se renderizó */}
  {/* En este caso le di estilos en Inicio.scss para la pagina Inicio.jsx, sin embargo el estilo se aplica para todas las Pages donde importo el componente*/}

  return (
    <div className="icono-whatsapp">
        <a className="icono-whatsapp__link" href="https://www.whatsapp.com/?lang=es" target="_blank">
            <i className="fa-brands fa-whatsapp fa-2x"></i>
        </a>
    </div>
  )
}

export default IconoWhatsApp
