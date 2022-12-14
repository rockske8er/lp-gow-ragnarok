import { createGlobalStyle } from 'styled-components'

export const Boot = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Archivo", sans-serif;
    color: #FFFFFF;
    list-style: none;
    text-decoration: none;
  }

  html {
    overflow-x: hidden;
    font-size: 62.5%;
  }

  body,
  html {
      scroll-behavior: smooth;
  }

  body{
    background-color: #000201;
  }

  img{
    display: block;
    max-width: 100%;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }


  h1{
  font-size: 12.4rem;
  font-weight: 700;
  line-height: 97.5%;
}

h2{
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 130%;
}

p{
  color: #bdc2cb;
  font-size: 2rem;
  font-weight: 400;
  line-height: 160%;
}

/* width */
::-webkit-scrollbar {
  width: 1rem;
  height: 2rem;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #000201;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3265ea;
  border-radius: 1.4rem;
}

`
