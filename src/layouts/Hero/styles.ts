import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 16.4rem;
  padding-bottom: 10.3rem;

  background: url('bg-hero.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  height: 80rem;

  > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
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
`

export const BoxLeft = styled.div`
  width: 100%;
  max-width: 78.2rem;

  h1 {
    margin-top: 2.4rem;
    margin-bottom: 1.8rem;
  }

  p {
    color: #fff;
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 4rem;
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
`
