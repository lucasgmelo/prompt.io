import { Input } from 'components/Input'
import { FC } from 'react'
import * as S from './styles'

// const PROMPT_SIZE = [8, 8]
const USER_TRIES = [...new Array(5)]

export const Tries: FC = () => {
  // const [currentTry, setCurrentTry] = useState(1)

  // const generateInputs = () => {
  //   const
  //   PROMPT_SIZE.map()
  // }

  return (
    <S.Container>
      {USER_TRIES.map((_, index) => (
        <S.Row key={index}>
          <Input disabled={index !== 0} rightKey />
          <Input disabled={index !== 0} rightPlace />
          <Input disabled={index !== 0} />
          <Input disabled={index !== 0} />
          <Input disabled={index !== 0} />
          <Input disabled={index !== 0} />
          <Input disabled={index !== 0} />
          <Input disabled={index !== 0} />
          <Input space />
          <Input disabled={index !== 0} rightKey />
          <Input disabled={index !== 0} rightKey />
          <Input disabled={index !== 0} rightPlace />
          <Input disabled={index !== 0} />
          <Input disabled={index !== 0} />
          <Input disabled={index !== 0} />
          <Input disabled={index !== 0} />
          <Input disabled={index !== 0} />
          {/* {PROMPT_SIZE.map()} */}
        </S.Row>
      ))}
    </S.Container>
  )
}
