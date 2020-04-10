import React from "react"

import styled from "styled-components"
import Img from "gatsby-image"

const Product = ({ product }) => {
  const { name, price, ingredients } = product
  const { fixed } = product.img
  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" />
      <div className="product">
        <div className="product-content">
          <h4 className="product-content-name">{name}</h4>
          <h3 className="product-content-price">${price}</h3>
        </div>
        <div className="product-info">{ingredients}</div>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  .img {
    border-radius: 0.5rem;
  }
  .product {
    background: rgba(210, 170, 92, 0.6);
    border-radius: 0.5rem;
    &-content {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
      font-size: 1.4rem;
      text-transform: uppercase;
    }
    &-info {
      margin: 1rem;
      word-spacing: 0.2rem;
      text-transform: lowercase;
    }
  }
`

export default Product
