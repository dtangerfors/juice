import React, { Component } from 'react'
import styled from "styled-components"
import { darken } from "polished"

import variables from "../assets/variables"
import screen from "../assets/mediaqueries"

import Counter from "./Counter"
import PriceSection from "./PriceSection"

const Form = styled.form`
    background-color: #FFF;
    padding: ${variables.padding.medium};
    display: flex;
    flex-wrap: wrap;
    max-width: 50rem;

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
    padding: 1rem;
    margin-bottom: 3rem;

    font-family: inherit;
    font-size: 16px;
    color: ${variables.color.gray30};

    border-radius: 5px;
    border: 1px solid ${variables.color.gray80};

    &::placeholder {
        color: ${variables.color.gray50};
        font-size: 13px;
    }

    &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #e9ece2 inset;
        background-image: none !important;
    } 
`

const Label = styled.label`
    color: ${variables.color.gray50};
    font-size: 13px;
    padding: .5rem 1rem;
    display: block;
    -webkit-transition:all .3s;
    transition: all .3s;

    position: absolute;
    transform: translateY(-2.3rem);

    ${Input}:placeholder-shown + & {
        opacity: 0;
        visibility: hidden;
        transform: translateY(0);
    }
`

const StaticLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5em;
    text-transform: uppercase;

    color: ${variables.color.gray30};

    align-self: center;

    &::after {
        content: ' | 190 kr/st';
        color: ${variables.color.gray50};
        text-transform: lowercase;

        @media only screen and (max-width: 400px) {
            display: block;
            content: '190 kr/st';
            line-height: 1.2em;
        }
    }
`

const InputWrapper = styled.div`
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
    font-size: 14px;
    font-weight: 700;

    border: none;
    border-radius: 0;

    &:hover {
        background-color: ${darken(0.05, variables.color.green)};
    }

    &:disabled {
        cursor: not-allowed;
        opacity: .5;
    }
`

const FormGroup = styled.fieldset`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 ${variables.padding.small};
    width: 100%;
    border: none;
    border-bottom: 1px solid ${variables.color.gray80};
`

const Legend = styled.legend`
    font-family: inherit;
    font-size: 14px;
    ${variables.color.gray50};
    margin-bottom: 1rem;
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
                    <Legend>Välj antal</Legend>
                    <InputWrapper style={{marginBottom: '1rem'}}>
                        <StaticLabel htmlFor="faroTotal">Fårö 2021</StaticLabel>
                        <Counter incrementCart={this.incrementCart} decrementCart={this.decrementCart} status={status} name="faroTotal"/>
                    </InputWrapper>
                    {/* <InputWrapper>
                        <StaticLabel htmlFor="gotlandTotal">Gotland 2021</StaticLabel>
                        <Counter incrementCart={this.incrementCart} decrementCart={this.decrementCart} status={status} name="gotlandTotal"/>
                    </InputWrapper> */}
                </FormGroup>              
                <FormGroup style={{
                    height: status === "SUCCESS" ? '0' : null,
                    visibility: status === "SUCCESS" ? 'hidden' : 'visible',
                    opacity: status === "SUCCESS" ? 0 : 1,
                    transformOrigin: 'top',
                    transition: 'hidden 0s ease 0s, height .3s ease 0s, opacity .3s ease .3s',
                }}>
                    <Legend style={{marginBottom: '3rem'}}>Dina uppgifter</Legend>
                    <InputWrapper>
                        <Input id="customerName" name="customerName" type="text" required placeholder="Ditt namn" value={customerName} onChange={this.handleChange}/>
                        <Label htmlFor="customerName">Ditt namn</Label>
                    </InputWrapper>
                    <InputWrapper>
                        <Input id="customerPhone" name="customerPhone" type="tel" required placeholder="Ditt telefonnummer (för att skicka fraktavi)" value={customerPhone} onChange={this.handleChange}/>
                        <Label htmlFor="customerPhone">Ditt telefonnummer</Label>
                    </InputWrapper>
                    <InputWrapper>
                        <Input id="customerEmail" name="customerEmail" type="email" required placeholder="Din email (för att skicka faktura)" value={customerEmail} onChange={this.handleChange}/>
                        <Label htmlFor="customerEmail">Din mail</Label>
                    </InputWrapper>
                    <InputWrapper>
                        <Input id="customerStreetNumber" name="customerStreetNumber" required type="text" placeholder="Postadress" value={customerStreetNumber} onChange={this.handleChange}/>
                        <Label htmlFor="customerStreetNumber">Postadress</Label>
                    </InputWrapper>
                    <InputWrapper half>
                        <Input id="customerPostalCode" name="customerPostalCode" required type="text" placeholder="Postnummer" value={customerPostalCode} onChange={this.handleChange}/>
                        <Label htmlFor="customerPostalCode">Postnummer</Label>
                    </InputWrapper>
                    <InputWrapper half>
                        <Input id="customerPostalTown" name="customerPostalTown" required type="text" placeholder="Stad" value={customerPostalTown} onChange={this.handleChange}/>
                        <Label htmlFor="customerPostalTown">Stad</Label>
                    </InputWrapper>
                </FormGroup>
                <FormGroup style={{
                    height: inCart ? '85px' : '0',
                    visibility: inCart ? 'visible' : 'hidden',
                    opacity: inCart ? 1 : 0,
                    transformOrigin: 'top',
                    transition: 'hidden 0s ease 0s, height .3s ease 0s, opacity .3s ease .3s',
                    display: status === "SUCCESS" ? 'none' : 'block'
                }}>
                    <PriceSection inCart={inCart}/>
                </FormGroup>
                <Submit disabled={!this.state.inCart} value="Lägg beställning" />
                {status === "ERROR" && <p>Ooops! Ett fel uppstod, försök igen snart.</p>}
            </Form>
        )
    }
}
