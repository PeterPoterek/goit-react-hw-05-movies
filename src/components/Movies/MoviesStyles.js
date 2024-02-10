import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesContainer = styled.div`
  padding: 20px;

  padding-top: 120px;
`;

export const SearchInput = styled.input`
  margin-right: 10px;
  padding: 8px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  background-color: #a855f7;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9333ea;
  }
`;

export const MoviesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
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
