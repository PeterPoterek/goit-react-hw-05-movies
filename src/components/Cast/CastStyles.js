import styled from 'styled-components';

export const CastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const CastItem = styled.div`
  text-align: center;
`;

export const CastImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
`;

export const CastName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const CharacterInfo = styled.p`
  font-size: 14px;
  color: #6c757d;
`;
