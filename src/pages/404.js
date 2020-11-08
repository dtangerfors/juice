import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Blob from "../components/Blob"

import { PrimaryHeading, Paragraph } from "../components/typography"


const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <TextWrapper>
      <PrimaryHeading>404 Not found</PrimaryHeading>
      <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
    </TextWrapper>
    <Blob/>
  </Layout>
)

export default NotFoundPage
