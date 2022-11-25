import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

  .card {
    width: 100%;
    max-height: 52rem;
    margin-bottom: 2.4rem;
    position: relative;
    display: flex;
    justify-content: center;

    overflow: hidden;

    img {
      transition: transform 0.3s ease;
    }

    button {
      position: absolute;
      padding: 1.8rem 3.6rem;
      background-color: #3265ea;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2rem;
      bottom: 0;
      opacity: 0;
      transition: all 0.3s ease;
    }
  }

  &:hover {
    > div {
      img {
        transform: scale(1.1);
      }

      button {
        bottom: 5.8rem;
        opacity: 1;
      }
    }
  }
`

export const Info = styled.div`
  h3 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2rem;
    margin-bottom: 8px;
  }

  span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5rem;
  }
`
