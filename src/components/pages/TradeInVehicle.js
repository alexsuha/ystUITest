import React from 'react';
import {
    makeStyles,
    TextField,
    Paper,
    FormControl,
    Select,
    MenuItem,
    Container,
} from '@material-ui/core';
import { Row, Col, Button } from 'react-bootstrap';

//components
import CarSelectionSidebar from "../CarSelectionSidebar";
import ServiceTabs from '../ServiceTabs';

const useStyles = makeStyles((theme) => ({
    body: {
        height: "100vh"
    },

    col: {
        backgroundColor: "#e9ecef",
        display: "flex",
        justifyContent: "center",
        paddingTop: 26
    },

    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "68px 8%",
        width: "90%",
        height: 450,
        maxWidth: 949,
        margin: "0px auto"
    },

    form: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderRadius: 5,
        zIndex: 100
    },

    btn: {
        width: 300,
        height: 60,
        alignSelf: "center"
    }

}));

function TradeInVehicle(props) {
    const provinces = [
        { label: "Alberta", value: "Alberta" },
        { label: "British Columbia", value: "BritishColumbia" },
        { label: "Manitoba", value: "Manitoba" },
        { label: "New Brunswick", value: "NewBrunswick" },
        { label: "Newfoundland and Labrador", value: "NewfoundlandAndLabrador" },
        { label: "Northwest Territories", value: "NorthwestTerritories" },
        { label: "Nova Scotia", value: "NovaScotia" },
        { label: "Nunavut", value: "Nunavut" },
        { label: "Ontario", value: "Ontario" },
        { label: "Prince Edward Island", value: "PrinceEdwardIsland" },
        { label: "Quebec", value: "Quebec" },
        { label: "Saskatchewan", value: "Saskatchewan" },
        { label: "Yukon", value: "Yukon" },
    ];

    const { tabValue, onTabChange } = props;
    const classes = useStyles();

    return (
        <div className={classes.body}>
            <ServiceTabs
                tabValue={tabValue}
                onTabChange={onTabChange}
            />
            <Row className={classes.body}>
                <Col md={9} className={classes.col}>
                    <Paper elevation={3} className={classes.paper}>
                        <Container className={classes.form}>
                            <div>Enter your VIN</div>
                            <br />
                            <div>
                                <TextField id="outlined-basic" variant="outlined" style={{ width: "100%" }} />
                                <p></p>
                            </div>
                            <div>
                                <FormControl variant="outlined" style={{ width: "100%", marginTop: 12, marginBottom: 12 }}>
                                    <Select defaultValue="Province">
                                        {provinces.map((prov) => (
                                            <MenuItem
                                                value={prov.value}
                                                key={prov.value}
                                            >
                                                {prov.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                            </div>
                            <br />
                            <Button
                                variant="primary"
                                disabled
                                className={classes.btn}
                            >
                                Next
                            </Button>
                        </Container>
                    </Paper>
                </Col>
                <Col>
                    <CarSelectionSidebar />
                </Col>
            </Row>
        </div>
    );
}

export default TradeInVehicle;