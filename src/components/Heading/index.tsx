import { Container } from './styles'

import Image from 'next/image'

import bullets from './../../assets/images/svgs/bullets.svg'

interface HeadingProps {
  title: string
}

export function Heading({ title }: HeadingProps) {
  return (
    <Container>
      <Image src={bullets} alt="Asteritico" />
      <span>{title}</span>
    </Container>
  )
}
