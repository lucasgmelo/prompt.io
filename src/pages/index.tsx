import { Image } from 'components/Image'
import { Keyboard } from 'components/Keyboard'
import { Topbar } from 'components/Topbar'
import { Container } from 'styles/global'

export default function Home() {
  return (
    <Container>
      <Topbar />
      <Image
        url1="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
        url2="https://assets.americancinematheque.com/wp-content/uploads/2022/07/24132229/ac-opt-HAPPY-FEET_2.jpg"
      />
      <Keyboard />
    </Container>
  )
}
