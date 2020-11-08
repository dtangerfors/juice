import React from "react"
import styled from "styled-components"

import screen from "../../assets/mediaqueries"
import variables from "../../assets/variables"

import { Information } from "../typography"

// Styled Components

const ParallaxWrapper = styled.div`
  perspective: 1px;

  position: relative;

  grid-column-start: 3;
  grid-column-end: 8;

  margin-bottom: ${variables.padding.medium};

  @media ${screen.xLarge} {
    grid-column-start: 3;
    grid-column-end: 10;
  }

  @media ${screen.medium} {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`

const Image = styled.div`
  position: relative;
  height: calc(${variables.padding.small} * 26);
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: -1;

  @media ${screen.medium} {
    margin: 0 -${variables.padding.small};
    left: 0;
    right: 0;
    height: calc(${variables.padding.small} * 20);
    background-position: center;
  }

  @media screen and (hover: none) {
    background-attachment: scroll;
  }
`

const FigCaption = styled(Information)`
  margin: ${variables.padding.small} 0;
  padding-bottom: .6rem;
  line-height: 1.8rem;
`

export default ({ slice }) => {
  return (
    <ParallaxWrapper>
      <Image style={{ backgroundImage: `url(${slice.primary.image.url})` }} />
      <FigCaption>{slice.primary.image.alt}</FigCaption>
    </ParallaxWrapper>
  )
}
