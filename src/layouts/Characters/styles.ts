import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 17.6rem;
  padding-bottom: 14.3rem;
  background-image: url('/bg-characters.png');
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

export const BoxLeft = styled.div`
  width: 100%;
  max-width: 61.2rem;

  h2 {
    margin-top: 2.8rem;
    margin-bottom: 2.4rem;
  }
`
export const BoxRight = styled.div`
  display: flex;
  align-items: center;
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
`
