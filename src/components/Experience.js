import React from "react"
import styled from "styled-components"
import moment from "moment"
import { motion } from "framer-motion"

import { RichText, Date } from "prismic-reactjs"

import { TertiaryHeading, Paragraph } from "../components/typography"
import { transition, fadeUpList, fadeUpItem } from "../assets/animation"

import variables from "../assets/variables"
import screen from "../assets/mediaqueries"

const ExperienceList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-column-start: 1;
  grid-column-end: 13;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-flow: row;
  column-gap: ${variables.padding.xsmall};

  @media ${screen.medium} {
    grid-column-end: 5;
    grid-template-columns: repeat(4, 1fr);
  }
`

const ExperienceItem = styled.li`
  width: 100%;

  @media ${screen.medium} {
    grid-column: span 2;
  }

  @media ${screen.small} {
    grid-column: span 4;
  }

  &:not(:last-child) {
    margin-bottom: 4.8rem;
  }
`

function startDate(date) {
  const start_date = Date(date).toString()

  const formatted_date = moment(start_date).format("MMM YYYY")

  return formatted_date
}

function endDate(date) {
  if (date === null) {
    return "Present"
  } else {
    const end_date = Date(date).toString()

    const formatted_date = moment(end_date).format("MMM YYYY")

    return formatted_date
  }
}

export default ({ work }) => {
  const jobList = work

  if (!jobList) return null

  const workContent = jobList.body.map((slice, index, i) => {
    if (slice.type === "experience") {
      const jobItem = slice.fields.map((job, jobIndex) => (
        <ExperienceItem
          key={`job-item-${jobIndex}`}
          variants={fadeUpItem}
          as={motion.li}
          custom={i}
          initial="hidden"
          animate="visible"
          transition={transition}
        >
          <TertiaryHeading>
            {RichText.asText(job.job_title)} &mdash;{" "}
            {RichText.asText(job.work_place)}
          </TertiaryHeading>
          <Paragraph secondary>
            {RichText.asText(job.job_description)}
          </Paragraph>
          <Paragraph>
            {startDate(job.start_date)} &mdash; {endDate(job.end_date)}
          </Paragraph>
        </ExperienceItem>
      ))
      return (
        <ExperienceList
          key={`experience-${index}`}
          as={motion.ul}
          initial="hidden"
          animate="visible"
          variants={fadeUpList}
        >
          {jobItem}
        </ExperienceList>
      )
    }
    return null
  })

  return <>{workContent}</>
}
