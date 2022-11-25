import { Header } from '../components/Header'
import { Characters } from '../layouts/Characters'
import { Game } from '../layouts/Game'
import { Hero } from '../layouts/Hero'
import { Story } from '../layouts/Story'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Game />
      <Story />
      <Characters />
    </>
  )
}
