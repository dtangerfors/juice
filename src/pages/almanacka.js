import React from "react";
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { SecondaryHeading, Paragraph, Information } from "../components/typography"
import OrderForm from "../components/OrderForm"
import CrossfadeHeader from "../components/CrossfadeHeader"

import GlobalStyle from "../globalStyle"
import variables from "../assets/variables";
import screen from "../assets/mediaqueries"

import gotland_preview from "../images/gotland-calendar2021.jpg"
import gotland_preview1 from "../images/gotland-images-1.jpg"
import gotland_preview2 from "../images/gotland-images-2.jpg"
import faro_preview from "../images/faro-calendar2021.jpg"
import faro_preview1 from "../images/faro-images-1.jpg"
import faro_preview2 from "../images/faro-images-2.jpg"
import icon_calendar from "../images/icons/icon-calendar.svg"
import icon_pin from "../images/icons/icon-pin.svg"
import icon_layer from "../images/icons/icon-layer.svg"


const transition = {
    duration: 5,
    ease: "easeInOut",
    loop: Infinity,
    repeatDelay: 5,
  };

const BodyContainer = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
  position: relative;
  z-index: 2;

  @media ${screen.darkMode} {
    background-color: #000;
  }
`

const FixedHeader = styled.header`
    width: 100vw;
    position: relative;
    display: grid;
    align-items: center;
    height: 50vw;
    overflow: hidden;

    @media ${screen.medium} {
        height: auto;
    }
`

const TitleWrap = styled(motion.div)`
    text-align: center;
    z-index: 2;
    top: 10vw;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    position: absolute;

    @media ${screen.medium} {
        top: 15vw;
    }
`


const Title = styled.h1`
    font-family: freight-display-pro, serif;
    font-weight: 300;
    font-size: 12rem;
    text-transform: uppercase;
    padding: 0;
    position: relative;
    line-height: 12rem;

    &::before {
        content: '20';
        font-size: .5em;
        line-height: inherit;
        vertical-align: top;
        margin-right: 1rem;
    }

    &::after {
        content: '21';
        font-size: .5em;
        line-height: inherit;
        vertical-align: top;
        margin-left: 1rem;
    }

    @media ${screen.small} {
        font-size: 7rem;
        line-height: 7rem;
    }
`

const Subtitle = styled.p`
    font-family: freight-display-pro, serif;
    font-weight: 300;
    font-size: 2rem;
    font-style: italic;

    @media ${screen.small} {
        font-size: 3vw;
    }
`

const Section = styled.section`
    background-color: ${props => props.gray ? '#f7f7f7' : '#FFF'};

    @media ${screen.darkMode} {
        background-color: ${props => props.gray ? '#222' : '#111'};
    }
`

const Container = styled.div`
    max-width: 130rem;
    width: 100%;
    margin: 0 auto;
    padding: ${variables.padding.large} ${variables.padding.small};
`

const WhyWrapper = styled.div`
    display: flex;
    margin: 0 -${variables.padding.small};

    @media ${screen.medium} {
        flex-wrap: wrap;
    } 
`

const WhyItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 ${variables.padding.small};

    @media ${screen.medium} {
        width: 100%;
        margin: 0 0 ${variables.padding.medium};
        padding: 0 ${variables.padding.small};
    } 
`

const Icon = styled.img`
    width: 4rem;
    height: 4rem;
    margin-bottom: ${variables.padding.small};
`

const WhyTitle = styled.h2`
    font-family: freight-display-pro, serif;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 2.4rem;
    margin-bottom: ${variables.padding.small};

    @media ${screen.darkMode} {
        color: ${variables.color.white};
    }
`

const SplitWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;

  flex-direction: ${props => (props.isReversed ? "row-reverse" : "row")};

  @media ${screen.medium} {
      flex-direction: row;
  }
`
const SplitContent = styled.div`
  width: 50%;
  padding: ${variables.padding.medium} ${variables.padding.large};
  text-align: left;

  @media ${screen.medium} {
      width: 100%;
  }

  @media ${screen.small} {
      padding: 0 0 ${variables.padding.small};
  }
  
`
const SplitImage = styled.img`
  width: 50%;
  position: relative;

  padding-right: ${props => (props.isReversed ? 0 : `calc(${variables.padding.small} / 2)`)};
  padding-left: ${props => (props.isReversed ? `calc(${variables.padding.small} / 2)` : 0)};

  @media ${screen.medium} {
      width: 100%;
      padding-right: 0;
      padding-left: 0;
  }
