import React from "react"
import styled from "styled-components"
import moment from "moment"
import { motion } from "framer-motion"

import { RichText, Date } from "prismic-reactjs"

import { Information, QuarternaryHeading } from "./typography"
import { transition, fadeUpList, fadeUpItem } from "../assets/animation"

import variables from "../assets/variables"

const EducationList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${variables.padding.small};
  grid-column: span 8;
`

const EducationItem = styled.li`
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

export default ({ education }) => {

  if (!education) return null

  const educationContent = education.body.map((slice, index) => {
    if (slice.slice_type === "education") {
      return (
        <EducationList
          key={`Education-${index}`}
          as={motion.ul}
          initial="hidden"
          animate="visible"
          variants={fadeUpList}
        >
          {slice.items.map((job, jobIndex) => (
        <EducationItem
          key={`job-item-${jobIndex}`}
          variants={fadeUpItem}
          as={motion.li}
          custom={jobIndex}
          initial="hidden"
          animate="visible"
          transition={transition}
        >
          <QuarternaryHeading as="h3">
            {RichText.asText(job.degree.raw)}{", "}
            {RichText.asText(job.university.raw)}
          </QuarternaryHeading>
          <Information>
            {startDate(job.start_date)} &mdash; {endDate(job.end_date)}
          </Information>
        </EducationItem>
      ))}
        </EducationList>
      )
    }
    return null
  })

  return <>{educationContent}</>
}
