import styled from 'styled-components'

export const Button = styled.button`
  margin: 8px 6px;
  background-color: ${({ theme }) => theme.colors.black};

  outline: none;
  border: none;
  border-radius: 4px;

  width: 40px;
  height: 56px;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  font-weight: 600;

  &:hover {
    opacity: 0.95;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }
`
