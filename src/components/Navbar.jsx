import menuItems from "../constants/menuItems"
import NavItem from "./NavItem"
import { useState } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-bar__nav-list">
        
        {
          menuItems.map( item => (
            <NavItem item={item} key={item.id} activeItem={activeItem} handleItemClick={handleItemClick} />
          ))
        }
        
      </ul>
    </nav>
  )
}

export default Navbar