import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectSection from "../components/Project"
import { transition, fadeUp } from "../assets/animation"

import {
  PrimaryHeading
} from "../components/typography"
import {
  HeaderWrapper
} from "../components/containers"

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
        url
      }
    }
  }
}
`

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
