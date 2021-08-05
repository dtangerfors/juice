import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { lighten, darken } from "polished"

import screen from "../assets/mediaqueries"
import variables from "../assets/variables"

import Hamburger from "./Hamburger"
import Nav from "./Nav"

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: ${variables.color.white};
  border-bottom: 1px solid ${lighten(0.7, variables.color.black)};

  @media ${screen.darkMode} {
    border-color: ${darken(0.5, variables.color.white)};
    background-color: ${variables.color.black};
  }

  @media ${screen.large} {
    padding-left: max(2rem, env(safe-area-inset-left));
    padding-right: max(2rem, env(safe-area-inset-right));
  }
`

const Logo = styled.svg`
  width: 3.6rem;
  fill: ${variables.color.black};

  @media ${screen.small} {
    width: 2.4rem;
  }

  @media ${screen.darkMode} {
    fill: ${variables.color.white};
  }
`

const LogoLink = styled(Link)`
  font-size: 0;
  margin: 0 auto 0 0;
  border-radius: 5rem;
`

const NavItems = styled.div`
  display: flex;
  align-self: stretch;
  margin-right: 2rem;

  @media ${screen.large} {
    display: none;
  }
`

const NavLink = styled(Link)`
  font-family: ${variables.typography.bodyFont};
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${lighten(0.3, variables.color.black)};
  text-decoration: none;
  margin: 0 1rem;
  line-height: 4rem;

  &:hover {
    color: ${variables.color.black};
  }

  @media ${screen.darkMode} {
    color: ${darken(0.3, variables.color.white)};

    &:hover {
      color: ${variables.color.white};
    }
  }
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  return (
    <Navbar>
      <Container>
        <LogoLink to="/">
          <Logo viewBox="0 0 283.5 283.5">
            <path
              d="M237.5,38.2c-57.2-52.4-146.5-48.8-198.9,8c-52.6,56.9-49,146.2,8,198.9l0.1,0.1c28,24.6,60.1,37.1,95.8,37.1
	c11,0,22.3-1.3,34.2-3.8l3-0.6c2.2-0.4,3.6-2.6,3.2-4.8l-1.3-6.1c-0.6-2.2-2.8-3.6-4.9-3.2l-3,0.6c-44.8,9.1-84.2-1-117.2-30.1
	C5.4,187.2,2.3,107.2,49.3,56C96.3,5,176.4,1.9,228,48.9c46.5,42.7,45.6,104,30.7,143.4c-10,26.4-27.1,45.1-41.6,45.5
	c-11.6-0.3-33.9-8.4-55.1-59.7c-0.9-2.2-1.7-4.3-2.6-6.5c0.4-1.3,0.7-2.5,0.9-3.5c0.3-1.3,0.7-3.6,1.4-6.5
	c11-48.2,21.3-106.3,4.3-127.6c-4.5-5.5-10.4-8.4-17.5-8.4c-10.3,0-22.7,8-23,45.9c-0.1,13.8,1.3,29.6,4.2,45.7
	c3,16.6,10.8,44.6,14.4,54.6c-2.6,6.5-7.4,15.5-13,23.8c-9.6,13.9-17.2,18.8-20.9,18.8c-2.8,0-4.8-0.9-6.4-2.6
	c-3.2-3.3-9-13.2-5.8-43.9c1.6-13.8,8.6-25.5,16.3-29.7c2.3-1.3,4.8-1.9,7.4-1.9c2.5,0,5.2,0.6,8.1,1.7c-0.6-2.7-2.9-13.6-3.4-15.9
	c-8.1-1.2-14.6,0.8-19,3.3c-12.2,6.5-21.8,22.2-23.8,40.8c-2.9,28.5,0.9,45.6,9.5,55.2c4.3,4.8,10.3,7.4,17.1,7.4
	c12.6,0,24.8-13.6,32.7-25.1c3-4.5,5.9-9.1,8.4-13.8c22.6,50.7,48,62,65.6,62.3h0.1h0.1c20.9-0.4,42.4-22,54.9-54.9
	C288.5,153.7,289.4,85.9,237.5,38.2z M150.5,144.4c-6.8-24.9-10.7-51.3-10.6-72.7c0.3-23,5.4-31.6,8.5-31.6c2.6,0,4.5,0.9,6.1,2.9
	C165.5,56.8,159.2,103.1,150.5,144.4z"
            />
          </Logo>
          {siteTitle}
        </LogoLink>
        <NavItems>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavItems>
        <Hamburger open={open} setOpen={setOpen} />
      </Container>

      <Nav open={open} setOpen={setOpen} />
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
