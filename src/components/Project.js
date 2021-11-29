import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import { motion } from "framer-motion"
import { lighten, darken } from "polished"

import variables from "../assets/variables"
import screen from "../assets/mediaqueries"
import { transition, fadeUpList, fadeUpItem } from "../assets/animation"

import { Paragraph } from "./typography"

const WorkWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-auto-flow: row;
  column-gap: ${variables.padding.xsmall};
  row-gap: ${variables.padding.medium};
  grid-column: span 12;

  @media ${screen.medium} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${screen.small} {
    column-gap: 1rem;
  }
`

const Work = styled(motion.div)`
  position: relative;
  display: block;
  grid-column: span 4;
  text-decoration: none;

  &:first-child {
    grid-column: span 8;
    grid-row: span 2;
  }

  @media ${screen.medium} {
    grid-column: span 2;

    &:first-child {
      grid-column: span 4;
      grid-row: span 1;
    }
  }


`

const WorkLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 0;
  padding: 0 0 ${variables.padding.xsmall};
  border-bottom: 1px solid ${lighten(0.7, variables.color.black)};

  @media ${screen.darkMode} {
    border-color: ${darken(0.5, variables.color.white)};
  }

  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    box-shadow: none;
  }
`
const Figure = styled.figure`
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 0;
`
const WorkImage = styled.img`
  width: 100%;
  font-size: 0;
  line-height: 1;
`
const Title = styled.h2`
  font-family: ${variables.typography.titleFont};
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.4rem;
  color: ${variables.color.black};

  padding: ${variables.padding.xsmall} 0 .5rem;

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }

  @media ${screen.small} {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
`
const ButtonLinkArrow = styled.span`
  position: relative;
  margin-left: -2rem;
  opacity: 0;
  margin-right: 1rem;

  ${WorkLink}:hover &,
  ${WorkLink}:active &,
  ${WorkLink}:focus & {
    margin-left: 0;
    opacity: 1;
  }
`
const Subtitle = styled(Paragraph)`
  font-size: 1.4rem;
  line-height: 1.4em;
  padding: 0 .5rem 0 0;
`
const ComingSoon = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 0.5rem 0.8rem;
  background-color: ${variables.color.black};
  color: ${variables.color.white};
  font-family: ${variables.typography.bodyFont};
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const Project = ({ project }) => {
  if (project.data.work_in_progress) {
    return (
      <div>
        <Figure>
          <WorkImage
            alt={project.data.thumbnail.alt}
            src={project.data.thumbnail.url}
          />
          <ComingSoon>Coming Soon</ComingSoon>
        </Figure>
        <Title>
          <ButtonLinkArrow>&#187;</ButtonLinkArrow>
          {RichText.asText(project.data.title.raw)}
        </Title>
        <Subtitle>{RichText.asText(project.data.subtitle.raw)}</Subtitle>
      </div>
    )
  } else {
    return (
      <WorkLink to={project.url}>
        <Figure>
          <WorkImage
            alt={project.data.thumbnail.alt}
            src={project.data.thumbnail.url}
          />
        </Figure>
        <Title>
          <ButtonLinkArrow>&#187;</ButtonLinkArrow>
          {RichText.asText(project.data.title.raw)}
        </Title>
        <Subtitle>{RichText.asText(project.data.subtitle.raw)}</Subtitle>
      </WorkLink>
    )
  }
}

const ProjectSection = ({ projects }) => {
  if (!projects) return null

  return (
    <WorkWrapper
      as={motion.div}
      key="work-wrapper"
      initial="hidden"
      animate="visible"
      variants={fadeUpList}
    >
      {projects
        .filter(project => project.node.data.categories === "Development")
        .map((project, i) => {
        return (
          <Work
            variants={fadeUpItem}
            custom={i}
            initial="hidden"
            animate="visible"
            transition={transition}
            key={`project-${i}`}
          >
            <Project project={project.node} />
          </Work>
        )
      })}
    </WorkWrapper>
  )
}

export default ProjectSection
