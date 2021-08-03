import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { motion, AnimatePresence } from "framer-motion"

import { Helmet } from "react-helmet"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import variables from "../assets/variables"
import screen from "../assets/mediaqueries"
import { transition, fadeUp } from "../assets/animation"

import { Paragraph } from "../components/typography"

import Blob from "../components/Blob"
import { Content } from "../components/containers"
import { AnimatedTitle } from "../components/AnimatedTitle"
import ProjectSection from "../components/Project"

import meta_card from "../images/juice-meta-card.jpg"
import CalendarSection from "../components/CalendarSection"

// Styled Components
const Header = styled.header`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  padding: 4vw 0;
  margin: 0 auto;

  @media ${screen.small} {
    min-height: 80vh;
  }
`
const TextWrapper = styled.div`
  grid-column: 5 / 13;
  padding: ${variables.padding.xlarge} 0;

  @media ${screen.medium} {
    grid-column: span 12;
    padding: ${variables.padding.medium} 0;
  }
`

// Query

export const query = graphql`
  {
    allPrismicHomepage {
      edges {
        node {
          data {
            title {
              raw
            }
            excerpt {
              raw
            }
          }
        }
      }
    }
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
            categories
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

const IndexPage = ({ data }) => {

  const prismicContent = data
  if (!prismicContent) return null
  const homepage = prismicContent.allPrismicHomepage.edges[0].node.data
  const projects = prismicContent.allPrismicProject.edges

  return (
    <Layout center>
      <SEO title="Frontend developer based in Stockholm" />
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/xgf4jbu.css" />
        <meta property="og:image" content={meta_card}></meta>
        <meta property="twitter:image" content={meta_card}></meta>
      </Helmet>
      <AnimatePresence>
        <Header>
          <AnimatedTitle>{RichText.asText(homepage.title.raw)}</AnimatedTitle>
        </Header>
        <Blob />
        <Content>
          <TextWrapper>
            <Paragraph
              key="index-p-1"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                lineHeight: "1.6em",
              }}
              as={motion.p}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeUp}
              transition={{ delay: 1.2, ...transition }}
            >
              {RichText.asText(homepage.excerpt.raw)}
            </Paragraph>
          </TextWrapper>
        </Content>
        <Content>
          <ProjectSection projects={projects} />
        </Content>
        <Content>
          <CalendarSection />
        </Content>
      </AnimatePresence>
    </Layout>
  )
}

export default IndexPage
