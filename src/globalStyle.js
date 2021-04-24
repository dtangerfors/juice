import { createGlobalStyle } from "styled-components"

import screen from "./assets/mediaqueries"
import variables from "./assets/variables"

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
}

@font-face {
    font-family: "Cirka";
    src: url('https://files.dtangerfors.se/fonts/cirka-regular.otf');
    font-weight: 400;
}

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    background-color: ${variables.color.black};
    font-family: ${variables.typography.bodyFont};
    font-size: ${variables.typography.defaultSize};
  }

  ::selection {
    background-color: ${variables.color.black};
    color: ${variables.color.white};

    @media ${screen.darkMode} {
      background-color: ${variables.color.white};
      color: ${variables.color.black};
    }
  }

  a,
  a * {
    transition: all .3s ease;
  }
  
`

export default GlobalStyle
