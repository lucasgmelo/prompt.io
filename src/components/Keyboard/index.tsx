import { Key } from 'components/Key'
import { FC } from 'react'
import * as S from './styles'

const rows = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['ok', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'del']
]

export const Keyboard: FC = () => {
  return (
    <S.Container>
      {rows.map((row) => (
        <div key={row.toString()}>
          {row.map((keyContent) => (
            <Key key={keyContent} content={keyContent} />
          ))}
        </div>
      ))}
    </S.Container>
  )
}
