import React, { Component } from 'react';
import './Services.css'

//pages
import TradeIn from './TradeIn.js';
import PaymentMethod from './PaymentMethod';
import TradeInVehicle from './TradeInVehicle';
import DeliveryMethod from './DeliveryMethod';

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            tradein: false,
            paymentFinance: false,
        };
    }

    handleTradeIn = () => {
        this.setState({ tradein: true })
    }

    handlePaymentWithFinance = () => {
        this.setState({ paymentFinance: true })
    }

    handleTabChange = (newValue) => {
        this.setState({ step: newValue })
        if (newValue === 0) {
            this.setState({ tradein: false })
        }
        if (newValue === 1) {
            this.setState({ paymentFinance: false })
        }
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1,

        })
    }

    render() {

        switch (this.state.step) {
            case 0:
                return this.state.tradein ?
                    <TradeInVehicle
                        tabValue={this.state.step}
                        onTabChange={this.handleTabChange}
                    /> :
                    <TradeIn
                        nextStep={this.nextStep}
                        tabValue={this.state.step}
                        onTabChange={this.handleTabChange}
                        onTradeIn={this.handleTradeIn}
                    />
            case 1:
                return this.state.paymentFinance ?
                    <h1>Interest rate form</h1> :
                    <PaymentMethod
                        nextStep={this.nextStep}
                        tabValue={this.state.step}
                        onTabChange={this.handleTabChange}
                        onPaymentWithFinance={this.handlePaymentWithFinance}
                    />
            case 2:
                return <DeliveryMethod
                    nextStep={this.nextStep}
                    tabValue={this.state.step}
                    onTabChange={this.handleTabChange}
                />
            case 3:
                return <h1>Review Payment</h1>
        }

    }
}

export default Service;