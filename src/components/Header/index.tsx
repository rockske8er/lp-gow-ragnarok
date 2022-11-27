import Image from 'next/image'

import { Wrapper } from '../../layouts/Wrapper'

import { Container, Platforms } from './styles'

import brandGOW from './../../assets/images/logo.jpg'
import brandSony from './../../assets/images/svgs/sony.svg'

export function Header() {
  return (
    <Container>
      <Wrapper>
        <div className="brand__sony">
          <Image src={brandSony} alt="logo sony" />
        </div>

        <div className="brand__gow">
          <Image src={brandGOW} alt="logo sony" />
        </div>

        <Platforms>
          <span>Disponivel para</span>
          <ul>
            <li>PS4</li>
            <li>PS5</li>
          </ul>
        </Platforms>
      </Wrapper>
    </Container>
  )
}
