import styled from 'styled-components'

export const Input = styled.input<{ color?: string }>`
  width: 32px;
  height: 48px;

  border: none;
  border-radius: 4px;

  margin: 2px;
  background: ${({ theme, color }) => color || theme.colors.bgLight};

  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: white;

  outline: none;

  @media (max-width: 600px) {
    width: 24px;
    height: 32px;
  }
`

export const Space = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0 8px;
`

export const Disabled = styled.div`
  width: 32px;
  height: 48px;

  border-radius: 4px;

  background: ${({ theme }) => theme.colors.bgLight};
  opacity: 0.4;

  margin: 2px;

  @media (max-width: 600px) {
    width: 24px;
    height: 32px;
  }
`
