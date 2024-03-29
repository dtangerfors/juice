import React from "react"
import styled from "styled-components"
import moment from "moment"
import { motion } from "framer-motion"

import { RichText, Date } from "prismic-reactjs"

import { Paragraph, Information, QuarternaryHeading } from "../components/typography"
import { transition, fadeUpList, fadeUpItem } from "../assets/animation"

import variables from "../assets/variables"

const ExperienceList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${variables.padding.small};
  grid-column: span 8;
`

const ExperienceItem = styled.li`
  width: 100%;

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

  const workContent = jobList.body.map((slice, index) => {
    if (slice.slice_type === "experience") {
      return (
        <ExperienceList
          key={`experience-${index}`}
          as={motion.ul}
          initial="hidden"
          animate="visible"
          variants={fadeUpList}
        >
          {slice.items.map((job, jobIndex) => (
        <ExperienceItem
          key={`job-item-${jobIndex}`}
          variants={fadeUpItem}
          as={motion.li}
          custom={jobIndex}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, ...transition }}
        >
          <QuarternaryHeading as="h3">
            {RichText.asText(job.job_title.raw)} &mdash;{" "}
            {RichText.asText(job.work_place.raw)}
          </QuarternaryHeading>
          <Paragraph secondary style={{paddingBottom: '.4em'}}>
            {RichText.asText(job.job_description.raw)}
          </Paragraph>
          <Information>
            {startDate(job.start_date)} &mdash; {endDate(job.end_date)}
          </Information>
        </ExperienceItem>
      ))}
        </ExperienceList>
      )
    }
    return null
  })

  return <>{workContent}</>
}
