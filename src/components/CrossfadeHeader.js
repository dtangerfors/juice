import React, { Component } from "react"
import styled from "styled-components"

import header_gotland from "../images/preview-gotland.jpg"
import header_faro from "../images/preview-faro.jpg"
import header_gotland_small from "../images/preview-gotland-800.jpg"
import header_faro_small from "../images/preview-faro-800.jpg"

const StyledImg = styled.picture`
  width: 100%;
  position: relative;
  z-index: 1;

  & img {
    width: 100%;
  }

  & source {
    width: 100%;
  }
`

export default class CrossfadeHeader extends Component {
  constructor(props) {
    super(props)
    this.switchImage = this.switchImage.bind(this)
    this.state = {
      currentImage: 0,
      image: [
        { desktop: header_gotland, mobile: header_gotland_small },
        { desktop: header_faro, mobile: header_faro_small },
      ],
    }
  }

  switchImage() {
    if (this.state.currentImage < this.state.image.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      })
    } else {
      this.setState({
        currentImage: 0,
      })
    }
    return this.currentImage
  }

  componentDidMount() {
    setInterval(this.switchImage, 5000)
  }

  render() {

    let {currentImage, image} = this.state

    return (
      <StyledImg>
        <source media="(max-width: 768px)" srcSet={image[currentImage].mobile} />
        <img src={image[currentImage].desktop} alt="Almanacka 2021" />
      </StyledImg>
    )
  }
}
