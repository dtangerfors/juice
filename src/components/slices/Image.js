import React from "react"
import styled from "styled-components"

import variables from "../../assets/variables"
import screen from "../../assets/mediaqueries"

import {
    Information,
  } from "../typography"

// Styled Components

const Figure = styled.figure`
  grid-column-start: 3;
  grid-column-end: 11;
  width: calc(100% + 3.2rem);
  margin-left: -${variables.padding.xsmall};
  margin-bottom: ${variables.padding.medium};

  @media ${screen.xLarge} {
    grid-column-start: 2;
    grid-column-end: 12;
  }

  @media ${screen.medium} {
    grid-column-start: 1;
    grid-column-end: 5;

    width: calc(100% + ${variables.padding.medium});
    margin-left: -${variables.padding.small};
  }
`

const Picture = styled.img`
  width: 100%;
`

const FigCaption = styled(Information)`
    margin-left: ${variables.padding.xsmall};

    @media ${screen.medium} {
        margin-left: ${variables.padding.small};
    }
`

export default ({ slice }) => {
  return (
    <Figure>
      <Picture src={slice.primary.image.url} alt={slice.primary.image.alt} />
      <FigCaption as="figcaption">{slice.primary.image.alt}</FigCaption>
    </Figure>
  )
}
