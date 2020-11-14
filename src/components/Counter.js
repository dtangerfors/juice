import React, { Component } from "react"
import styled from "styled-components"

import variables from "../assets/variables"
import screen from "../assets/mediaqueries"

const OuterButton = styled.button`
    appearance: none;
    cursor: pointer;
    background-color: transparent;
    color: ${variables.color.gray50};
    border: none;

    width: 4rem;
    height: 4rem;
    padding: 1rem;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    } 

    @media ${screen.small} {
      width: 5rem;
      height: 5rem;
    }
`

const InnerButton = styled.span`
    border: 1px solid ${variables.color.gray50};
    border-radius: 3rem;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`

const CounterWrap = styled.div`
    display: flex;
    align-items: center;
`

const CountNumber = styled.input`
    appearance: none;
    border: none;
    background-color: transparent;
    width: 4rem;
    padding: 0;
    text-align: center;
    font-size: ${variables.typography.defaultSize};
    font-weight: 700;
    color: ${variables.color.gray30};

    @media ${screen.small} {
      width: 2rem;
    }
`

class Button extends Component {

    disable() {
        let { count, title, status } = this.props
        if ((count === 0 && title === '-') || (count >= 5 && title === '+') || (status === 'SUCCESS')) return true
    }

  render() {
    let { title, task } = this.props
    return <OuterButton onClick={task} disabled={this.disable()} type="button"><InnerButton>{title}</InnerButton></OuterButton>
  }
}

export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    }, this.props.incrementCart)
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    }, this.props.decrementCart)
  }

  render() {
    let { count } = this.state;
    let { name, status } = this.props;

    return( 
    <CounterWrap>
        <Button
            title = { "-" }
            task = { () => this.decrementCount() }
            count = {count}
            status = {status}
        />
        <CountNumber value={count} type="text" name={name} readOnly />
        <Button
            title = { "+" }
            task = { () => this.incrementCount() }
            count = {count}
            status = {status}
        />
    </CounterWrap>)
  }
}
