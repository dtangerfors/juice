import React from "react"
import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { bool } from "prop-types"

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
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(70deg, #ae5ae0, #ff5978, #ffcb00, #ff5500);
  background-size: 200%;
  background-position: center left;
  animation: ${bgMovement} 80s ease-in-out infinite both alternate;
  transform: translateY(-100%);
`

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  max-width: 160rem;
  width: 100%;
  padding: ${variables.padding.xlarge} ${variables.padding.large} 0;

  @media ${screen.xLarge} {
    padding: ${variables.padding.xlarge} ${variables.padding.medium} 0;
  }

  @media ${screen.large} {
    padding: 15rem ${variables.padding.small} 0;
  }

`

const NavItem = styled.li`
  position: relative;
  padding: 0;
  margin-bottom: ${variables.padding.medium};
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,.5);
  padding: ${variables.padding.xsmall} 0;

  @media ${screen.darkMode} {
    border-bottom: 1px solid rgba(255,255,255,.5);
  }
`

const NavLink = styled(Link)`
  display: block;
  font-family: ${variables.typography.titleFont};
  font-weight: 400;
  font-size: clamp(3rem, 5vw, 4rem); 
  line-height: 1;
  color: ${props =>
    props.white ? variables.color.white : variables.color.black};
  padding: 0;
  text-decoration: none;

  @media ${screen.darkMode} {
    color: ${variables.color.white};
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
      transition={{ delay: open ? 0 : 0.8, type: "tween", duration: 0.4 }}
    >
      <NavItems>
        <NavItem
          as={motion.li}
          animate={{
            y: open ? 0 : 30,
            opacity: open ? 1 : 0,
          }}
          transition={{ delay: open ? 0.7 : 0.4, type: "spring", stiffness: 75, duration: 0.1 }}
        >
          <NavLink to="/work" title="View my recent work">
          <ButtonLinkArrow>&rarr;</ButtonLinkArrow>Work
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
          <ButtonLinkArrow>&rarr;</ButtonLinkArrow>About
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
