import { FC } from 'react'
import * as S from './styles'

interface InputT {
  space?: boolean
  disabled?: boolean
  rightPlace?: boolean
  rightKey?: boolean
}

export const Input: FC<InputT> = ({
  rightKey,
  rightPlace,
  disabled = false,
  space = false
}) => {
  const renderInputColor = () => {
    if (rightPlace) return '#3AA394'
    if (rightKey) return '#EEC272'

    return undefined
  }

  if (disabled) return <S.Disabled />
  if (space) return <S.Space>-</S.Space>
  return <S.Input color={renderInputColor()} />
}
