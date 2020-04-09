import React from "react"
import styled from "styled-components"

import SocialIcons from "../../SocialIcons"

const NavbarIcons = () => {
  return (
    <Wrapper>
      <SocialIcons />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons
