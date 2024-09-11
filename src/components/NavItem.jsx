import { NavLink } from 'react-router-dom'

const NavItem = ({item, activeItem, handleItemClick}) => {
  return (
    <li className={`nav-bar__nav-item ${activeItem && item.id === activeItem.id ? 'active' : ''}`}>
        <NavLink to={item.ruta} className="nav-bar__nav-link" onClick={() => handleItemClick(item)}>
            {item.nombre}
        </NavLink>
    </li>
  )
}

export default NavItem  
