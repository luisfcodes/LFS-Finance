import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #181818;
    --color-text: #fff;
    --light-orange: #FABF1B;
    --dark-orange: #FD880F;
    --gray: #4D5656;
    --red: #CB4335;
    --green: #28B463;
    --blue-dark: #147B80;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body, button, input, textarea, a {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--color-text);
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    max-width: 1320px;
    margin: 0 auto;

    main {
      flex-grow: 1;
    }

    .deposits {
      color: var(--green)
    }

    .withdraws {
      color: var(--red);
    }
  }

  
`