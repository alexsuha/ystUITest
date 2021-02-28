import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';

//components
import OptionCard from '../OptionCard';
import CarSelectionSidebar from '../CarSelectionSidebar';
import ServiceTabs from '../ServiceTabs';

//icons
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: "#e9ecef",
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 10
    },

    title: {
        fontSize: 14,
        marginBottom: 8
    },

    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: "100vh"
    }
}));



function PaymentMethod(props) {
    const { tabValue, onTabChange, nextStep, onPaymentWithFinance } = props;
    const classes = useStyles();
    const financeDescription = [
        { id: 0, value: "Eligible for no payments for up to 90 days" },
        { id: 1, value: "Loans provided by Canada's largest banks" },
        { id: 2, value: "Lowest interest rates available" },
        { id: 3, value: "Customize your loan's terms from home" },
        { id: 4, value: "Payback in full at any time with no penalty" }
    ]

    const cashDescription = [
        { id: 0, value: "Payment by certified cheque or bank draft" }
    ]

    return <div>
        <ServiceTabs
            tabValue={tabValue}
            onTabChange={onTabChange}
        />
        <Row>
            <Col md={9} className={classes.body}>
                <div className={classes.title}>
                    What is your payment method?
                </div>
                <div className={classes.cardContainer}>
                    <OptionCard
                        icon={<AccountBalanceIcon style={{ fontSize: 90 }} />}
                        title="Finance with us"
                        description={financeDescription}
                        buttonText="Continue with finance"
                        onClick={onPaymentWithFinance}
                        showLabel={true}
                    />
                    <OptionCard
                        icon={<MonetizationOnIcon style={{ fontSize: 90 }} />}
                        title="Pay with cash"
                        description={cashDescription}
                        buttonText="Continue with cash"
                        onClick={nextStep}
                        showLabel={false}
                    />
                </div>
            </Col>
            <Col>
                <CarSelectionSidebar />
            </Col>
        </Row>
    </div >
}

export default PaymentMethod;