import React from 'react';

//components
import ServiceTabs from '../ServiceTabs';
import CarSelectionSidebar from '../CarSelectionSidebar';

//styles
import { Paper, makeStyles } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: "#e9ecef",
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 10,
        height: '100vh'
    },

    title: {
        fontSize: 14,
        marginBottom: 8
    },

    container: {
        display: "flex",
        marginLeft: 100,
        marginRight: 100
    },

    secondaryContainer: {
        display: "flex",
        justifyContent: "center",
        flex: "1 1 0%"
    },

    paper: {
        display: "flex",
        flexDirection: "column",
        borderRadius: 6,
        height: 450,
        width: 355,
        padding: "45px 24px",

    }
}));

function DeliveryMethod(props) {
    const classes = useStyles();
    const { tabValue, onTabChange } = props;

    return <div>
        <ServiceTabs
            tabValue={tabValue}
            onTabChange={onTabChange}
        />
        <Row>
            <Col md={9} className={classes.body}>
                <div className={classes.title}>Select your delivery time </div>
                <div className={classes.container}>
                    <div className={classes.secondaryContainer}>
                        <Paper className={classes.paper}></Paper>
                    </div>
                </div>

            </Col>
            <Col>
                <CarSelectionSidebar />
            </Col>
        </Row>
    </div >
}
export default DeliveryMethod;