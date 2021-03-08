import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loadOrders } from '../../store/actions/order'

import { Redirect } from 'react-router-dom';

import MySpinner from '../../components/MySpinner';
import Order from '../../components/Order';

const HoldCarTab = (
   { 
       orders: {isLoading, orders, error},
       loadOrders, 
    }) => {

    useEffect(() => {
        console.log("holdcartab useeffect");
        loadOrders(null,);
      }, []);

    if (error) return <Redirect to={'/error'} />;
    if (isLoading) return <MySpinner key={0} text={'Loading...'} />;

    return (
        <div class="hold-tab-area">
            <div class="container">
                <div class="text-area">
                    <strong class="title">Vehicles on Hold</strong>
                    <p>Holds are for 72 hours. After your hold is placed, we will contact you within the next 1-2 business days, feel free to contact carnex at <a href="mailto:holdings@carnex.com" class="email">info@carnex.ca</a> or at <a>(647) 812-1067</a> Monday-Saturday 8 a.m. to 8 p.m. We can refund your deposit if you decide not to proceed with the car.</p>
                </div>                   
                    {orders.map((order, i) =>
                    (
                        <Order order={order} key={i} />
                    ),
                )}
            </div>
        </div>
    )
}

export default connect(
    state => ({
        orders: state.orderReducer,
    }),
    { loadOrders },
    )(withRouter(HoldCarTab));
