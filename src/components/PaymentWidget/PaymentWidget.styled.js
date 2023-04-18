import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap
  justify-content: center;
  gap: 8px;
  align-items: center;

  width: 400px;
  border: 1px solid ${p => p.theme.colors.black};
  padding: 8px;
  border-radius: 4px;
`;
