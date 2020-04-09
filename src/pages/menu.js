import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" keywords={(`gatsby`, `restaurant`, `react`)} />
    <PageHeader img={img}>
      <Banner
        title="menu"
        subtitle="hundreds of variety from 10 different cultures"
      ></Banner>
    </PageHeader>
  </Layout>
)

export default MenuPage
