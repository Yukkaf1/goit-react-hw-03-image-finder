import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 400px;
  border: 1px solid ${p => p.theme.colors.black};
  padding: 8px;
  border-radius: 4px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Image = styled.img`
  display: flex;
  width: 140px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  background-color: whitesmoke;
`;
