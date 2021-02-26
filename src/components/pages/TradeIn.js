import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import CarSelectionSidebar from '../CarSelectionSidebar.js'
import ServiceTabs from '../ServiceTabs.js';

class TradeIn extends Component {
    state = {  }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() { 

        return ( 
            <div style={{minHeight: "100vh"}}>
                <ServiceTabs
                    tabValue={this.props.tabValue}
                    onTabChange={this.props.onTabChange}
                />
                <Row style={{ height: "100vh" }}>
                    <Col md={9} style={{ backgroundColor: "#e9ecef" }}>
                        <div className="trade-in-container">
                            <div style={{paddingBottom: 20}}>
                                <h4>Save time and money by selling us your old car as part of your purchase</h4>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", width: 300}}>
                                <div style={{marginBottom: 10}}>We make you a firm offer</div>
                                <div style={{marginBottom: 10}}>Reduce your car payments</div>
                                <div style={{marginBottom: 10}}>Get tax savings</div>
                                <div>Effortless process</div>
                                <br />
                                <Button 
                                    variant="primary"
                                    size="lg"
                                    onClick={this.onClickTradeInVehicle}>
                                    Get offer
                                </Button>
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