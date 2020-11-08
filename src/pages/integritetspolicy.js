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
  {
    prismic {
      allPrivacy_policys {
        edges {
          node {
            page_content
            page_title
          }
        }
      }
    }
  }
`

const PrivacyPolicyPage = ({ data }) => {
  const prismicContent = data.prismic.allPrivacy_policys.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node

  return (
    <Layout center>
      <SEO title="Integritetspolicy" />
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/xgf4jbu.css" />
      </Helmet>
      <PaddedContent>
        <TextWrapper>
          <PrimaryHeading>
            {RichText.asText(document.page_title)}
          </PrimaryHeading>
          <div>
            {RichText.render(document.page_content, linkResolver, htmlSerializer)}
          </div>
        </TextWrapper>
      </PaddedContent>
    </Layout>
  )
}

export default PrivacyPolicyPage
