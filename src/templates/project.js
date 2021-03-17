import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { motion } from "framer-motion"

import screen from "../assets/mediaqueries"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Image, Text, Carousel, Parallax } from "../components/slices"

import { transition, fadeUpList, fadeIn, fadeUp } from "../assets/animation"

import { PrimaryHeading, Paragraph, Lead, Icon } from "../components/typography"

import variables from "../assets/variables"

// Styled Components

const ProjectHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  column-gap: ${variables.padding.xsmall};
  margin-top: calc(${variables.padding.small} * 6);

  @media ${screen.medium} {
    grid-template-columns: repeat(4, 1fr);
    margin-top: ${variables.padding.xlarge};
  }
`

const TitleWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto;
  grid-auto-flow: row;
  column-gap: ${variables.padding.xsmall};

  grid-column-start: 3;
  grid-column-end: 13;

  position: relative;

  @media ${screen.medium} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-start: 1;
    grid-column-end: 5;
    margin-top: auto;
  }
`

const HeaderColumn = styled.div`
  grid-column: span 5;
  align-self: flex-end;

  @media ${screen.medium} {
    grid-column: span 4;
  }
`

const AdditionalInfo = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: ${variables.padding.xlarge};

  @media ${screen.medium} {
    margin-bottom: ${variables.padding.medium};
  }

  & li {
    font-family: ${variables.typography.bodyFont};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${props => props.white ? variables.color.white : variables.color.gray30};

    @media ${screen.darkMode} {
      color: ${variables.color.white};
    }
  }

  & li:not(:last-child)::after {
    content: '|';
    display: inline-block;
    margin: 0 1rem;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: calc(${variables.padding.small} * 20);

  grid-column-start: 1;
  grid-column-end: 13;

  @media ${screen.medium} {
    grid-column-start: 1;
    grid-column-end: 5;
    height: auto;
    margin-right: -${variables.padding.small};
  }
`

const FigureContainer = styled.figure`
  width: 100%;
  height: 100%;
`

const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ProjectBody = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  column-gap: ${variables.padding.xsmall};
  padding: ${variables.padding.xlarge} 0;

  @media ${screen.medium} {
    grid-template-columns: repeat(4, 1fr);
  }
`

// Sort and display the different slice options
const SliceItems = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case "text":
          return <Text slice={slice} key={index} />

        case "image":
          return <Image slice={slice} key={index} />

        case "image_carousel":
          return <Carousel slice={slice} key={index} />

        case "parallax_image":
          return <Parallax slice={slice} key={index} />

        default:
          return
      }
    })()

    return res
  })
}

function DemoLink(props) {
  if (!props.link) {
    return null
  }

  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3, ...transition }}><a href={props.link.url} target="_blank" rel="noopener noreferrer">Demo <Icon className="material-icons">
      open_in_new
      </Icon></a></motion.li>
  )
}

const SingleProjectPage = ({ data }) => {
  const project = data.allPrismicProject.edges.slice(0, 1).pop()
  if (!project) return null

  let {
    title,
    subtitle,
    featured_image,
    excerpt,
    project_demo,
    body,
    categories
  } = project.node.data

  return (

    <Layout>
      <SEO title={RichText.asText(title.raw)} />
      <ProjectHeader>
        <TitleWrap
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeUpList}
        >
          <HeaderColumn>
            <AdditionalInfo
              as={motion.ul}
              variants={fadeUpList}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, ...transition }}>
              <motion.li
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1, ...transition }}>{categories}</motion.li>
              <DemoLink link={project_demo}/>
            
              
            </AdditionalInfo>
            <PrimaryHeading
              as={motion.h1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={transition}
              style={{ paddingBottom: "1.2rem" }}
            >
              {RichText.asText(title.raw)}
            </PrimaryHeading>
            <Lead
              as={motion.p}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, ...transition }}
              style={{ paddingBottom: "3.6rem" }}
            >
              {RichText.asText(subtitle.raw)}
            </Lead>
          </HeaderColumn>
          <HeaderColumn>
            <Paragraph
              as={motion.p}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, ...transition }}
              secondary
            >
              {RichText.asText(excerpt.raw)}
            </Paragraph>
          </HeaderColumn>
        </TitleWrap>
        <ImageContainer
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.1, ...transition }}
        >
          <FigureContainer>
            <FeaturedImage src={featured_image.url} alt={featured_image.alt} />
          </FigureContainer>
        </ImageContainer>
      </ProjectHeader>
      <ProjectBody>{body ? <SliceItems slices={body} /> : null}</ProjectBody>
    </Layout>
  )

}

export const query = graphql`
query SingleProject($uid: String) {
  allPrismicProject(filter: {uid: {eq: $uid}}) {
    edges {
      node {
        data {
          title {
            raw
          }
          subtitle {
            raw
          }
          featured_image {
            alt
            copyright
            url
            thumbnails
          }
          categories
          excerpt {
            raw
          }
          project_demo {
            link_type
            type
          }
          body {
            ... on PrismicProjectBodyText {
              id
              primary {
                text {
                  raw
                }
              }
              slice_label
              slice_type
            }
            ... on PrismicProjectBodyImage {
              id
              primary {
                image {
                  alt
                  copyright
                  url
                  thumbnails
                }
              }
              slice_label
              slice_type
            }
            ... on PrismicProjectBodyImageCarousel {
              id
              items {
                image {
                  alt
                  copyright
                  url
                  thumbnails
                }
              }
              slice_label
              slice_type
            }
            ... on PrismicProjectBodyParallaxImage {
              id
              primary {
                image {
                  alt
                  copyright
                  url
                  thumbnails
                }
              }
              slice_label
              slice_type
            }
          }
        }
        uid
        type
      }
    }
  }
}
`

export default SingleProjectPage
