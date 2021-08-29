import styled from "styled-components"
import variables from "../../assets/variables"
import screen from "../../assets/mediaqueries"

const Wrapper = styled.div`
  max-width: 110rem;
  width: 100%;
  margin: 0 auto;
  padding-top: ${variables.padding.xlarge};

  @media ${screen.medium} {
    padding-top: ${variables.padding.medium};
  }
`

const Header = styled.header`
  display: flex;
  text-align: left;

  @media ${screen.medium} {
    flex-wrap: wrap-reverse;
  }
`

const HeaderContent = styled.div`
  width: calc(100% - 25rem);

  @media ${screen.medium} {
    width: 100%;
    padding-top: ${variables.padding.small};
  }
`

const FlexWrapper = styled.div`
  display: flex;
  gap: ${variables.padding.medium};
  padding-top: ${variables.padding.large};

  @media ${screen.medium} {
    flex-wrap: wrap;
  }
`

const Col60 = styled.div`
  width: 60%;

  @media ${screen.medium} {
    width: 100%;
  }
`

const Col40 = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  gap: 4.8rem;

  @media ${screen.medium} {
    width: 100%;
  }
`

export { Wrapper, Header, HeaderContent, FlexWrapper, Col60, Col40 }
