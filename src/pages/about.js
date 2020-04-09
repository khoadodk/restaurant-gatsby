import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={(`gatsby`, `restaurant`, `react`)} />
    <PageHeader img={img}>
      <Banner
        title="about us"
        subtitle="born and raised in California"
      ></Banner>
    </PageHeader>
  </Layout>
)

export default AboutPage
