import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

  width: 90%;
  max-width: 600px;
`

export const Image = styled.div<{ src: string }>`
  background-size: cover;

  height: 225px;
  min-width: 100%;

  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
`
