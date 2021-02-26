import React, { Component } from 'react';
import './Services.css'

//pages
import TradeIn from './TradeIn.js';
import PaymentMethod from './PaymentMethod';
import TradeInVehicle from './TradeInVehicle';

class Service extends Component {
    state = {
        step: 0,
        tradein: false,
        paymentFinance: false,
    }

    handleTradeIn = () => {
        this.setState({tradein: true})
    }

    handleTabChange = (newValue) => {
        this.setState({ step: newValue })
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
                />
            case 1:
                return  <PaymentMethod
                            nextStep={this.nextStep}
                            tabValue={this.state.step}
                            onTabChange={this.handleTabChange}
                        />
            case 2:
                return <h1>Delivery method</h1>
            case 3:
                return <h1>Review Payment</h1>
        }
 
    }
}

export default Service;