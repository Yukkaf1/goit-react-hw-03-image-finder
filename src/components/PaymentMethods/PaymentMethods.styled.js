import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: center;

  width: 400px;
  border: 1px solid ${p => p.theme.colors.black};
  padding: 8px;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  min-width: 120px;
  text-transform: capitalize;
  cursor: pointer;

  background-color: ${p =>
    p.selected ? p.theme.colors.accent : p.theme.colors.white};

  &:hover {
    border-color: ${p => p.theme.colors.accent};
  }
`;
