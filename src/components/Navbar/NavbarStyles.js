import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  background-color: #18181b;
  padding: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
