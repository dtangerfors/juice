import React from 'react'
import styled from "styled-components"
import {Link} from "gatsby"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"

import { SecondaryHeading, Paragraph } from "../../components/typography"
import Layout from "../../components/layout"
import screen from "../../assets/mediaqueries"
import variables from "../../assets/variables"
import GlobalStyle from "../../globalStyle"

import { fadeUpLarge, fadeIn} from "../../assets/animation"

const Popup = styled.div`
  position: relative;
`

const PopupContainer = styled.div`
  z-index: 2;
  position: fixed;
  width: 100vw;
  min-height: 70vh;
  bottom: 0;
  left: 0;
  background-color: ${variables.color.white};
  padding: 20rem 10rem 10rem;
  overflow: hidden;


  display: flex;
    justify-content: center;
    align-items: flex-start;

  @media ${screen.small} {
      padding: 15rem 2rem 10rem;
  }

  &::after {
    content: "shopping_cart";
    font-family: "Material Icons";
    font-weight: 400;
    font-style: normal;
    font-size: 35vh;
    position: absolute;
    bottom: -5vh;
    left: -5vw;
    color: #e6e8d4;
    z-index: -1;
  }
`
const Wrapper = styled.div`
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
`
const Close = styled(Link)`
  appearance: none;
  position: absolute;
  top: 2rem;
  right: 1rem;
  cursor: pointer;
  border: none;
  font-family: inherit;
  text-transform: uppercase;
  line-height: 1;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: ${variables.color.black};
  padding: 1rem 2rem;
  border-radius: 3rem;

  &:hover {
    background-color: #d4d4d4;
  }

  &::after {
    content: "close";
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    margin-left: 1rem;
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: "liga";
  }
`

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  z-index: 1;
`

export default function thankyou() {
    return (
        <Layout>
            <GlobalStyle />
            <Helmet>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
            
            </Helmet>
            <Popup>
        <PopupContainer as={motion.div}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeUpLarge}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}>
          <Wrapper>
            <SecondaryHeading style={{ color: variables.color.black }}>
              Tack för din beställning!
            </SecondaryHeading>
            <Paragraph style={{ color: variables.color.black }}>
              Jag kommer inom kort återkomma med en bekräftelse på din
              beställning.
            </Paragraph>
          </Wrapper>
          <Close to="/">
            Stäng fönster
          </Close>
        </PopupContainer>
        <Overlay as={motion.div}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeIn}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }} />
      </Popup>
        </Layout>
    )
}
