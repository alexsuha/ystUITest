import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';

class CarSelectionSidebar extends Component {
    state = {  }
    render() { 
        return (  
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <div>
                        <h4>Buy Online</h4>
                        <h5>Car model information</h5>
                        <span>Miles km</span>
                    </div>
                    <div>
                        {/* Image */}
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div>Purchase Price</div>
                    <br />
                    <div>Biweekly Payment</div>
                </ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
            </ListGroup>
        );
    }
}
 
export default CarSelectionSidebar;