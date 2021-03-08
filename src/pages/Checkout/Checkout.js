import React from 'react'
import CheckoutForm from '../../components/CheckoutForm';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const PUBLISHABLE_KEY='pk_live_51HyIIPJwv58HY3aFRrKcMcJlTkgEFji13To8G1jfB2JkVX27Yv6PKwaVh6YyCtA7462ZhaqEtgCMNB2yF2WfXOHR00Lf4YuouD';
const stripePromise = loadStripe(PUBLISHABLE_KEY);

const Checkout = ({
    checkoutDetails,
    history,
}) => {

    const { carid, carname, carimg } = checkoutDetails;

    return (
        <Elements options={{ locale: 'en'}} stripe={stripePromise}>
            <CheckoutForm
                carid={carid}
                carname={carname}
                carimg={carimg}
                price={100}
                onSuccessfulCheckout={() => alert("your bill has successfully paid.")}
            />
        </Elements>
    )
}

export default connect(
state => ({
    checkoutDetails: state.checkoutReducer,
}), 
{},)(withRouter(Checkout));
