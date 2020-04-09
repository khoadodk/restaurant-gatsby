import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import Navbar from "../components/globals/navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    font-family: sans-serif;
    color: #262626;
    background: #fff;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
