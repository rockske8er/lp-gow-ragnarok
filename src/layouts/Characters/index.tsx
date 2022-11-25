import Image from 'next/image'
import { Heading } from '../../components/Heading'
import { characters } from '../../utils/characters'
import { Wrapper } from '../Wrapper'
import { Container, Header, BoxLeft, BoxRight, BoxFooter } from './styles'

import brand from './../../assets/images/logo.jpg'
import axel from './../../assets/images/axel.png'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/free-mode'

// import required modules
import { FreeMode } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import { CardCharacter } from '../../components/CardCharacter'

export function Characters() {
  return (
    <Container className="s-characters">
      <Wrapper>
        <Header>
          <BoxLeft>
            <Heading title="Conheça os personagens" />
            <h2>
              Toda grande aventura é uma história esperando para ser contada
            </h2>

            <p>
              Reviva o começo da jornada nórdica épica de Kratos e Atreus em
              Mitos de Midgard. Um alerta para quem não está familiarizado com
              God of War: spoilers à frente.
            </p>
          </BoxLeft>

          <BoxRight>
            <Image src={axel} alt="" />
            <BoxFooter>
              <Image src={brand} alt="" />

              <span>Lançamento dia 09/11/2022</span>
            </BoxFooter>
          </BoxRight>
        </Header>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          className="s"
          modules={[FreeMode]}
        >
          {characters.map((item, index) => (
            <SwiperSlide key={index}>
              <CardCharacter data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </Container>
  )
}
