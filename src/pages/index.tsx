import { Key } from 'components/Key'
import { Topbar } from 'components/Topbar'
import { Container } from 'styles/global'

export default function Home() {
  return (
    <Container>
      <Topbar />
      <Key content="Q" />
      <Key content="W" />
      <Key content="E" />
      <Key content="R" />
      <Key content="T" />
      <Key content="Y" />
    </Container>
  )
}
