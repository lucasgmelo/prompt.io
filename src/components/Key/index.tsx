import { FC } from 'react'
import * as S from './styles'

interface KeyT {
  content: string
  disabled?: boolean
}

export const Key: FC<KeyT> = ({ content, disabled = false }) => {
  return <S.Button disabled={disabled}>{content}</S.Button>
}
