import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { PrimaryHeading } from "./typography"

// Add staggering effect to the children of the container
export const letterContainerVariants = {
  before: { transition: { staggerChildren: 0.35 } },
  after: {
    transition: { staggerChildren: 0.035, delayChildren: 1.2 },
  },
}

// Variants for animating each letter
export const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 50,
    },
  },
}

const StyledTitleElement = styled(PrimaryHeading)`
  position: relative;
  display: inline-block;
  max-width: 100%;
  word-break: break-word;
  z-index: 10;
`

export const AnimatedTitle = props => {
  const { children } = props

  // const headingRef = useRef();

  // useEffect(() => {
  //   const heading = headingRef.current;
  //   heading.innerHTML = heading.textContent.replace(/[!',.?_]/g, match => {
  //     if (match === '.') {
  //       return `<span class='punctation stop'>${match}</span>`
  //     } else  if (match === ',') {
  //       return `<span class='punctation comma'>${match}</span>`
  //     }  else {
  //       return `<span class='punctation'>${match}</span>`
  //     }
  //   })
  //   //heading.innerHTML = heading.textContent.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "<span class='punctation'>$&</span>");
  // }, []);

  return (
    <StyledTitleElement
      as={motion.h1}
      {...props}
      variants={letterContainerVariants}
      initial={"before"}
      animate={"after"}
      exit={"before"}
      key={children}
      aria-label={children}
      aria-live={"polite"} // dont do this on production if it loops.
    >
      {children.split(" ").map((word, wordI) => (
        <motion.span
          key={`word-${word}-${wordI}`}
          style={{
            position: "relative",
            display: "inline-block",
            width: "auto",
          }} // Position elements
          variants={letterVariants}
        >
          {word === " " ? "\u00A0" : `${word}\u00A0`}
        </motion.span>
      ))}
    </StyledTitleElement>
  )
}
