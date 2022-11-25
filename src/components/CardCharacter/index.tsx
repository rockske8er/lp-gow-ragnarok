import Image, { StaticImageData } from 'next/image'

import { Container, Info } from './styles'

interface CardCharacterProps {
  image: StaticImageData
  name: string
  desc: string
}

type Props = {
  data: CardCharacterProps
}
export function CardCharacter({ data }: Props) {
  return (
    <Container>
      <div className="card">
        <Image src={data.image} alt={data.name} />
        <button>Saiba mais</button>
      </div>

      <Info>
        <h3>{data.name}</h3>
        <span>{data.desc}</span>
      </Info>
    </Container>
  )
}
