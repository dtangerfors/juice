import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { motion } from "framer-motion"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import variables from "../assets/variables"
import screen from "../assets/mediaqueries"
import { transition, fadeUp, fadeUpItem, fadeUpList } from "../assets/animation"

import {
  PrimaryHeading,
  SecondaryHeading,
  TertiaryHeading,
  Paragraph,
} from "../components/typography"
import { HeaderWrapper } from "../components/containers"

// Styled Components

const Section = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-auto-flow: row;
  column-gap: ${variables.padding.small};
  row-gap: ${variables.padding.medium};
  padding-bottom: ${variables.padding.large};

  @media ${screen.medium} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SectionTitle = styled(SecondaryHeading)`
  grid-column: span 3;
  border-bottom: 1px solid ${variables.color.black};

  @media ${screen.medium} {
    grid-column: span 1;
  }

  @media ${screen.darkMode} {
    border-bottom: 1px solid ${variables.color.white};
  }
`

const ExtLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: -webkit-linear-gradient(
      0deg,
      #ae5ae0,
      #ff5978,
      #ffcb00,
      #ff5500
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.2s ease;
  }

  & span {
    vertical-align: bottom;
    font-size: .6em;
    margin-left: .5em;
  }
`

const Article = styled(motion.article)`
  position: relative;
  display: block;
  text-decoration: none;

  @media ${screen.medium} {
    grid-column: span 1;
  }
`

// Query
export const query = graphql`
  query ResourcePage {
    allPrismicResources {
      edges {
        node {
          data {
            title {
              raw
            }
            lead {
              raw
            }
            body {
              ... on PrismicResourcesBodyResourceItem {
                primary {
                  category_title {
                    raw
                  }
                }
                slice_type
                items {
                  item_desc {
                    raw
                  }
                  item_link {
                    url
                  }
                  item_title {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const ResourceItems = ({ items }) => {
  return items.map((resource, i) => (
    <Article
      variants={fadeUpItem}
      custom={i}
      initial="hidden"
      animate="visible"
      transition={transition}
      key={i}
    >
      <TertiaryHeading>
        <ExtLink href={resource.item_link.url} target="_blank" rel="noopener noreferrer">
          {RichText.asText(resource.item_title.raw)} <span class="material-icons md-18">
open_in_new
</span>
        </ExtLink>
      </TertiaryHeading>
      <Paragraph>{RichText.asText(resource.item_desc.raw)}</Paragraph>
    </Article>
  ))
}

const ResourceContent = ({ resources }) => {
  if (!resources) return null

  return (
    <div>
      {resources.map((resource, i) => {
        return (
          <Section
            key={i}
            initial="hidden"
            animate="visible"
            variants={fadeUpList}
          >
            <SectionTitle
              as={motion.h2}
              variants={fadeUpItem}
              custom={i}
              initial="hidden"
              animate="visible"
              transition={transition}
            >
              {RichText.asText(resource.primary.category_title.raw)}
            </SectionTitle>
            <ResourceItems items={resource.items} />
          </Section>
        )
      })}
    </div>
  )
}

const ResourcePage = ({ data }) => {
  const prismicContent = data.allPrismicResources.edges.slice(0, 1).pop()
  if (!prismicContent) return null

  let { title, lead, body } = prismicContent.node.data

  return (
    <Layout>
      <SEO title={RichText.asText(title.raw)} />
      <HeaderWrapper>
        <PrimaryHeading
          as={motion.h1}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeUp}
          transition={{ delay: 0.3, ...transition }}
        >
          {RichText.asText(title.raw)}
        </PrimaryHeading>
        <Paragraph
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
            lineHeight: "1.6em",
          }}
          as={motion.p}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeUp}
          transition={{ delay: 0.4, ...transition }}
        >
          {RichText.asText(lead.raw)}
        </Paragraph>
      </HeaderWrapper>
      <ResourceContent resources={body} />
    </Layout>
  )
}

export default ResourcePage
