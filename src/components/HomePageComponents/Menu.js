import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Product from "./Product"
import { Section, Title } from "../../utils"

const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          name
          id
          price
          ingredients
          img {
            fixed(height: 150, width: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Menu = () => {
  return (
    <Section>
      <Title title="feature items" message="little taste" />
      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            const products = data.items.edges
            return products.map(product => (
              <Product key={product.node.id} product={product.node} />
            ))
          }}
        />
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 772px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

export default Menu
