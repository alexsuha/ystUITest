import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';

//components
import OptionCard from '../OptionCard';
import CarSelectionSidebar from '../CarSelectionSidebar';
import ServiceTabs from '../ServiceTabs';

//icons
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


class PaymentMethod extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cashAndFinance = {
            backgroundColor: "#e9ecef",
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 10
        };

        const cardStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            padding: 20,
            borderStyle: "solid",
            borderWidth: 3,
            borderColor: "#009de0",
            height: 470,
            width: 370,
            marginLeft: 16,
            marginRight: 16
        }

        const financeDescription = [
            { id: 0, value: "Eligible for no payments for up to 90 days" },
            { id: 1, value: "Loans provided by Canada's largest banks" },
            { id: 2, value: "Lowest interest rates available" },
            { id: 3, value: "Customize your loan's terms from home" },
            { id: 4, value: "Payback in full at any time with no penalty" }
        ]

        const cashDescription = [
            { id: 0, value: "Payment by certified cheque or bank draft" }
        ]
        return (
            <div>
                <ServiceTabs
                    tabValue={this.props.tabValue}
                    onTabChange={this.props.onTabChange}
                />
                <Row>
                    <Col md={9} style={cashAndFinance}>
                        <div style={{ fontSize: 14, marginBottom: 8 }}>What is your payment method? </div>
                        <div style={{ display: 'flex', justifyContent: 'center', height: "100vh" }}>
                            <OptionCard
                                icon={<AccountBalanceIcon style={{ fontSize: 90 }} />}
                                title="Finance with us"
                                description={financeDescription}
                                buttonText="Continue with finance"
                                onClick={this.props.nextStep}
                                showLabel={true}
                            />
                            <OptionCard
                                icon={<MonetizationOnIcon style={{ fontSize: 90 }} />}
                                title="Pay with cash"
                                description={cashDescription}
                                buttonText="Continue with cash"
                                onClick={this.props.nextStep}
                                showLabel={false}
                            />
                        </div>
                    </Col>
                    <Col>
                        <CarSelectionSidebar />
                    </Col>
                </Row>
            </div >
        );
    }
}

export default PaymentMethod;