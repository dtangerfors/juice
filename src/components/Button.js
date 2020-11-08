import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import variables from "../assets/variables"
import screen from "../assets/mediaqueries"

const ButtonLink = styled.a`
  text-decoration: none;
  color: ${variables.color.white};
  font-size: ${variables.typography.defaultSize};
  font-family: ${variables.typography.titleFont};
  border: 1px solid ${variables.color.black};
  border-radius: 3rem;
  padding: 1.2rem 4rem 1.5rem;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1;
  background-color: ${variables.color.black};

  &:focus {
    background-color: ${variables.color.black};
    color: ${variables.color.white};
    outline: none;
    border: 1px solid ${variables.color.black};
    padding-bottom: 1.5rem;
    box-shadow: none;
  }

  &:hover {
    background-color: ${variables.color.black};
  }

  @media ${screen.small} {
    width: 100%;
  }

  @media ${screen.darkMode} {
    color: ${variables.color.black};
    border-color: ${variables.color.white};
    background-color: ${variables.color.white};

    &:focus {
      background-color: ${variables.color.white};
      color: ${variables.color.black};
      border: 1px solid ${variables.color.white};
      box-shadow: none;
    }

    &:hover {
      background-color: ${variables.color.white};
    }
  }
`

const ButtonLinkOutlined = styled(ButtonLink)`
  color: ${variables.color.black};
  background-color: transparent;

  &:focus {
    color: ${variables.color.white};
    outline: none;
    border: 1px solid ${variables.color.black};
    padding-bottom: 1.5rem;
    box-shadow: none;
  }

  &:hover {
    background-color: transparent;
  }

  @media ${screen.small} {
    width: 100%;
  }

  @media ${screen.darkMode} {
    color: ${variables.color.white};
    border-color: ${variables.color.white};
    background-color: transparent;

    &:focus {
      background-color: ${variables.color.white};
      color: ${variables.color.black};
      border: 1px solid ${variables.color.white};
      box-shadow: none;
    }

    &:hover {
      background-color: transparent;
    }
  }
`

const ButtonName = styled.span`
  line-height: 1;
`
const ButtonLinkArrow = styled.span`
  position: relative;
  left: 0;
  opacity: 0;
  margin-left: -.8rem;

  ${ButtonLink}:hover & {
    margin-left: 2rem;
    left: 2rem;
    opacity: 1;
  }

  @media only screen and (hover: none) {
    opacity: 1;
    float: right;
  }
`

export default props => {
    return (
      <ButtonLink as={Link} to={props.href} title={props.title}>
        <ButtonName>{props.title}</ButtonName>
        <ButtonLinkArrow>&rarr;</ButtonLinkArrow>
      </ButtonLink>
    )
}

export const ButtonOutlined = (props) => {
  return (
    <ButtonLinkOutlined as={Link} to={props.href} title={props.title}>
      <ButtonName>{props.title}</ButtonName>
      <ButtonLinkArrow>&rarr;</ButtonLinkArrow>
    </ButtonLinkOutlined>
  )
}

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: ${variables.padding.small};

  & ${ButtonLink} {
    margin: 1rem 1rem 0 0;
  }
`

export const ButtonInnerWrap = styled.div`

  width: auto;

  @media ${screen.small} {
    width: 100%;
  }
`
