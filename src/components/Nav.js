import React from "react"
import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { bool } from "prop-types"
import { lighten, darken } from "polished"

import screen from "../assets/mediaqueries"
import variables from "../assets/variables"

/* Styled Compenents */

const bgMovement = keyframes`
0%,
  100% { background-position: center left; }
   50% { background-position: center right; }
`

const Navbar = styled.nav`
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  padding-bottom: ${variables.padding.medium};
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  /* background-image: linear-gradient(70deg, #ae5ae0, #ff5978, #ffcb00, #ff5500);
  background-size: 200%;
  background-position: center left;
  animation: ${bgMovement} 80s ease-in-out infinite both alternate; */
  transform: translateY(-100%);
  background-color: ${variables.color.black};

  @media ${screen.darkMode} {
    background-color: ${variables.color.white};
  }
`

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  max-width: 88vw;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: ${variables.padding.xlarge} 0 0;

  @media ${screen.xLarge} {
    max-width: 92vw;
    padding: ${variables.padding.xlarge} 0 ${variables.padding.medium};
  }

  @media ${screen.large} {
    max-width: 100vw;
    padding: 15rem ${variables.padding.small} ${variables.padding.medium};
    padding-left: max(2rem, env(safe-area-inset-left));
    padding-right: max(2rem, env(safe-area-inset-right));
  }

`

const NavItem = styled.li`
  position: relative;
  padding: 0;
  margin-bottom: ${variables.padding.medium};
  width: 100%;
  border-bottom: 1px solid ${darken(0.5, variables.color.white)};
  padding: ${variables.padding.xsmall} 0;

  @media ${screen.darkMode} {
    border-bottom: 1px solid ${lighten(0.7, variables.color.black)};
  }
`

const NavLink = styled(Link)`
  display: block;
  font-family: ${variables.typography.titleFont};
  font-weight: 400;
  font-size: clamp(3rem, 5vw, 4rem); 
  line-height: 1;
  color: ${variables.color.white};
  padding: 0;
  text-decoration: none;

  @media ${screen.darkMode} {
    color: ${variables.color.black};
  }
`

const ButtonLinkArrow = styled.span`
  position: relative;
  margin-left: -1em;
  opacity: 0;
  margin-right: .5em;
  transition: all .6s ease;

  ${NavLink}:hover &,
  ${NavLink}:active &,
  ${NavLink}:focus & {
    margin-left: 0;
    opacity: 1;
    transition: all .6s ease;
  }
`

/* Compenent */

const Nav = ({ open }) => {
  return (
    <Navbar
      as={motion.nav}
      open={open}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: open ? 0 : "-100%",
      }}
      transition={{ delay: open ? 0 : 1, type: "tween", duration: 0.4 }}
    >
      <NavItems>
        <NavItem
          as={motion.li}
          animate={{
            y: open ? 0 : 30,
            opacity: open ? 1 : 0,
          }}
          transition={{ delay: open ? 0.8 : 0.6, type: "spring", stiffness: 75, duration: 0.1 }}
        >
          <NavLink to="/work" title="View my recent work">
          <ButtonLinkArrow>&#187;</ButtonLinkArrow>Work
          </NavLink>
        </NavItem>
        <NavItem
          as={motion.li}
          animate={{
            y: open ? 0 : 30,
            opacity: open ? 1 : 0,
          }}
          transition={{ delay: open ? 0.7 : 0.4, type: "spring", stiffness: 75, duration: 0.1 }}
        >
          <NavLink to="/resources" title="Great resources for design & code">
          <ButtonLinkArrow>&#187;</ButtonLinkArrow>Resources
          </NavLink>
        </NavItem>
        <NavItem
          as={motion.li}
          animate={{
            y: open ? 0 : 30,
            opacity: open ? 1 : 0,
          }}
          transition={{ delay: open ? 0.6 : 0.2, type: "spring", stiffness: 75, duration: 0.1 }}
        >
          <NavLink to="/about" title="Learn more about me">
          <ButtonLinkArrow>&#187;</ButtonLinkArrow>About
          </NavLink>
        </NavItem>
      </NavItems>
    </Navbar>
  )
}

Nav.propTypes = {
  open: bool.isRequired,
}

export default Nav
