import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;

  background-color: #18181b;
  padding: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 2rem;
  padding-left: 2rem;
`;

export const NavbarItem = styled.li`
  margin-right: 20px;
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 2.5rem;

  transition: color 0.3s ease;

  &.active {
    color: #e9d5ff;
  }
`;
