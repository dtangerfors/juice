import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  PrimaryHeading,
  SecondaryHeading,
  Lead,
} from "../components/typography"
import Experience from "../components/Experience"
import { blobTransform, blobMovement, blobTransition } from "../components/Blob"

import variables from "../assets/variables"
import screen from "../assets/mediaqueries"
import { transition, fadeUpList, fadeUp } from "../assets/animation"
import { IconGithub, IconLinkedIn, IconMail } from "../assets/icons"

import aboutImage from "../images/daniel-about-me-image-1500.jpg"

const AboutWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: ${variables.padding.xsmall};
  margin: ${variables.padding.xlarge} 0 ${variables.padding.medium};

  @media ${screen.medium} {
    grid-template-columns: repeat(4, 1fr);
    margin-top: ${variables.padding.xlarge};
  }
`

// Styled compontents

const AboutHeader = styled.header`
  grid-column-start: 1;
  grid-column-end: 7;
  text-align: left;

  @media ${screen.medium} {
    grid-column-end: 5;
    position: relative;
    top: ${variables.padding.xlarge};
  }
`

const ContactOptions = styled.address`
  font-style: normal;
  display: flex;
  flex-wrap: wrap;
  grid-column-start: 1;
  grid-column-end: 7;
`

const ContactOption = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${variables.color.black};
  text-decoration: none;
  transition: all 0.2s ease;

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }

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

  &:active {
    background: linear-gradient(90deg, #ae5ae0, #ff5978, #ffcb00, #ff5500);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.2s ease;
  }

  & span {
    padding-left: 1rem;
  }

  &:not(:last-child) {
    margin-right: ${variables.padding.small};
  }
`

const PageTitle = styled(PrimaryHeading)`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const BlobWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`

const Morph = styled.div`
  position: absolute;
  transform: translate(0, -50%);
  top: 30%;
  right: -20vh;
  z-index: -1;
  min-height: 200px;
  min-width: 200px;
  width: 90vh;
  height: 90vh;

  @media ${screen.medium} {
    width: 65vh;
    height: 65vh;
    top: 7%;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: url(${aboutImage});
    background-size: cover;

    transform-origin: 50% 50%;
    transform-style: preserve-3d;
    perspective: 1000px;
    animation: ${blobTransform} 50s ease-in-out infinite both alternate,
      ${blobMovement} 40s ease-in-out infinite both;
  }
`

const SectionHeader = styled.header`
  grid-column-start: 1;
  grid-column-end: 13;
  border-bottom: 1px solid ${variables.color.black};
  margin-bottom: ${variables.padding.medium};

  @media ${screen.medium} {
    grid-column-end: 5;
  }

  @media ${screen.darkMode} {
    border-bottom: 1px solid ${variables.color.white};
  }
`

// Other settings

const blobAnimation = {
  hidden: { scale: 0.6, y: "-50%", opacity: 0 },
  visible: {
    scale: [0.6, 1.04, 0.98, 1],
    times: [0, 0.7, 0.8, 1],
    y: "-50%",
    opacity: 1,
  },
}

// GraphQL
export const query = graphql`
  query AboutPageQuery {
    prismic {
      allAbout_pages {
        edges {
          node {
            body {
              ... on PRISMIC_About_pageBodyExperience {
                type
                fields {
                  job_title
                  work_place
                  job_description
                  start_date
                  end_date
                }
              }
              ... on PRISMIC_About_pageBodyEducation {
                type
                fields {
                  degree
                  university
                  start_date
                  end_date
                }
              }
            }
            lead
            sub_title
            title
          }
        }
      }
    }
  }
`

export default function About({ data }) {
  const about = data.prismic.allAbout_pages.edges.slice(0, 1).pop()

  if (!about) return null

  return (
    <Layout>
      <SEO title="About me" />
      <BlobWrapper>
        <Morph
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={blobAnimation}
          transition={blobTransition}
        />
      </BlobWrapper>
      <AboutWrapper>
        <AboutHeader
          as={motion.header}
          initial="hidden"
          animate="visible"
          variants={fadeUpList}
        >
          <PageTitle
            as={motion.h1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, ...transition }}
          >
            This is me / {RichText.asText(about.node.title)}
          </PageTitle>
          <PrimaryHeading
            as={motion.h2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, ...transition }}
          >
            {RichText.asText(about.node.sub_title)}
          </PrimaryHeading>
          <Lead
            as={motion.p}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, ...transition }}
          >
            {RichText.asText(about.node.lead)}
          </Lead>
          <ContactOptions
            as={motion.address}
            variants={fadeUpList}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, ...transition }}
          >
            <ContactOption
              as={motion.a}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, ...transition }}
              href="https://github.com/dtangerfors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub /> <span>@dtangerfors</span>
            </ContactOption>
            <ContactOption
            as={motion.a}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, ...transition }}
              href="https://www.linkedin.com/in/daniel-t%C3%A4ngerfors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedIn /> <span>Daniel Tängerfors</span>
            </ContactOption>
            <ContactOption
            as={motion.a}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, ...transition }}
             href="mailto:daniel@dtangerfors.se">
              <IconMail /> <span>daniel@dtangerfors.se</span>
            </ContactOption>
          </ContactOptions>
        </AboutHeader>
      </AboutWrapper>
      <AboutWrapper>
        <SectionHeader>
          <SecondaryHeading>Experience</SecondaryHeading>
        </SectionHeader>
        <Experience work={about.node} />
      </AboutWrapper>
    </Layout>
  )
}
