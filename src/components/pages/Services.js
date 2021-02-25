import React, { Component } from 'react';
import './Services.css'

//pages
import TradeIn from './TradeIn.js';
import PaymentMethod from './PaymentMethod';
import TradeInVehicle from './TradeInVehicle';

class Service extends Component {
    state = {
        step: 1,
        tradein: false,
        paymentFinance: false,
    }

    handleTradeIn = () => {
        this.setState({tradein: true})
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
                return this.state.tradein ? <TradeInVehicle/> : <TradeIn nextStep={this.nextStep}/>
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