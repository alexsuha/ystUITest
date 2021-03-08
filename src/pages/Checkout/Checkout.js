import React from 'react'
import CheckoutForm from '../../components/CheckoutForm';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const PUBLISHABLE_KEY='pk_test_51HyIIPJwv58HY3aFvDwGAeIlpLU53ZWTiT3vy4va1TlFSbd4ZrRHtYk6MZfOIQ2i5HI1UVChx0D9Y1i7f5KJkB57003JhRjurT';
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
