import React, { Component } from 'react';
import { TextField, Paper, FormControl, Select, MenuItem} from '@material-ui/core';
import {  Row, Col, Button } from 'react-bootstrap';

//components
import CarSelectionSidebar from "../CarSelectionSidebar";
import ServiceTabs from '../ServiceTabs';

class TradeInVehicle extends Component {

    handleFormChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        return (
            <div style={{minHeight: "100vh" }}>
                <ServiceTabs
                    tabValue={this.props.tabValue}
                    onTabChange={this.props.onTabChange}
                />
                <Row style={{ height: "100vh" }}>
                    <Col md={9} style={{ backgroundColor: "#e9ecef", display: "flex", justifyContent: "center", paddingTop: 10}}>
                        <div style={{ paddingTop: 16 }}>
                            <Paper elevation={3} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 450, width: 870 }}>
                                <div style={{display: "flex", flexDirection: "column",justifyContent: "space-around",width: 715, height: 304}}>
                                    <div>Enter your VIN</div>
                                    <div>
                                        <TextField id="outlined-basic" variant="outlined" style={{width: "100%"}} />
                                        <p></p>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" style={{ width: "100%", marginTop: 12, marginBottom: 12 }}>
                                            <Select >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        
                                    </div>
                                    <Button className="primary disabled" style={{width: 300, alignSelf: "center"}}>Next</Button>
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