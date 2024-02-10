import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #262626;

  padding-top: 100px;
`;

export const MovieTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: white;
`;

export const MoviePoster = styled.img`
  width: 400px;
  height: 500px;

  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
`;

export const GenreList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
`;

export const GenreItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  font-weight: bold;
`;

export const OverviewContainer = styled.div`
  margin-bottom: 16px;

  max-width: 400px;
`;

export const OverviewTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const UserScore = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const TabList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 100px;
`;

export const TabItem = styled.li``;

export const TabButton = styled.button`
  background-color: #a855f7;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9333ea;
  }
`;

export const BackButton = styled(Link)``;
