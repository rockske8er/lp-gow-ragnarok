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

  @media (max-width: 1200px) {
    padding: 6rem 0;
    background-image: none;

    > div {
      flex-direction: column-reverse;
    }
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

  @media (max-width: 1200px) {
    max-width: 100%;
    text-align: center;

    > div {
      justify-content: center;
    }

    h2 {
      max-width: 75%;
      margin: 2rem auto;
    }
  }

  @media (max-width: 991px) {
    h2 {
      max-width: 95%;
    }
  }

  @media (max-width: 560px) {
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.6rem;
      margin-bottom: 4rem;
    }
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

  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`
export const BoxRight = styled.div`
  img {
    position: relative;
    left: 120px;
    top: -45px;
  }

  @media (max-width: 560px) {
    img {
      margin-bottom: 4rem;
    }
  }

  @media (max-width: 991px) {
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1200px) {
    img {
      top: 0;
      left: 0;
      margin-bottom: 6rem;
    }
  }
`
