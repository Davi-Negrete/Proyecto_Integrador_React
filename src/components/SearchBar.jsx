import { Link } from "react-router-dom"


const SearchBar = () => {
  return (
    <div className="search-bar">
        <div className="search-bar__logo-container">La Mueblería <Link className="search-bar__logo-container__link" to="/"><i className="fa-solid fa-couch"></i></Link></div>
        <form action="get" className="search-bar__form-container">
            <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
            <input type="search" className="search-bar__form-search" id="busqueda" />
            <input type="submit" className="search-bar__form-submit" value="🔍" />
        </form>
        <div className="search-bar__carrito-container"><Link className="search-bar__carrito-container__link" to="/carrito"><i className="fa-solid fa-cart-shopping"></i></Link></div>
        <div className="menu-toogle">
            <label htmlFor="menu" className="menu-toogle__label">
              <span className="menu-toogle__top-bread"></span>
              <span className="menu-toogle__meat"></span>
              <span className="menu-toogle__bottom-bread"></span>
            </label>
        </div>
    </div>
  )
}

export default SearchBar