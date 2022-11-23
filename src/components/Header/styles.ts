import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand__sony {
  }

  .brand__gow {
  }
`

export const Platforms = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  span {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.5rem;
  }
  ul {
    display: flex;
    gap: 0.8rem;
    li {
      padding: 0.4rem 0.8rem;
      border: 1.5px solid #fff;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.5rem;
    }
  }
`
