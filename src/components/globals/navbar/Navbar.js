import React, { useState } from "react"
import styled from "styled-components"

import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavWrapper>
      <NavbarHeader handleNavbar={handleNavbar} />
      <NavbarLinks navbarOpen={isOpen} />
      <NavbarIcons />
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export default Navbar
