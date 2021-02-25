import React, { Component } from 'react';
import { TextField, Paper } from '@material-ui/core';
import { Tabs, Tab, Row, Col, Button } from 'react-bootstrap';
import CarSelectionSidebar from "../CarSelectionSidebar";

class TradeInVehicle extends Component {
    render() { 
        return (
            <div style={{ paddingTop: 20, minHeight: "100vh" }}>
                <div>
                    <Tabs defaultActiveKey="trade-in">
                        <Tab eventKey="trade-in" title="1. Trade-in" ></Tab>
                        <Tab eventKey="cash-finance" title="2. Cash/Finance"></Tab>
                        <Tab eventKey="delivery-methods" title="3. Delievery method" disabled></Tab>
                        <Tab eventKey="review-payment" title="4. Review & Payment" disabled></Tab>
                    </Tabs>
                </div>

                <Row style={{ height: "100vh" }}>
                    <Col md={9} style={{ backgroundColor: "#e9ecef", display: "flex", justifyContent: "center", paddingTop: 10}}>
                        <div style={{ paddingTop: 16 }}>
                            <Paper elevation={3} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 450, width: 870 }}>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center",width: 715, height: 304}}>
                                    {/* <div>Enter your VIN</div>
                                    <div><TextField/></div>
                                    <div>dropdown</div>
                                    <Button className="primary disabled">Next</Button> */}
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
 
export default TradeInVehicle;