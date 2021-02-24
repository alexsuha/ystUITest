import React, { Component } from 'react';
import './Services.css'
import TradeIn from '../TradeIn.js';
import PaymentMethod from './PaymentMethod';

class Service extends Component {
    state = {
        step: 1,
        tradein: false,
        paymentFinance: false,
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1,
        })
    }

    previousStep = () => {
        this.setState({
            step: this.state.step - 1,
        })
    }

    render() {
        const { step } = this.state;

        switch(step) {
            case 1:
                return <TradeIn
                        nextStep={this.nextStep}/>
            case 2:
                return <PaymentMethod />
            case 3:
                return <h1>Delivery method</h1>
            case 4:
                return <h1>Review Payment</h1>
        }
 
    }
}

export default Service;