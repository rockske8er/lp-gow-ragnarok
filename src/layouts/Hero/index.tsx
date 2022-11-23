import Image from 'next/image'
import { Heading } from '../../components/Heading'
import { Wrapper } from '../Wrapper'
import {
  Container,
  BoxLeft,
  BoxRight,
  CallToAction,
  ClassificationAge,
} from './styles'

import faixaEtaria from './../../assets/images/faixa-etaria.png'

import playIcon from './../../assets/images/svgs/play.svg'
import thumbGif from './../../assets/images/thumbnail.gif'
const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <BoxLeft>
          <Heading title="Lançamento dia 09/11/2022" />
          <h1>God of War Ragnarök</h1>
          <p>
            Os maiores heróis dos nove reinos, lutando por um futuro em que
            acreditam.
          </p>

          <CallToAction>
            <strong>R$ 349,00</strong>
            <a href="#" target="_blank">
              Comprar na pré-venda
            </a>
          </CallToAction>
        </BoxLeft>
        <BoxRight>
          <span>Assista o trailer</span>

          <button>
            <Image className="thumbnail" src={thumbGif} alt="" />
            <Image className="play" src={playIcon} alt="" />
          </button>
          <ClassificationAge>
            <Image src={faixaEtaria} alt="" />
            <p>Drogas Lícitas, Linguagem Imprópria e Violência Extrema</p>
          </ClassificationAge>
        </BoxRight>
      </Wrapper>
    </Container>
  )
}

export { Hero }
