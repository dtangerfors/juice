/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { lighten } from "polished"
import { Helmet } from "react-helmet"

import screen from "../assets/mediaqueries"
import variables from "../assets/variables"

import Header from "./header"
import GlobalStyle from "../globalStyle"

const BodyContainer = styled.div`
  background-color: ${variables.color.white};
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: ${props => (props.center ? "grid" : "block")};

  @media ${screen.darkMode} {
    background-color: ${variables.color.black};
  }
`

const MainWrapper = styled.main`
  max-width: 88vw;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 0 ${variables.padding.large};
  position: relative;
  display: grid;
  place-items: center;

  & > * {
    min-width: 0;
  }

  @media ${screen.xLarge} {
    max-width: 92vw;
    padding: 0 0 ${variables.padding.large};
  }

  @media ${screen.large} {
    max-width: 100vw;
    padding: 0 ${variables.padding.small} ${variables.padding.large};
    padding-left: max(2rem, env(safe-area-inset-left));
    padding-right: max(2rem, env(safe-area-inset-right));
  }
`
const Container = styled.div`
  max-width: 88vw;
  width: 100%;
  margin: 0 auto;
  padding: ${variables.padding.large} ${variables.padding.small};

  @media ${screen.xLarge} {
    max-width: 92vw;
    padding: 0 0 ${variables.padding.large};
  }

  @media ${screen.large} {
    max-width: 100vw;
    padding: 0 ${variables.padding.small} ${variables.padding.large};
    padding-left: max(2rem, env(safe-area-inset-left));
    padding-right: max(2rem, env(safe-area-inset-right));
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${variables.color.white};
  padding-left: max(2rem, env(safe-area-inset-left));
  padding-right: max(2rem, env(safe-area-inset-right));
  padding-bottom: env(safe-area-inset-bottom);

  @media ${screen.darkMode} {
    background-color: ${variables.color.black};
  }

  & ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${variables.padding.small} 0;
    border-top: 1px solid ${lighten(0.7, variables.color.black)};

    @media ${screen.darkMode} {
      border-color: ${variables.color.white};
    }
  }
`

const FooterCol = styled.div`
  display: flex;
`

const LogoLink = styled(Link)`
  font-size: 0;
  padding: 1rem;
  margin: -1rem;
  border-radius: 5rem;
`

const FooterText = styled.p`
  font-size: 1.3rem;
  line-height: 1;
  color: ${variables.color.black};
  text-decoration: none;

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const Copyright = styled(FooterText)`
  margin-left: 2rem;
  display: flex;
  align-items: center;
`

const Logo = styled.svg`
  width: 2.4rem;
  fill: ${variables.color.black};

  @media ${screen.darkMode} {
    fill: ${variables.color.white};
  }
`

export const FooterSection = () => (
  <Footer>
    <Container>
      <FooterCol>
        <LogoLink to="/">
          <Logo viewBox="0 0 283.5 283.5">
            <path
              d="M237.5,38.2c-57.2-52.4-146.5-48.8-198.9,8c-52.6,56.9-49,146.2,8,198.9l0.1,0.1c28,24.6,60.1,37.1,95.8,37.1
  c11,0,22.3-1.3,34.2-3.8l3-0.6c2.2-0.4,3.6-2.6,3.2-4.8l-1.3-6.1c-0.6-2.2-2.8-3.6-4.9-3.2l-3,0.6c-44.8,9.1-84.2-1-117.2-30.1
  C5.4,187.2,2.3,107.2,49.3,56C96.3,5,176.4,1.9,228,48.9c46.5,42.7,45.6,104,30.7,143.4c-10,26.4-27.1,45.1-41.6,45.5
  c-11.6-0.3-33.9-8.4-55.1-59.7c-0.9-2.2-1.7-4.3-2.6-6.5c0.4-1.3,0.7-2.5,0.9-3.5c0.3-1.3,0.7-3.6,1.4-6.5
  c11-48.2,21.3-106.3,4.3-127.6c-4.5-5.5-10.4-8.4-17.5-8.4c-10.3,0-22.7,8-23,45.9c-0.1,13.8,1.3,29.6,4.2,45.7
  c3,16.6,10.8,44.6,14.4,54.6c-2.6,6.5-7.4,15.5-13,23.8c-9.6,13.9-17.2,18.8-20.9,18.8c-2.8,0-4.8-0.9-6.4-2.6
  c-3.2-3.3-9-13.2-5.8-43.9c1.6-13.8,8.6-25.5,16.3-29.7c2.3-1.3,4.8-1.9,7.4-1.9c2.5,0,5.2,0.6,8.1,1.7c-0.6-2.7-2.9-13.6-3.4-15.9
  c-8.1-1.2-14.6,0.8-19,3.3c-12.2,6.5-21.8,22.2-23.8,40.8c-2.9,28.5,0.9,45.6,9.5,55.2c4.3,4.8,10.3,7.4,17.1,7.4
  c12.6,0,24.8-13.6,32.7-25.1c3-4.5,5.9-9.1,8.4-13.8c22.6,50.7,48,62,65.6,62.3h0.1h0.1c20.9-0.4,42.4-22,54.9-54.9
  C288.5,153.7,289.4,85.9,237.5,38.2z M150.5,144.4c-6.8-24.9-10.7-51.3-10.6-72.7c0.3-23,5.4-31.6,8.5-31.6c2.6,0,4.5,0.9,6.1,2.9
  C165.5,56.8,159.2,103.1,150.5,144.4z"
            />
          </Logo>
        </LogoLink>
        <Copyright>
          &copy; {new Date().getFullYear()} All rights reserved.
        </Copyright>
      </FooterCol>
      <FooterText as={Link} to="/integritetspolicy">
        Integritetspolicy
      </FooterText>
    </Container>
  </Footer>
)

const Layout = ({ center, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/wdd3eii.css" />
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <BodyContainer center={center}>
        <MainWrapper>{children}</MainWrapper>
        <FooterSection />
      </BodyContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
