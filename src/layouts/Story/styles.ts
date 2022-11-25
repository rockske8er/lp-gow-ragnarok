import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding-top: 16rem;
  padding-bottom: 8rem;
  background-image: url('/bg-story.png');
  background-repeat: no-repeat;
  background-position: top center;
  overflow: hidden;
  > div {
    display: flex;
    align-items: center;
  }
`

export const BoxLeft = styled.div`
  width: 100%;
  max-width: 62.9rem;
  h2 {
    margin-top: 2.8rem;
    margin-bottom: 2.4rem;
    max-width: 50.2rem;
  }

  p {
    margin-bottom: 5.6rem;
  }
`

export const BoxFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 4.2rem;
  p {
    margin-bottom: 0;
    font-size: 1.6rem;
    line-height: 160%;

    max-width: 32.4rem;
  }
`
export const BoxRight = styled.div`
  img {
    position: relative;
    left: 120px;
    top: -45px;
  }
`
