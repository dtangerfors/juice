import React from 'react'
import styled from 'styled-components'

import variables from "../assets/variables"
import screen from "../assets/mediaqueries"

import gotland from '../images/gotland-preview.jpg'
import faro from '../images/faro-preview.jpg'
import { Paragraph, SecondaryHeading } from './typography'
import Button from './Button'

const Split = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    grid-column: span 12;
    background-color: rgba(0,0,0, .05);
    border-radius: 2px;
    padding: 0 0 0 ${variables.padding.small};
    margin: ${variables.padding.xlarge} 0 ${variables.padding.medium};

    @media only screen and (max-width: 1000px) {
        flex-wrap: wrap-reverse;
        padding: 0;
    }

    @media ${screen.medium} {
        margin: ${variables.padding.medium} 0 ${variables.padding.small};
    }
`

const ImageWrapper = styled.div`
    width: 60%;
    position: relative;
    align-self: stretch;

    @media ${screen.xLarge} {
        width: 50%;
    }

    @media only screen and (max-width: 1000px) {
        width: 100%;
        padding: ${variables.padding.small};
        padding-top: 0;
    }
`

const Image = styled.img`
    display: inline-block;
    position: absolute;
    width: 80%;
    border-radius: 2px;
    z-index: 1;
    transform: none;
    transition: all .3s ease;

    &:nth-child(1) {
        top: -${variables.padding.small};
        left: 0;
    }

    &:nth-child(2) {
        bottom: -${variables.padding.small};
        right: ${variables.padding.small};
    }

    &:hover {
        z-index: 2;
        transform: scale(1.03);
        transition: all .3s ease;
    }

    @media ${screen.xLarge} {
        width: 90%;
    }

    @media only screen and (max-width: 1000px) {
        width: 60%;
        position: relative;

        &:nth-child(1) {
            top: 0;
            left: 0;
        }

        &:nth-child(2) {
            bottom: -${variables.padding.medium};
            right: auto;
            margin-left: -20%;
        }
    }

    @media ${screen.small} {
        width: 80%;

        &:nth-child(2) {
            margin-left: -60%;
        }
    }
`

const Content = styled.div`
    width: 40%;
    padding: ${variables.padding.large} ${variables.padding.medium};

    @media ${screen.xLarge} {
        width: 50%;
    }

    @media only screen and (max-width: 1000px) {
        width: 1000px;
    }

    @media ${screen.small} {
        padding: ${variables.padding.small} ${variables.padding.small} ${variables.padding.medium};
    }
`

export default function CalendarSection() {
    return (
        <Split>
            <ImageWrapper>
                <Image src={gotland}/>
                <Image src={faro}/>
            </ImageWrapper>
            <Content>
                <SecondaryHeading>Calendar for 2021 with motifs from Gotland and Fårö</SecondaryHeading>
                <Paragraph>I sell my own produced wall calendars with motifs from the beautiful islands of Gotland and Fårö. Enjoy twelve seasonal pictures of various motifs from around the islands. Order down below now.</Paragraph>
                <Button href="/almanacka" title="Order here" />
            </Content>
        </Split>
    )
}
