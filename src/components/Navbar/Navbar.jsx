import {
  NavbarContainer,
  NavList,
  NavbarItem,
  NavbarLink,
} from './NavbarStyles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavbarItem>
          <NavbarLink exact to="/">
            Home
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/movies">Movies</NavbarLink>
        </NavbarItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
