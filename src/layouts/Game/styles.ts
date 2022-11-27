import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  min-height: 18rem;
  display: flex;
  align-items: center;
  background-color: #090a0a;

  @media (max-width: 560px) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`

export const GameInfo = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      display: block;
      color: #bdc2cb;
      text-align: center;
      font-size: 400;
      font-size: 1.6rem;
      line-height: 160%;
      margin-top: 1.2rem;
    }
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    gap: 3rem 0;

    li {
      width: 33.3%;
    }
  }

  @media (max-width: 560px) {
    height: auto;
    li {
      width: 50%;
      justify-content: center;
      align-items: center;

      span {
        max-width: 14.5rem;
      }
    }
  }
`
