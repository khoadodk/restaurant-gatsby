import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={(`gatsby`, `restaurant`, `react`)} />
    <PageHeader img={img}>
      <Banner title="contact us" subtitle="we reply within 24 hours"></Banner>
    </PageHeader>
  </Layout>
)

export default ContactPage
