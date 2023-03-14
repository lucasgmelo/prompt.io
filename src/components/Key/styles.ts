import styled from 'styled-components'

export const Button = styled.button<{ special?: boolean }>`
  margin: 4px 2px;
  background-color: ${({ theme }) => theme.colors.black};

  outline: none;
  border: none;
  border-radius: 4px;

  width: ${({ special }) => (special ? '56px' : '32px')};
  height: 40px;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }
`
