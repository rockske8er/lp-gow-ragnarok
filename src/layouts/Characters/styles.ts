import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 17.6rem;
  padding-bottom: 14.3rem;
  background-image: url('/bg-characters.png');
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 6rem 0;
  }

  @media (max-width: 560px) {
    padding: 4rem 0;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BoxLeft = styled.div`
  width: 100%;
  max-width: 61.2rem;

  h2 {
    margin-top: 2.8rem;
    margin-bottom: 2.4rem;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 4rem;
  }

  @media (max-width: 560px) {
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`
export const BoxRight = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BoxFooter = styled.div`
  span {
    max-width: 14.3rem;
    margin-top: 2.2rem;
    display: block;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;
    color: #fff;
  }

  @media (max-width: 560px) {
    padding-bottom: 3rem;
    img {
      margin: 0 auto;
    }
    span {
      max-width: 100%;
    }
  }
`
