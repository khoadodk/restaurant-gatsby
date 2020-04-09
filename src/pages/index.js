import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={(`gatsby`, `restaurant`, `react`)} />
    <h1>Home Page</h1>
  </Layout>
)

export default IndexPage
