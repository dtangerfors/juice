import styled from "styled-components"

import variables from "../assets/variables"

// Styled Components
const HeaderWrapper = styled.header`
  position: relative;
  z-index: 2;
  text-align: left;
  width: 100%;
  margin: ${variables.padding.xlarge} 0 ${variables.padding.medium};
`

const Content = styled.div`
  text-align: left;
  position: relative;
`

export {HeaderWrapper, Content}
