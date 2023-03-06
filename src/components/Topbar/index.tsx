import { FC } from 'react'
import { Logo } from './logo'
import * as S from './styles'

export const Topbar: FC = () => {
  return (
    <S.Container>
      <Logo />
      <S.Text>Adivinhe o prompt que gerou a imagem</S.Text>
      <S.TutorialButton>?</S.TutorialButton>
    </S.Container>
  )
}
