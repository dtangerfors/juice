import React from "react"
import { graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import { motion, AnimatePresence } from "framer-motion"

import { Helmet } from "react-helmet"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import variables from "../assets/variables"
import {transition, fadeUpList, fadeUp} from "../assets/animation"

import { PrimaryHeading, Paragraph } from "../components/typography"

import Blob from "../components/Blob"
import Button, {ButtonOutlined, ButtonWrapper, ButtonInnerWrap } from "../components/Button"
import { Content } from "../components/containers"

import meta_card from "../images/juice-meta-card.jpg"

// Styled Components
const TextWrapper = styled.header`
  position: relative;
  z-index: 2;
  max-width: 110rem;
  margin: 0 auto;
`
const PaddedContent = styled(Content)`
  padding: ${variables.padding.xlarge} 0 ${variables.padding.large};
`

// Query 

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            title
            excerpt
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => {

  const prismicContent = data.prismic.allHomepages.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node

  
  return (
  <Layout center>
    <SEO title="Frontend developer based in Stockholm" />
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/xgf4jbu.css"/>
      <meta property="og:image" content={meta_card}></meta>
      <meta property="twitter:image" content={meta_card}></meta>
      </Helmet>
    <AnimatePresence>
    <PaddedContent>
      <TextWrapper>
        <PrimaryHeading
          as={motion.h1}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeUp}
          transition={{ delay: 1, ...transition }}
        >
          {RichText.asText(document.title)}
        </PrimaryHeading>
        <Paragraph
          style={{
            fontSize: "2.4rem",
            lineHeight: "3.6rem",
          }}
          as={motion.p}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeUp}
          transition={{ delay: 1.2, ...transition }}
        >{RichText.asText(document.excerpt)}
        </Paragraph>
      </TextWrapper>
      <ButtonWrapper
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={fadeUpList}
      >
        <ButtonInnerWrap as={motion.div} variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.7, ...transition }}>
          <Button title="Projects" href="/work" />
        </ButtonInnerWrap>

        <ButtonInnerWrap as={motion.div} variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.8, ...transition }}>
          <ButtonOutlined title="Calendars" href="/almanacka" />
        </ButtonInnerWrap>
      </ButtonWrapper>
      <Blob />
    </PaddedContent>
    </AnimatePresence>
  </Layout>
)}

export default IndexPage
