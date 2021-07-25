import React from "react"
import styled from "styled-components"
import { bool, func } from "prop-types"
import screen from "../assets/mediaqueries"
import variables from "../assets/variables"
import { motion } from "framer-motion"

const Burger = styled.button`
  position: relative;
  appearance: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
  border: none;
  font-family: ${variables.typography.titleFont};
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${variables.color.black};
  cursor: pointer;
  transform: all 0.2s ease;

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }

  & span {
    position: relative;
    top: 1px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    transition: all 0.2s ease;

    &::after,
    &::before {
      width: 100%;
      height: 1px;
      content: "";
      top: 0;
      transform: translateY(-50%);
      position: absolute;
      display: block;
      background-color: ${variables.color.black};
      transition: ${({ open }) => open ? 'all 0.6s ease' : 'all 0.2s ease'};

      @media ${screen.darkMode} {
        background-color: ${variables.color.white};
      }
    }

    &::before {
      top: ${({ open }) => open ? '50%' : '6px'};
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &::after {
      top: ${({ open }) => open ? '50%' : '14px'};
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  &:hover span::before {
    top: ${({ open }) => open ? '50%' : '8px'};
    transform: ${({ open }) => open ? 'rotate(-135deg)' : 'rotate(0)'};
    transition: ${({ open }) => open ? 'all 0.6s ease' : 'all 0.2s ease'};
  }

  &:hover span::after {
    top: ${({ open }) => open ? '50%' : '12px'};
    transform: ${({ open }) => open ? 'rotate(135deg)' : 'rotate(0)'};
    transition: ${({ open }) => open ? 'all 0.6s ease' : 'all 0.2s ease'};
  }
`

const Hamburger = ({ open, setOpen }) => {
  return (
    <Burger as={motion.button} key="hamburger" open={open} onClick={() => setOpen(!open)}>
      Menu <span></span>
    </Burger>
  )
}

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Hamburger
