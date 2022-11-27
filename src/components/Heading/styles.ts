import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  span {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.2rem;
  }

  @media (max-width: 1200px) {
    span {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 991px) {
    justify-content: center;
  }

  @media (max-width: 560px) {
    span {
      font-size: 1.6rem;
    }
  }
`
