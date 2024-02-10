import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  padding: 55px;
  padding-top: 120px;
  padding-bottom: 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  padding: 1rem;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #c084fc;
  font-weight: bold;
  font-size: 1.5rem;

  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;
