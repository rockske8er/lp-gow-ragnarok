import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 18rem;
  display: flex;
  align-items: center;
  background-color: #090a0a;
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
`
