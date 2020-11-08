import React from "react"
import styled, { keyframes } from "styled-components"

import variables from "../assets/variables";
import screen from "../assets/mediaqueries"

const SocialMediaWrapper = styled.div`
    width: 100%;
    align-self: flex-end;
`

const fillButton = keyframes`
    from {
        background-color: none;
        color: ${variables.color.black};
    }

    to {
        background-color: ${variables.color.black};
        color: ${variables.color.white};
    }
`

const fillButtonDarkMode = keyframes`
    from {
        background-color: none;
        color: ${variables.color.white};
    }

    to {
        background-color: ${variables.color.white};
        color: ${variables.color.black};
    }
`

const SocialLink = styled.a`
    text-decoration: none;
    color: ${variables.color.black};
    font-size: ${variables.typography.defaultSize};
    font-family: ${variables.typography.titleFont};
    font-weight: 300;
    line-height: 0;
    border: 1px solid ${variables.color.black};
    border-radius: 3rem;
    padding: 1.5rem 4rem;
    margin: 1rem 1rem 0 0;
    display: inline-block;
    position: relative;

    &:hover {
        animation-name: ${fillButton};
        animation-delay: .1s;
        animation-duration: .3s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
    }

    &:focus {
        background-color: ${variables.color.black};
        color: ${variables.color.white};
        outline: none;
        border: 1px solid ${variables.color.black};
        padding-bottom: 1.5rem;
    }

    @media ${screen.darkMode} {
        color: ${variables.color.white};
        border-color: ${variables.color.white};

        &:hover {
            animation-name: ${fillButtonDarkMode};
        }

        &:focus {
            background-color: ${variables.color.white};
            color: ${variables.color.black};
            border: 2px solid ${variables.color.white};
        }
    }
    
`

const SocialName = styled.span`
    line-height: 1;
`

const SocialLinkArrow = styled.span`
    position: relative;
    left: 0;
    opacity: 0;
    margin-left: -7px;

    ${SocialLink}:hover & {
        margin-left: 2.5rem;
        left: 2rem;
        opacity: 1;
    }
`

const SocialMedia = (props) => {
    return (
        <SocialLink href={props.href}>
            <SocialName>
                {props.socialMedium}
            </SocialName>
            <SocialLinkArrow>&rarr;</SocialLinkArrow>
        </SocialLink>
    )
}

export default () => {
    return (
        <SocialMediaWrapper>
            <SocialMedia socialMedium="Behance" href="https://www.behance.net/dtangerfors" />
            <SocialMedia socialMedium="GitHub" href="https://github.com/dtangerfors" />
            <SocialMedia socialMedium="LinkedIn" href="https://www.linkedin.com/in/daniel-t%C3%A4ngerfors/" />
        </SocialMediaWrapper>
    )
}