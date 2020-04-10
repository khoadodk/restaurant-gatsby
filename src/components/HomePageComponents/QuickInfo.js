import React from "react"

import { Section, Title, SectionButton, styles } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"

const QuickInfo = () => {
  return (
    <Section>
      <Title message="let us tell you" title="our mission" />
      <QuickInfoWrapper>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          architecto id ipsum magni optio odio harum, labore voluptates
          pariatur, qui impedit exercitationem cum eius odit explicabo alias
          libero voluptatum. Aperiam?
        </p>
        <Link to="/about/" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
        </Link>
      </QuickInfoWrapper>
    </Section>
  )
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default QuickInfo
