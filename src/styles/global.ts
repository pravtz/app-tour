import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
:root { 
  --primary: #59310E;
  --secundary: #D99F6C;
  --tertiary: #A69C80;

  --background: #dddddd;
  --write: #D9D5D2;
  --black: #262321;

  --container: 100rem;

  --small: 1.5rem;
  --medium: 3rem;
  --large: 5rem;



}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
  html, body, #__next {
    height: 100%;
    background-color: var(---background);
    color: var(--primary);
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  /* html {
    font-size: 62.5%
  } */
`

export default GlobalStyled
