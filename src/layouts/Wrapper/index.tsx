import { ReactNode } from 'react'

import { Container } from './styles'

interface ContainerProps {
  children?: ReactNode
}

export function Wrapper({ children }: ContainerProps) {
  return <Container>{children}</Container>
}
