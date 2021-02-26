import React from "react";
import styled from "styled-components"
import { Helmet } from "react-helmet"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { SecondaryHeading, TertiaryHeading, Paragraph, Information } from "../../components/typography"
import OrderForm from "../../components/OrderForm"
import CrossfadeHeader from "../../components/CrossfadeHeader"
import {FooterSection } from "../../components/layout"

import GlobalStyle from "../../globalStyle"
import variables from "../../assets/variables";
import screen from "../../assets/mediaqueries"

import gotland_preview from "../../images/gotland-calendar2021.jpg"
import gotland_preview1 from "../../images/gotland-images-1.jpg"
import gotland_preview2 from "../../images/gotland-images-2.jpg"
import faro_preview from "../../images/faro-calendar2021.jpg"
import faro_preview1 from "../../images/faro-images-1.jpg"
import faro_preview2 from "../../images/faro-images-2.jpg"
import icon_calendar from "../../images/icons/icon-calendar.svg"
import icon_pin from "../../images/icons/icon-pin.svg"
import icon_layer from "../../images/icons/icon-layer.svg"

import meta_card from "../../images/almanacka-meta-card.jpg"

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
    height: 80vh;
    position: relative;
    padding: 5vw 5vw 0;
    background-color: #FFF;

    @media ${screen.darkMode} {
        background-color: #111;
    }

    @media ${screen.medium} {
        height: auto;
    }
`
const HeaderContent = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    align-items: flex-end;
    overflow: hidden;
`

const TitleWrap = styled.div`
    text-align: left;
    z-index: 2;
    width: 100%;
    position: relative;
    padding: 3vw;
    background-image: linear-gradient(to top, rgba(0,0,0, .6), rgba(0,0,0, 0));

    @media ${screen.medium} {
        padding: 30vh 2rem 3rem;
    }
`

const Title = styled.h1`
    display: block;
    font-family: freight-display-pro, serif;
    font-weight: 300;
    font-size: 7rem;
    padding: 0;
    margin: 0 0 2rem;
    position: relative;
    line-height: 1.4;
    border-bottom: 1px solid #FFF;
    color: #FFF;

    @media ${screen.large} {
        font-size: 4rem;
    }
`

const SubContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`

const Subtitle = styled.p`
    font-family: freight-display-pro, serif;
    font-weight: 300;
    font-size: 2.5rem;
    font-style: italic;
    color: #FFF;
    padding: 0 5rem 3rem 0; 

    @media ${screen.small} {
        padding: 0 0 3rem 0;
    }
`

const Button = styled.a`
text-decoration: none;
  color: ${variables.color.black};
  font-size: ${variables.typography.defaultSize};
  font-family: ${variables.typography.bodyFont};
  border: 1px solid #FFF;
  border-radius: 3rem;
  padding: 1.2rem 4rem;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1;
  background-color: #FFF;

  &:hover {
      background-color: #dedede;
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

const H3 = styled(TertiaryHeading)`
    font-family: freight-display-pro, serif;
    font-weight: 300;

    & span {
        text-decoration: line-through;
    }
`

// const list = {
//     hidden: { opacity: 0, y: 0, x: '-50%' },
//     show: { opacity: [0, 0, 1, 1, 0], y: [0, 0, 0, 0, 50], x: '-50%' }
//   }

export default () => {

    return(
        <>
        <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/xgf4jbu.css" />
        <title> Gotland &amp; Fårö Almanackor 2021 | Daniel Tängerfors</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dtangerfors.se/almanacka" />
        <meta
          property="og:title"
          content="Fårö &amp; Gotland 2021 Almanackor"
        />
        <meta
          property="og:description"
          content="Helårsalmanackor för 2021 med motiv från Fårö eller Gotland. Limiterad upplaga – köp ditt ex nu!"
        />
        <meta property="og:image" content={meta_card} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dtangerfors.se/almanacka" />
        <meta
          property="twitter:title"
          content="Fårö &amp; Gotland 2021 Almanackor"
        />
        <meta
          property="twitter:description"
          content="Helårsalmanackor för 2021 med motiv från Fårö eller Gotland. Limiterad upplaga – köp ditt ex nu!"
        />
        <meta property="twitter:image" content={meta_card}></meta>

      </Helmet>
        <GlobalStyle />
        <BodyContainer>
            <FixedHeader>
                <HeaderContent>
                <TitleWrap>
                    <Title>Gotland & Fårö Almanacka 2021</Title>
                    <SubContent>
                    <Subtitle>Helårsalmanacka med vackra bilder från Gotland & Fårö. Köp ditt ex nu för 100kr.</Subtitle>
                    <Button title="Beställ nu" href="#order">Beställ nu</Button>
                    </SubContent>
                    
                </TitleWrap>
                <CrossfadeHeader />
                </HeaderContent>
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
                            <H3><span>190 kr</span> 100 kr</H3>
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
                            <H3><span>190 kr</span> 100 kr</H3>
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
            <Section gray id="order">
                <Container>
                    <SplitWrapper>
                        <SplitContent>
                            <H2>Beställ ditt exemplar idag!</H2>
                            <Paragraph>Lägg din beställning genom att fylla i antal almanackor du önskar samt dina uppgifter.</Paragraph>
                            <Information>Betalning sker genom faktura med 14 dagars betalningsvillkor. Faktura skickas per mail. Obs! På grund av rådande pandemi skickas almanackorna endast genom post.</Information>
                        </SplitContent>
                        <FormSplit>
                            <OrderForm />
                        </FormSplit>
                    </SplitWrapper>
                </Container>
            </Section>
            <FooterSection />
        </BodyContainer>
        </>
    ) 
}