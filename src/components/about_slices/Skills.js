import React from "react"
import styled from "styled-components"
import { Label } from "../typography"
import { motion } from "framer-motion"

import screen from "../../assets/mediaqueries"
import variables from "../../assets/variables"
import { transition, fadeUp} from "../../assets/animation"

const Wrapper = styled.div`
  position: relative;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  font-family: ${variables.typography.bodyFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  max-width: 70ch;
  color: ${props =>
    props.white ? variables.color.white : variables.color.gray30};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

export default function Skills({ data }) {
  if (!data) return null

  return (
    <Wrapper>
      <Label
              key={`${data.primary.heading.text}-label`}
              as={motion.h2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, ...transition }}
              >{data.primary.heading.text}</Label>
      <List
      key={`${data.primary.heading.text}-list`}
      as={motion.ul}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3, ...transition }}
      >
        {data.primary.skills.raw.map((skill, skillIndex) => (
          <Item key={`skill-${skillIndex}`}>{skill.text}</Item>
        ))}
      </List>
    </Wrapper>
  )
}
