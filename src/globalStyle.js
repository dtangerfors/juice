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

    @media ${screen.small} {
      font-size: 50%;
    } 
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
  
  a:hover {
    background-color: rgba(0,0,0, .05);


    @media ${screen.darkMode} {
      background-color: rgba(255, 255, 255, .1);
    }
  }

  a:focus {
    outline: none;
    background: #ff5978;
    box-shadow: inset 1rem 0 3rem #ae5ae0, inset -1rem 0 3rem #ffcb00, inset -1rem .5rem 1rem #ff5500;
  }

  
`

export default GlobalStyle
