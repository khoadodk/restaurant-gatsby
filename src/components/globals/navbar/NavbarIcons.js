import React from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

const NavbarIcons = () => {
  return (
    <IconWrapper>
      <a href="https://www.facebook.com" target="_blank">
        <FaFacebook className="icon facebook-icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <FaInstagram className="icon instagram-icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <FaTwitter className="icon twitter-icon" />
      </a>
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .facebook-icon {
    color: #3b579d;
  }
  .instagram-icon {
    color: #da5f53;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons
