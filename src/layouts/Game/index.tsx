import Image from 'next/image'
import { gameInfo } from '../../utils'
import { Wrapper } from '../Wrapper'
import { Container, GameInfo } from './styles'

export function Game() {
  return (
    <Container>
      <Wrapper>
        <GameInfo>
          {gameInfo.map((item, index) => (
            <li key={index}>
              <div className="icon">
                <Image src={item.icon} alt={item.title} />
              </div>

              <span>{item.title}</span>
            </li>
          ))}
        </GameInfo>
      </Wrapper>
    </Container>
  )
}
