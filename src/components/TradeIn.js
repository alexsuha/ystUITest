import React, { Component } from 'react';
import { Tabs, Tab, Row, Col, Button } from 'react-bootstrap';
import CarSelectionSidebar from './CarSelectionSidebar.js'

class TradeIn extends Component {
    state = {  }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() { 

        return ( 
            <div style={{paddingTop: 20, minHeight: "100vh"}}>
                <div>
                    <Tabs defaultActiveKey="trade-in">
                        <Tab eventKey="trade-in" title="1. Trade-in" ></Tab>
                        <Tab eventKey="cash-finance" title="2. Cash/Finance"></Tab>
                        <Tab eventKey="delivery-methods" title="3. Delievery method" disabled></Tab>
                        <Tab eventKey="review-payment" title="4. Review & Payment" disabled></Tab>
                    </Tabs>
                </div>

                <Row style={{ height: "100vh" }}>
                    <Col md={9} style={{ backgroundColor: "#e9ecef" }}>
                        <div className="trade-in-container">
                            <div className="trade-in-description" style={{paddingBottom: 20}}>
                                <h4>Save time and money by selling us your old car as part of your purchase</h4>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", width: 300}}>
                                <div style={{marginBottom: 10}}>We make you a firm offer</div>
                                <div style={{marginBottom: 10}}>Reduce your car payments</div>
                                <div style={{marginBottom: 10}}>Get tax savings</div>
                                <div>Effortless process</div>
                                <br />
                                <Button variant="primary" size="lg">Get offer</Button>
                                <br />
                                <Button 
                                variant="outline-primary"
                                size="lg"
                                onClick={this.continue}>
                                I don't have a trade-in
                                </Button>
                            </div>
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
 
export default TradeIn;