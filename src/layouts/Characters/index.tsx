import 'swiper/css'
import 'swiper/css/free-mode'

import Image from 'next/image'
import { Heading } from '../../components/Heading'
import { characters } from '../../utils/characters'
import { Wrapper } from '../Wrapper'
import { Container, Header, BoxLeft, BoxRight, BoxFooter } from './styles'

import brand from './../../assets/images/logo.jpg'
import axel from './../../assets/images/axel.png'

import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { FreeMode } from 'swiper'

// Import Swiper styles

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
          spaceBetween={20}
          freeMode={true}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },

            991: {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
          }}
          className="s-characters"
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
