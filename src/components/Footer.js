import React from "react"

import styled from "styled-components"
import { styles } from "../utils"
import SocialIcons from "./SocialIcons"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="title">eatery</div>
      <div className="icons">
        <SocialIcons />
      </div>
      <p className="copyright">copyright &copy; 2020 eatery</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })}
  }
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
`

export default Footer
