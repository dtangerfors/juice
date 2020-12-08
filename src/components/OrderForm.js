import React, { Component } from 'react'
import styled from "styled-components"
import { darken, lighten } from "polished"

import variables from "../assets/variables"
import screen from "../assets/mediaqueries"

import Counter from "./Counter"
import PriceSection from "./PriceSection"

import ThanksPopup from "../components/ThanksPopup"


const Form = styled.form`
    background-color: #FFF;
    padding: ${variables.padding.medium};
    display: flex;
    flex-wrap: wrap;
    max-width: 45rem;

    @media ${screen.small} {
        padding: ${variables.padding.medium} ${variables.padding.small};
        margin: 0 -${variables.padding.small};
        width: calc(100% + ${variables.padding.medium});
    }
`
const Input = styled.input`
    -webkit-appearance: none;
    appearance: none;

    width: 100%;
    padding: .5rem 1rem;
    margin-bottom: 4rem;

    font-family: inherit;
    font-size: 16px;
    color: ${variables.color.gray30};

    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${variables.color.gray50};

    &::placeholder {
        color: ${variables.color.gray50};
        font-size: 11px;
    }

    &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px ${lighten(0.35, variables.color.green)} inset;
        background-image: none !important;
    } 
`

const Label = styled.label`
    color: ${variables.color.gray50};
    font-size: 11px;
    padding: .5rem 1rem;
    display: block;
    -webkit-transition:all .3s;
    transition: all .3s;

    position: absolute;
    transform: translateY(-2rem);

    ${Input}:placeholder-shown + & {
        opacity: 0;
        visibility: hidden;
        transform: translateY(0);
    }
`

const StaticLabel = styled.label`
    font-size: 14px;
    font-weight: 700;
    line-height: 1.8rem;
    text-transform: uppercase;

    color: ${variables.color.gray30};

    align-self: center;

    &::after {
        content: ' | 190 kr/st';
        color: ${variables.color.gray50};
        text-transform: lowercase;
    }
`

const Fieldset = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: ${props => props.half ? '50%' : '100%'};

    &:nth-of-type(even) {
        padding-left: ${props => props.half ? '.5rem' : '0'};
    }

    &:nth-of-type(odd) {
        padding-right: ${props => props.half ? '.5rem' : '0'};
    }
`

const Submit = styled.input.attrs({ type: 'submit' })`
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;

    display: block;

    width: 100%;
    padding: ${variables.typography.defaultSize};    

    background-color: ${variables.color.green};
    color: #FFF;

    text-transform: uppercase;
    letter-spacing: .1em;
    font-family: inherit;
    font-weight: 700;

    border: none;
    border-radius: 0;

    &:hover {
        background-color: ${darken(0.2, variables.color.green)};
    }
`

const FormGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 ${variables.padding.medium};
    width: 100%;

    &:first-child {
        margin: 0 0 3rem;
    }

    &:last-of-type {
        margin: 0 0 ${variables.padding.small};
    }
`

export default class OrderForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: '',
            customerName: '',
            customerPhone: '',
            customerEmail: '',
            customerStreetNumber: '',
            customerPostalCode: '',
            customerPostalTown: '',
            inCart: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.incrementCart = this.incrementCart.bind(this);
        this.decrementCart = this.decrementCart.bind(this);
    }

    initialState = {
        status: '',
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        customerStreetNumber: '',
        customerPostalCode: '',
        customerPostalTown: '',
        inCart: 0
    };
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            this.setState(() => this.initialState)
            //this.setState({ status: "SUCCESS" });
            window.location.replace("/almanacka/thankyou");
        } else {
            this.setState({ status: "ERROR" });
        }
        };
        xhr.send(data);
    }

    incrementCart() {
        this.setState({
          inCart: this.state.inCart + 1
        })
    }

    decrementCart() {
        this.setState({
          inCart: this.state.inCart - 1
        })
    }

    render() {

        let {customerEmail, customerName, customerPhone, customerPostalCode, customerPostalTown, customerStreetNumber, inCart, status} = this.state

        return (
            <Form 
            autoComplete="on" 
            onSubmit={this.handleSubmit}
            action="https://formspree.io/xwkrjlzz"
            method="POST"
            id="calendar-order-form"
            >
                <FormGroup>
                    <Fieldset>
                        <StaticLabel htmlFor="faroTotal">Fårö 2021</StaticLabel>
                        <Counter incrementCart={this.incrementCart} decrementCart={this.decrementCart} status={status} name="faroTotal"/>
                    </Fieldset>
                    {/* <Fieldset>
                        <StaticLabel htmlFor="gotlandTotal">Gotland 2021</StaticLabel>
                        <Counter incrementCart={this.incrementCart} decrementCart={this.decrementCart} status={status} name="gotlandTotal"/>
                    </Fieldset> */}
                </FormGroup>              
                <FormGroup style={{
                    height: status === "SUCCESS" ? '0' : null,
                    visibility: status === "SUCCESS" ? 'hidden' : 'visible',
                    opacity: status === "SUCCESS" ? 0 : 1,
                    transformOrigin: 'top',
                    transition: 'hidden 0s ease 0s, height .3s ease 0s, opacity .3s ease .3s',
                }}>
                    <Fieldset>
                        <Input id="customerName" name="customerName" type="text" placeholder="Ditt namn" value={customerName} onChange={this.handleChange}/>
                        <Label htmlFor="customerName">Ditt namn</Label>
                    </Fieldset>
                    <Fieldset>
                        <Input id="customerPhone" name="customerPhone" type="tel" placeholder="Ditt telefonnummer (för att skicka fraktavi)" value={customerPhone} onChange={this.handleChange}/>
                        <Label htmlFor="customerPhone">Ditt telefonnummer</Label>
                    </Fieldset>
                    <Fieldset>
                        <Input id="customerEmail" name="customerEmail" type="email" placeholder="Din email (för att skicka orderbekräftelse)" value={customerEmail} onChange={this.handleChange}/>
                        <Label htmlFor="customerEmail">Din mail</Label>
                    </Fieldset>
                    <Fieldset>
                        <Input id="customerStreetNumber" name="customerStreetNumber" type="text" placeholder="Postadress" value={customerStreetNumber} onChange={this.handleChange}/>
                        <Label htmlFor="customerStreetNumber">Postadress</Label>
                    </Fieldset>
                    <Fieldset half>
                        <Input id="customerPostalCode" name="customerPostalCode" type="text" placeholder="Postnummer" value={customerPostalCode} onChange={this.handleChange}/>
                        <Label htmlFor="customerPostalCode">Postnummer</Label>
                    </Fieldset>
                    <Fieldset half>
                        <Input id="customerPostalTown" name="customerPostalTown" type="text" placeholder="Stad" value={customerPostalTown} onChange={this.handleChange}/>
                        <Label htmlFor="customerPostalTown">Stad</Label>
                    </Fieldset>
                </FormGroup>
                <FormGroup style={{
                    height: inCart ? '70px' : '0',
                    visibility: inCart ? 'visible' : 'hidden',
                    opacity: inCart ? 1 : 0,
                    transformOrigin: 'top',
                    transition: 'hidden 0s ease 0s, height .3s ease 0s, opacity .3s ease .3s',
                    display: status === "SUCCESS" ? 'none' : 'block'
                }}>
                    <PriceSection inCart={inCart}/>
                </FormGroup>
                {status === "SUCCESS" ? <ThanksPopup/> : <Submit value="Lägg beställning" />}
                {status === "ERROR" && <p>Ooops! Ett fel uppstod, försök igen snart.</p>}
            </Form>
        )
    }
}
