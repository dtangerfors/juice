import React, { Component, Fragment } from "react"
import styled from "styled-components"
import Slider from "react-slick";

import '../../assets/slick.css'

import variables from "../../assets/variables"
import screen from "../../assets/mediaqueries"

const SectionBlock = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 13;
  padding: ${variables.padding.large} 0;

  @media ${screen.medium} {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`

const Figure = styled.figure`
    width: 100%;
    padding-right: ${variables.padding.medium};
    display: inline-block;
    vertical-align: top;
`

const Image = styled.img`
    width: 100%;
`

export default class Carousel extends Component {

  render() {
    const items = this.props.slice
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const CarouselItems = items.fields.map((image, index) => (
      <Fragment key={index}>
          <Figure><Image src={image.image.url} alt={image.alt} /></Figure>
      </Fragment>
    ))

    return (
      <SectionBlock ref={el => (this.container = el)}>
        <Slider {...settings}>{CarouselItems}</Slider>
      </SectionBlock>
    )
  }
}
