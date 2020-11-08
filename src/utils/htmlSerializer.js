// -- The HTML Serializer
// This function will be used to modify the way that a Rich Text or Title field is rendered.

import React from 'react'
import { Elements } from 'prismic-richtext'

import { PrimaryHeading,
  SecondaryHeading,
  TertiaryHeading,
  QuarternaryHeading,
  Paragraph,
  StyledUl,
  StyledListItem } from "../components/typography"

	
  // -- HTML Serializer
  const htmlSerializer = function(type, element, content, children, key) {
   
    switch(type) {
      case Elements.heading1: // Heading 1
        return <PrimaryHeading key={key}>{children}</PrimaryHeading>

      case Elements.heading2: // Heading 2
        return <SecondaryHeading key={key}>{children}</SecondaryHeading>

      case Elements.heading3: // Heading 3
        return <TertiaryHeading key={key}>{children}</TertiaryHeading>
    
      case Elements.heading4: // Heading 4
        return <QuarternaryHeading key={key}>{children}</QuarternaryHeading>

      case Elements.paragraph: // Paragraph
        return <Paragraph secondary key={key}>{children}</Paragraph>
      
      case Elements.list: // Unordered list
        return <StyledUl secondary key={key}>{children}</StyledUl>

      case Elements.listItem: // List item
        return <StyledListItem secondary key={key}>{children}</StyledListItem>

      default: // Always include a default that returns null
        return null
    }
  }

  export default htmlSerializer