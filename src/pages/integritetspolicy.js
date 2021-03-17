import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import { Helmet } from "react-helmet"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import variables from "../assets/variables"

import { linkResolver } from "../utils/linkResolver"
import htmlSerializer from "../utils/htmlSerializer"

import { PrimaryHeading } from "../components/typography"

import { Content } from "../components/containers"

// Styled Components
const TextWrapper = styled.header`
  position: relative;
  z-index: 2;
  max-width: 80rem;
  margin: 0 auto;
`
const PaddedContent = styled(Content)`
  padding: ${variables.padding.xlarge} 0 ${variables.padding.large};
`

// Query

export const query = graphql`
query PrivacyPolicyPage {
  allPrismicPrivacyPolicy {
    edges {
      node {
        data {
          page_title {
            html
            text
            raw
          }
          page_content {
            html
            text
            raw
          }
        }
      }
    }
  }
}
`

const PrivacyPolicyPage = ({ data }) => {
  const prismicContent = data.allPrismicPrivacyPolicy.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node.data

  return (
    <Layout center>
      <SEO title="Integritetspolicy" />
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/xgf4jbu.css" />
      </Helmet>
      <PaddedContent>
        <TextWrapper>
          <PrimaryHeading>
            {RichText.asText(document.page_title.raw)}
          </PrimaryHeading>
          <div>
            {RichText.render(document.page_content.raw, linkResolver, htmlSerializer)}
          </div>
        </TextWrapper>
      </PaddedContent>
    </Layout>
  )
}

export default PrivacyPolicyPage
