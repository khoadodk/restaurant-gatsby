import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

const NavbarLinks = ({ navbarOpen }) => {
  return (
    <LinkWrapper open={navbarOpen}>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/menu/">Menu</Link>
      <Link to="/contact/">Contact</Link>
    </LinkWrapper>
  )
}

const LinkWrapper = styled.ul`
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transObject({})};
  a {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    cursor: pointer;
    ${styled.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    a:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`

export default NavbarLinks
