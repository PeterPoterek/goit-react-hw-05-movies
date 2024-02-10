import { Link } from 'react-router-dom';
import { NavbarContainer, NavList, NavItem, NavLink } from './NavbarStyles';
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
