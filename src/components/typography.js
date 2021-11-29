import styled from "styled-components"

import screen from "../assets/mediaqueries"
import variables from "../assets/variables"

const PrimaryHeading = styled.h1`
  font-family: ${variables.typography.titleFont};
  font-weight: 300;
  font-size: clamp(3rem, 4vw, 4.8rem);
  line-height: 1.2em;
  color: ${props => props.white ? variables.color.white : variables.color.black};
  padding-bottom: ${variables.padding.small};

  & .punctation {
    position: relative;
    font-size: 0;
    display: inline-flex;
    align-items: flex-end;
    vertical-align: top;

    &::after {
      position: relative;
      content:'';
      font-size: 1.4rem;
      font-family: ${variables.typography.bodyFont};
      text-transform: uppercase;
      letter-spacing: .1em;
      line-height: 1;
      border: 1px solid;
      padding: .2em .7em;
      border-radius: 2rem;
      top: -1.3em;
      left: .3em;
    }

    &.stop::after {
      content: 'Full Stop';
    }

    &.comma::after {
      content: 'Comma';
    }
  }


  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const SecondaryHeading = styled.h2`
  font-family: ${variables.typography.titleFont};
  font-weight: 400;
  font-size: clamp(2.5rem, 4vw, 3.6rem);
  line-height: 1em;
  padding: 1.2rem 0 2.4rem;
  color: ${props => props.white ? variables.color.white : variables.color.black};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }

  p + & {
    margin-top: ${variables.padding.small};
  }
`

const TertiaryHeading = styled.h3`
  font-family: ${variables.typography.titleFont};
  font-weight: 400;
  font-size: clamp(2rem, 4vw, 2.4rem);;
  line-height: 1em;
  padding-bottom: 1.8rem;
  color: ${props => props.white ? variables.color.white : variables.color.black};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const QuarternaryHeading = styled.h4`
  font-family: ${variables.typography.titleFont};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 1.8rem);
  color: ${props => props.white ? variables.color.white : variables.color.black};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const Label = styled.h2`
  font-family: ${variables.typography.bodyFont};
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${props => props.white ? variables.color.white : variables.color.black};
  padding: 0 0 1em;

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const Paragraph = styled.p`
  font-family: ${variables.typography.bodyFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  max-width: 70ch;
  color: ${props => props.white ? variables.color.white : variables.color.gray30};
  padding-bottom: ${variables.padding.small};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const Information = styled.p`
  font-family: ${variables.typography.bodyFont};
  font-weight: 400;
  font-size: 1.3rem;
  font-style: italic;
  line-height: 2.4rem;
  color: ${props => props.white ? variables.color.white : variables.color.gray30};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const Lead = styled(Paragraph)`
  font-size: 1.125em;
`

const TextLink = styled.a`
  display: inline-block;
  font-family: ${variables.typography.titleFont};
  color: inherit;
  text-decoration: none;
  position: relative;
  font-size: 1.2em;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 5px;
    background-image: linear-gradient(
      90deg,
      #ae5ae0,
      #ff5978,
      #ffcb00,
      #ff5500
    );
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::after {
    height: 50%;
    transition: all 0.3s ease;
  }
`

const StyledUl = styled.ul`
  list-style-position: outside;
  padding-inline-start: 4rem;
  margin-bottom: ${variables.padding.small};
`

const StyledListItem = styled.li`
  font-family: ${variables.typography.bodyFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${props => props.white ? variables.color.white : variables.color.gray30};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const Icon = styled.span`
  font-size: .7em !important;
`

export {
  PrimaryHeading,
  SecondaryHeading,
  TertiaryHeading,
  QuarternaryHeading,
  Label,
  Paragraph,
  Lead,
  Information, 
  TextLink,
  StyledUl,
  StyledListItem, 
  Icon
}
