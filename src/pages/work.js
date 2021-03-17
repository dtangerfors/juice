import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { motion } from "framer-motion"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import variables from "../assets/variables"
import screen from "../assets/mediaqueries"
import { transition, fadeUpList, fadeUp, fadeUpItem } from "../assets/animation"

import {
  PrimaryHeading,
  Paragraph
} from "../components/typography"
import {
  HeaderWrapper
} from "../components/containers"


const WorkWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-auto-flow: row;
  column-gap: ${variables.padding.small};
  row-gap: ${variables.padding.medium};

  @media ${screen.medium} {
    grid-template-columns: repeat(4, 1fr);
  }
`
const Work = styled(motion.div)`
  position: relative;
  display: block;
  grid-column: span 4;
  text-decoration: none;

  @media ${screen.medium} {
    grid-column: span 2;
  }

  @media ${screen.small} {
    grid-column: span 4;
  }
`

const WorkLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 0;

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

  padding: ${variables.padding.small} 0 0;

  @media ${screen.darkMode} {
    color: ${variables.color.white};
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
`

const ComingSoon = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: .5rem .8rem;
  background-color: ${variables.color.black};
  color: ${variables.color.white};
  font-family: ${variables.typography.bodyFont};
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: .05em;
`


// Query
export const query = graphql`
{
  allPrismicProject {
    edges {
      node {
        data {
          title {
            raw
          }
          subtitle {
            raw
          }
          thumbnail {
            alt
            copyright
            url
            thumbnails
          }
          work_in_progress
        }
        id
        uid
        type
      }
    }
  }
}
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
        <Title><ButtonLinkArrow>&rarr;</ButtonLinkArrow>{RichText.asText(project.data.title.raw)}</Title>
        <Subtitle>{RichText.asText(project.data.subtitle.raw)}</Subtitle>
      </div>
    )
  } else {
    return (
      <WorkLink to={project.uid}>
        <Figure>
          <WorkImage
            alt={project.data.thumbnail.alt}
            src={project.data.thumbnail.url}
          />
        </Figure>
        <Title><ButtonLinkArrow>&rarr;</ButtonLinkArrow>{RichText.asText(project.data.title.raw)}</Title>
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
      initial="hidden"
      animate="visible"
      variants={fadeUpList}
    >
      {projects.map((project, i) => {
        return (
          <Work
            variants={fadeUpItem}
            custom={i}
            initial="hidden"
            animate="visible"
            transition={transition}
            key={i}
          >
          <Project project={project.node} />
          </Work>
        )
      })}
    </WorkWrapper>
  )
}

const WorkPage = ({ data }) => {
  const projects = data.allPrismicProject.edges
  if (!projects) return null

  return (
    <Layout>
      <SEO title="Selected works" />
      <HeaderWrapper>
        <PrimaryHeading
          as={motion.h1}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeUp}
          transition={{ delay: 0.3, ...transition }}
        >
          Selected works
        </PrimaryHeading>
      </HeaderWrapper>
      <ProjectSection projects={projects} />
    </Layout>
  )
}

export default WorkPage