`

const FormSplit = styled(SplitContent)`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const H2 = styled(SecondaryHeading)`
    font-family: freight-display-pro, serif;
    font-weight: 300;
`

const Footer = styled.footer`
    background-color: #FFF;

    @media ${screen.darkMode} {
        background-color: #111;
    }

    & ${Container} {
        display: flex;
        justify-content: space-between;
        padding: ${variables.padding.medium} ${variables.padding.small};
    }
`
const LogoLink = styled(Link)`
    font-size: 0;
    padding: 1.5rem;
    margin: -1.5rem;
    border-radius: 5rem;
`

const Logo = styled.svg`
    width: 4.8rem;
    fill: ${variables.color.black};

    @media ${screen.darkMode} {
        fill: ${variables.color.white};
    }
`

const list = {
    hidden: { opacity: 0, y: 0, x: '-50%' },
    show: { opacity: [0, 0, 1, 1, 0], y: [0, 0, 0, 0, 50], x: '-50%' }
  }

export default () => {

    return(
        <>
        <Helmet>
            <link rel="stylesheet" href="https://use.typekit.net/xgf4jbu.css" />
            <title> Gotland &amp; Fårö Almanackor 2021 | Daniel Tängerfors</title>
        </Helmet>
        <GlobalStyle />
        <BodyContainer>
            <FixedHeader>
                <TitleWrap
                    variants={list}
                    initial="hidden"
                    animate="show"
                    transition={transition}>
                    <Title>Gotland</Title>
                    <Subtitle>Helårsalmanacka med vackra bilder från Gotland</Subtitle>
                </TitleWrap>
                <TitleWrap
                    variants={list}
                    initial="hidden"
                    animate="show"
                    transition={{delay: 5, ...transition}}>
                    <Title>Fårö</Title>
                    <Subtitle>Helårsalmanacka med vackra bilder från Fårö</Subtitle>
                </TitleWrap>
                <CrossfadeHeader />
            </FixedHeader>
            <Section>
                <Container>
                    <WhyWrapper>
                        <WhyItem>
                            <Icon src={icon_layer} alt="Ikon med lager"/>
                            <WhyTitle>Limiterad upplaga</WhyTitle>
                            <Paragraph secondary>Fårö och Gotlands-almanackorna trycks upp i en limiterad upplaga, köp ditt ex innan de tar slut!</Paragraph>
                        </WhyItem>
                        <WhyItem>
                            <Icon src={icon_pin} alt="Ikon med kartnål"/>
                            <WhyTitle>Tryckta på Gotland</WhyTitle>
                            <Paragraph secondary>Almanackorna trycks på lokalt på Gotland – bra för miljön och den lokala näringen.</Paragraph>
                        </WhyItem>
                        <WhyItem>
                            <Icon src={icon_calendar} alt="Ikon med kalender"/>
                            <WhyTitle>Praktiskt innehåll</WhyTitle>
                            <Paragraph secondary>Praktisk och fin almanacka med nyttig information, namnsdagar och kom-i-ihåg-lista.</Paragraph>
                        </WhyItem>
                    </WhyWrapper>
                </Container>
            </Section>
            <Section gray>
                <Container>
                    <SplitWrapper>
                        <SplitContent>
                            <H2>Fårö 2021</H2>
                            <Paragraph secondary>Med både kända och mindre kända motiv från Fårö har du här en fin almanacka fylld med säsongsbilder från Fårös säregna natur.</Paragraph>
                        </SplitContent>
                        <SplitImage as="div">
                            <Carousel showThumbs={false} autoPlay={true} showStatus={false} infiniteLoop={true}>
                                <div>
                                    <img src={faro_preview} alt="Fårö 2021"/>
                                </div>
                                <div>
                                    <img src={faro_preview1} alt="Fårö 2021"/>
                                </div>
                                <div>
                                    <img src={faro_preview2} alt="Fårö 2021"/>
                                </div>
                            </Carousel>
                        </SplitImage>
                    </SplitWrapper>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SplitWrapper isReversed>
                        <SplitContent>
                            <H2>Gotland 2021</H2>
                            <Paragraph secondary>Almanacka med säsongsbilder runtom Gotland. Såväl kända som mindre kända motiv från Gotland och dess socknar.</Paragraph>
                        </SplitContent>
                        <SplitImage as="div">
                            <Carousel showThumbs={false} autoPlay={true} showStatus={false} infiniteLoop={true}>
                                <div>
                                    <img src={gotland_preview} alt="Gotland 2021"/>
                                </div>
                                <div>
                                    <img src={gotland_preview1} alt="Gotland 2021"/>
                                </div>
                                <div>
                                    <img src={gotland_preview2} alt="Gotland 2021"/>
                                </div>
                            </Carousel>
                        </SplitImage>
                    </SplitWrapper>
                </Container>
            </Section>
            <Section gray>
                <Container>
                    <SplitWrapper>
                        <SplitContent>
                            <H2>Beställ ditt exemplar idag!</H2>
                            <Paragraph>Lägg din beställning genom att fylla i antal almanackor du önskar samt dina uppgifter.</Paragraph>
                            <Information>Betalning sker genom faktura med 14 dagars betalningsvillkor. Din beställning bekräftas genom mitt bekräftelsemail – har du önskemål om annan leveransadress eller dylikt kan detta ordnas i nästa steg.</Information>
                            <Information secondary>Obs! På grund av rådande pandemi skickas almanackorna endast genom post.</Information>
                        </SplitContent>
                        <FormSplit>
                            <OrderForm />
                        </FormSplit>
                    </SplitWrapper>
                </Container>
            </Section>
            <Footer>
                <Container>
                <LogoLink to="/">
                    <Logo viewBox="0 0 283.5 283.5">
                        <path d="M237.5,38.2c-57.2-52.4-146.5-48.8-198.9,8c-52.6,56.9-49,146.2,8,198.9l0.1,0.1c28,24.6,60.1,37.1,95.8,37.1
	c11,0,22.3-1.3,34.2-3.8l3-0.6c2.2-0.4,3.6-2.6,3.2-4.8l-1.3-6.1c-0.6-2.2-2.8-3.6-4.9-3.2l-3,0.6c-44.8,9.1-84.2-1-117.2-30.1
	C5.4,187.2,2.3,107.2,49.3,56C96.3,5,176.4,1.9,228,48.9c46.5,42.7,45.6,104,30.7,143.4c-10,26.4-27.1,45.1-41.6,45.5
	c-11.6-0.3-33.9-8.4-55.1-59.7c-0.9-2.2-1.7-4.3-2.6-6.5c0.4-1.3,0.7-2.5,0.9-3.5c0.3-1.3,0.7-3.6,1.4-6.5
	c11-48.2,21.3-106.3,4.3-127.6c-4.5-5.5-10.4-8.4-17.5-8.4c-10.3,0-22.7,8-23,45.9c-0.1,13.8,1.3,29.6,4.2,45.7
	c3,16.6,10.8,44.6,14.4,54.6c-2.6,6.5-7.4,15.5-13,23.8c-9.6,13.9-17.2,18.8-20.9,18.8c-2.8,0-4.8-0.9-6.4-2.6
	c-3.2-3.3-9-13.2-5.8-43.9c1.6-13.8,8.6-25.5,16.3-29.7c2.3-1.3,4.8-1.9,7.4-1.9c2.5,0,5.2,0.6,8.1,1.7c-0.6-2.7-2.9-13.6-3.4-15.9
	c-8.1-1.2-14.6,0.8-19,3.3c-12.2,6.5-21.8,22.2-23.8,40.8c-2.9,28.5,0.9,45.6,9.5,55.2c4.3,4.8,10.3,7.4,17.1,7.4
	c12.6,0,24.8-13.6,32.7-25.1c3-4.5,5.9-9.1,8.4-13.8c22.6,50.7,48,62,65.6,62.3h0.1h0.1c20.9-0.4,42.4-22,54.9-54.9
	C288.5,153.7,289.4,85.9,237.5,38.2z M150.5,144.4c-6.8-24.9-10.7-51.3-10.6-72.7c0.3-23,5.4-31.6,8.5-31.6c2.6,0,4.5,0.9,6.1,2.9
	C165.5,56.8,159.2,103.1,150.5,144.4z" />
                    </Logo>
                </LogoLink>
                </Container>
            </Footer>

        </BodyContainer>
        </>
    ) 
}