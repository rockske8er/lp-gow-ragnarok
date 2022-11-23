import { Boot } from './../styles/boot'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Boot />
      <Component {...pageProps} />
    </>
  )
}
