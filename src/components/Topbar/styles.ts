import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto;
  padding: 16px 0;

  & > svg {
    height: 16px !important;
  }
`

export const Text = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;

  color: #ffffff;
  text-align: center;

  margin: 0 80px;
`

export const TutorialButton = styled.button`
  background-color: transparent;

  outline: none;
  border: ${({ theme }) => `3px solid ${theme.colors.grey}`};
  color: ${({ theme }) => theme.colors.grey};
  border-radius: 4px;

  width: 32px;
  height: 40px;

  cursor: pointer;

  font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
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
