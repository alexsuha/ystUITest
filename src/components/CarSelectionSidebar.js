import React, { Component } from 'react';

//icons
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

class CarSelectionSidebar extends Component {
    state = {  }
    render() { 

        return (  
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 15, paddingBottom: 15, borderBottom: 1, borderStyle: "none none solid none", borderColor: "#d8d8d8"}}>
                    <div>
                        <h4>Buy Online</h4>
                        <h5>Car model information</h5>
                        <span>Miles km</span>
                    </div>
                    <div><DriveEtaIcon style={{ fontSize: 90 }}/></div>
                </div>
                <div style={{ paddingTop: 15, paddingBottom: 15, fontSize: 14, borderBottom: 1, borderStyle: "none none solid none", borderColor: "#d8d8d8"}}>
                    <div style={{ paddingBottom: 8}}>Purchase Price</div>
                    <div>Biweekly Payment</div>
                </div>
                <div style={{ paddingTop: 15, paddingBottom: 15, fontSize: 14, borderBottom: 1, borderStyle: "none none solid none", borderColor: "#d8d8d8"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div><VerifiedUserIcon style={{ fontSize: 50}} /></div>
                        <div style={{ marginLeft: 16 }}>90-day / 6,000 km limited warranty</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div><LocalAtmIcon style={{ fontSize: 50 }} /></div>
                        <div style={{ marginLeft: 16 }}>7-day money-back guarantee</div>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default CarSelectionSidebar;