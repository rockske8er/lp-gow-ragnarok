import Image from 'next/image'

import { Wrapper } from '../../layouts/Wrapper'

import { Container, Platforms } from './styles'

import brandGOW from './../../assets/images/logo.png'
import brandSony from './../../assets/images/svgs/sony.svg'

export function Header() {
  return (
    <Container>
      <Wrapper>
        <Image src={brandSony} alt="logo sony" />

        <Image src={brandGOW} alt="logo sony" />

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
