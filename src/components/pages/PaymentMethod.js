import React, { Component } from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
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
            // borderStyle: "solid",
            // borderWidth: 3,
            // borderColor: "#009de0",
            height: 470,
            width: 370,
            marginLeft: 16,
            marginRight: 16
        }
        return (
            <div>
                <ServiceTabs 
                    tabValue={this.props.tabValue}
                    onTabChange={this.props.onTabChange}
                />
                <Row>
                    <Col md={9} style={cashAndFinance}>
                        <div style={{ fontSize: 14 }}>What is your payment method? </div>
                        <div style={{ display: 'flex', justifyContent: 'center', height: "100vh"}}>
                            <Paper
                            elevation={3}
                            style={cardStyle}>
                                <div>
                                    <div style={{display:"flex", justifyContent:"center", marginBottom: 16}}>
                                        <AccountBalanceIcon style={{fontSize: 90}}/> 
                                    </div>
                                    <div>
                                        <h4 style={{textAlign: "center", fontSize: 22}}>Finance with us</h4>
                                    </div>
                                    <div>
                                        <div style={{ marginBottom: 10}}>
                                            <span style={{fontSize: 14}}>Eligible for no payments for up to 90 days</span>
                                        </div>
                                        <div style={{ marginBottom: 10 }}>
                                            <span style={{ fontSize: 14 }}>Loans provided by Canada's largest banks</span>
                                        </div>
                                        <div style={{ marginBottom: 10 }}>
                                            <span style={{ fontSize: 14 }}>Lowest interest rates available</span>
                                        </div>
                                        <div style={{ marginBottom: 10 }}>
                                            <span style={{ fontSize: 14 }}>Customize your loan's terms from home</span>
                                        </div>
                                        <div style={{ marginBottom: 10 }}>
                                            <span style={{ fontSize: 14 }}>Payback in full at any time with no penalty</span>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div>
                                    <Button 
                                        variant="primary"
                                        size="lg">
                                        Continue with Finance
                                    </Button>
                                </div>
                            </Paper>
                            <Paper
                                elevation={3}
                                style={cardStyle}>
                                <div>
                                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                                        <MonetizationOnIcon style={{ fontSize: 90 }} />
                                    </div>
                                    <div>
                                        <h4 style={{ textAlign: "center", fontSize: 22 }}>Pay with cash</h4>
                                    </div>
                                    <div>
                                        <div style={{ marginBottom: 10 }}>
                                            <span style={{ fontSize: 14 }}>Payment by certified cheque or bank draft</span>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <Button
                                        variant="outline-primary"
                                        size="lg"
                                        onClick={this.props.nextStep}>
                                        Continue with Cash
                                    </Button>
                                </div>
                            </Paper>
                        </div>
                        
                    </Col>
                    <Col>
                        <CarSelectionSidebar />
                    </Col>
                </Row>
            </div>
          );
    }
}
 
export default PaymentMethod;