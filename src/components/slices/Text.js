import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

import { linkResolver } from "../../utils/linkResolver"
import htmlSerializer from "../../utils/htmlSerializer"

import variables from "../../assets/variables"
import screen from "../../assets/mediaqueries"

const TextWrapper = styled.div`
  grid-column-start: 3;
  grid-column-end: 9;
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

export default ({ slice }) => {
  return <TextWrapper>{RichText.render(slice.primary.text, linkResolver, htmlSerializer)}</TextWrapper>
}
