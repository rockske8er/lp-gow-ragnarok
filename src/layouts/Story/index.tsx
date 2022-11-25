import Image from 'next/image'
import { Heading } from '../../components/Heading'
import { Wrapper } from '../Wrapper'

import { Container, BoxLeft, BoxFooter, BoxRight } from './styles'
import ssImage from './../../assets/images/logo-sta-monica-sony.png'
import kratoeatreus from './../../assets/images/kratos-atreus.png'

export function Story() {
  return (
    <Container>
      <Wrapper>
        <BoxLeft>
          <Heading title="Sony Interactive Entertainment" />

          <h2>Embarque com Kratos e Atreus em uma jornada épica</h2>

          <p>
            O Fimbulwinter já começou. Kratos e Atreus devem viajar pelos Nove
            Reinos em busca de respostas enquanto as forças asgardianas se
            preparam para uma batalha profetizada que causará o fim do mundo.
            Nessa jornada, eles explorarão paisagens míticas impressionantes e
            enfrentarão inimigos aterradores: deuses nórdicos e monstros. A
            ameaça do Ragnarök se aproxima. Kratos e Atreus terão de escolher
            entre a segurança deles próprios e a dos reinos.
          </p>

          <BoxFooter>
            <Image src={ssImage} alt={''} />
            <p>
              Do Santa Monica Studio, esta é a sequência da aclamada versão de
              2018 de God of War.
            </p>
          </BoxFooter>
        </BoxLeft>
        <BoxRight>
          <Image src={kratoeatreus} alt={''} />
        </BoxRight>
      </Wrapper>
    </Container>
  )
}
