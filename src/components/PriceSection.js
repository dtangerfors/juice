import React, { Component } from "react"
import styled from "styled-components"

import variables from "../assets/variables"

const PriceField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: ${props => (props.subTotal ? variables.padding.small : 0)};

  color: ${props =>
    props.subTotal ? variables.color.green : variables.color.gray50};
  font-size: 1.3rem;
  font-weight: ${props => (props.subTotal ? 700 : 400)};
  line-height: 1.8rem;
`

const PriceName = styled.div`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;

  text-transform: uppercase;
`

const Price = styled.div`
  font-family: inherit;
  font-size: ${props => (props.subTotal ? "1.6rem" : "inherit")};
  font-weight: inherit;

  text-transform: uppercase;

  &::after {
    content: " kr";
    text-transform: lowercase;
    font-weight: inherit;
  }
`

export default class PriceSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      subTotal: 0,
      shipping: 0,
      tax: 0,
      taxRate: 0.2,
      price: 190,
      inCart: props.inCart,
    }
  }

  calculateShipping() {
    this.setState({
      shipping: 70,
    })
  }

  calculateTax() {
    this.setState(state => {
        return {
            tax: (state.subTotal + state.shipping) * state.taxRate
        }
    })  
  }

  calculateTotal() {
    this.setState(state => {
      return {
        total: state.subTotal + state.shipping,
      }
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.inCart !== prevProps.inCart) {
      this.setState(state => {
        return {
          inCart: this.props.inCart,
          subTotal: this.props.inCart * state.price
        }
      })

      if(this.props.inCart !== 0) {
        this.calculateShipping()
      } else {
        this.setState(state => {
          return {
            shipping: 0
          }
        })
      }   
      this.calculateTax()
      this.calculateTotal()
    }
  }

  render() {
    let { shipping, tax, total } = this.state

    return (
      <>
        <PriceField>
          <PriceName>Frakt:</PriceName>
          <Price>{shipping}</Price>
        </PriceField>
        <PriceField>
          <PriceName>Moms (25%):</PriceName>
          <Price>{tax}</Price>
        </PriceField>
        <PriceField subTotal>
          <PriceName>Summa att betala:</PriceName>
          <Price subTotal>{total}</Price>
        </PriceField>
      </>
    )
  }
}
