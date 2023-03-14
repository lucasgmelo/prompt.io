import { FC } from 'react'
import * as S from './styles'

interface ImageT {
  url1: string
  url2: string
}

export const Image: FC<ImageT> = ({ url1, url2 }) => {
  return (
    <S.Container>
      <S.Image src={url1} />
      <S.Image src={url2} />
    </S.Container>
  )
}
