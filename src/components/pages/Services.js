import React, { Component } from 'react';
import { Tabs, Tab, Container, Row, Col, Button} from 'react-bootstrap';
import './Services.css'

class Service extends Component {
    state = {}
    render() {
        return (
            <div className="services-container">
                <div className='services-tabs'>
                    <Tabs defaultActiveKey="trade-in">
                        <Tab eventKey="trade-in" title="1. Trade-in"></Tab>
                        <Tab eventKey="cash-finance" title="2. Cash/Finance" disabled></Tab>
                        <Tab eventKey="delivery-methods" title="3. Delievery method" disabled></Tab>
                        <Tab eventKey="review-payment" title="4. Review & Payment" disabled></Tab>
                    </Tabs>
                </div>

                <Row className="body-wrapper">
                        <Col md={9}>
                            <div className="trade-in-container">
                                <div className="trade-in-description">
                                    <h4>Save time and money by selling us your old car as part of your purchase</h4>
                                </div>
                                <div className="options-container">
                                    <div className="info-text">We make you a firm offer</div>
                                    <div className="info-text">Reduce your car payments</div>
                                    <div className="info-text">Get tax savings</div>
                                    <div>Effortless process</div>
                                    <br />
                                    <Button variant="primary" size="lg" className="get-offer-btn">Get offer</Button>
                                    <br />
                                    <Button variant="outline-primary" size="lg" className="no-trade-in-btn">I don't have a trade-in</Button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <h3>Buy Online</h3>
                        </Col>
                </Row>

            </div>

        );
    }
}

export default Service;