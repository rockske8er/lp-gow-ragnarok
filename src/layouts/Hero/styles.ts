import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 16.4rem;
  padding-bottom: 10.3rem;

  background: url('bg-hero.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 80rem;

  > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  @media (max-width: 1200px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
    height: auto;
    background-position-x: 30%;
  }

  @media (max-width: 991px) {
    padding: 6rem 0;
    background-size: cover;
    background-position: center center;
    > div {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 560px) {
    padding: 4rem 0;
  }
`

export const BoxLeft = styled.div`
  width: 100%;
  max-width: 78.2rem;

  h1 {
    margin-top: 2.4rem;
    margin-bottom: 1.8rem;

    @media (max-width: 1200px) {
      font-size: 10rem;
    }
  }

  p {
    color: #fff;
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 4rem;
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 991px) {
    text-align: center;
    margin-bottom: 4rem;
  }

  @media (max-width: 560px) {
    h1 {
      font-size: 4rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.6rem;
      margin: 0 auto;
      margin-bottom: 3rem;
    }
  }
`

export const CallToAction = styled.div`
  display: flex;
  strong {
    color: #000;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.2rem;
    background-color: #fff;
    padding: 1.8rem 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.8rem 3.6rem;
    background-color: #3265ea;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.2rem;
  }

  @media (max-width: 1200px) {
    max-width: 64rem;
    p {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 991px) {
    justify-content: center;
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`

export const BoxRight = styled.div`
  width: 100%;
  max-width: 44.3rem;
  position: relative;
  top: 9.7rem;

  span {
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 2.3rem;
  }

  button {
    width: 100%;
    height: 24.7rem;
    border: 2px solid #3265ea;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 5.1rem;

    .thumbnail {
      width: 100%;
    }

    .play {
      position: absolute;
      bottom: 2.5rem;
      left: 3.2rem;
    }
  }

  @media (max-width: 1200px) {
    top: 0;
    max-width: 35.3rem;
    button {
      max-height: 19.7rem;
    }
  }

  @media (max-width: 991px) {
    text-align: center;
    button {
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 560px) {
    max-width: 31rem;

    button {
      height: 17.7rem;
    }
  }
`

export const ClassificationAge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  img {
    width: 4rem;
    height: 4rem;
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7rem;
    max-width: 27.4rem;
  }

  @media (max-width: 991px) {
    flex-direction: column;

    p {
      margin-left: 0;
      margin-top: 2rem;
    }
  }

  @media (max-width: 560px) {
    p {
      line-height: 2.4rem;
    }
  }
`
