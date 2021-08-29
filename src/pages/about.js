import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  PrimaryHeading,
  Lead,
  Label,
} from "../components/typography"
import Experience from "../components/Experience"
import { blobTransform, blobMovement, blobTransition } from "../components/Blob"

import variables from "../assets/variables"
import screen from "../assets/mediaqueries"
import { transition, fadeUpList, fadeUp } from "../assets/animation"
import { IconGithub, IconLinkedIn, IconMail } from "../assets/icons"

import * as S from "../components/about/styles"

import aboutImage from "../images/daniel-about-me-image-1500.jpg"
import Skills from "../components/about_slices/Skills"
import Education from "../components/Education"

// Styled compontents

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

const BlobWrapper = styled.div`
  position: relative;
  z-index: -1;
`

const Morph = styled.div`
  position: relative;
  z-index: -1;
  min-height: 200px;
  min-width: 200px;
  width: 30rem;
  height: 30rem;

  @media ${screen.medium} {
    width: 40rem;
    height: 40rem;
    right: -15%;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: url(${aboutImage});
    background-size: cover;
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
    perspective: 1000px;
    /* animation: ${blobTransform} 50s ease-in-out infinite both alternate,
      ${blobMovement} 40s ease-in-out infinite both; */
  }
`

// Other settings

const blobAnimation = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: [0.6, 1.04, 0.98, 1],
    times: [0, 0.7, 0.8, 1],
    opacity: 1,
  },
}

// GraphQL
export const query = graphql`
  query AboutPage {
    allPrismicAboutPage {
      edges {
        node {
          data {
            title {
              raw
            }
            sub_title {
              raw
            }
            lead {
              raw
            }
            body {
              ... on PrismicAboutPageBodyExperience {
                id
                items {
                  job_description {
                    raw
                  }
                  job_title {
                    raw
                  }
                  end_date
                  start_date
                  work_place {
                    raw
                  }
                }
                slice_type
              }
              ... on PrismicAboutPageBodyEducation {
                id
                slice_type
                items {
                  end_date
                  start_date
                  university {
                    raw
                  }
                  degree {
                    raw
                  }
                }
              }
              ... on PrismicAboutPageBodySkills {
                id
                slice_type
                primary {
                  heading {
                    text
                  }
                  skills {
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

export default function About({ data }) {
  const prismicContent = data.allPrismicAboutPage.edges.slice(0, 1).pop()
  if (!prismicContent) return null
  const document = prismicContent.node.data

  return (
    <Layout>
      <SEO title="About me" />
      <S.Wrapper>
        <S.Header
          as={motion.header}
          initial="hidden"
          animate="visible"
          variants={fadeUpList}
        >
          <S.HeaderContent>
            <Label
              as={motion.h1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, ...transition }}
            >
              {RichText.asText(document.title.raw)}
            </Label>
            <PrimaryHeading
              as={motion.h2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, ...transition }}
            >
              {RichText.asText(document.sub_title.raw)}
            </PrimaryHeading>
            <Lead
              as={motion.p}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, ...transition }}
            >
              {RichText.asText(document.lead.raw)}
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
                href="mailto:daniel@dtangerfors.se"
              >
                <IconMail /> <span>daniel@dtangerfors.se</span>
              </ContactOption>
            </ContactOptions>
          </S.HeaderContent>
          <BlobWrapper>
            <Morph
              as={motion.div}
              initial="hidden"
              animate="visible"
              variants={blobAnimation}
              transition={blobTransition}
            />
          </BlobWrapper>
        </S.Header>
        <S.FlexWrapper>
          <S.Col60>
          <Label
              key="experience-label"
              as={motion.h2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, ...transition }}
              >Experience</Label>
            <Experience work={document} />
          </S.Col60>
          <S.Col40>
            <div>
              <Label
              key="edu-label"
              as={motion.h2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, ...transition }}
              >Education</Label>
              <Education education={document} />
            </div>

            {document.body.map((slice, sliceIndex) => {
              if (slice.slice_type === "skills") {
                return <Skills data={slice} key={`skill-${sliceIndex}`} />
              }

              return null
            })}
          </S.Col40>
        </S.FlexWrapper>
      </S.Wrapper>
    </Layout>
  )
}
