import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import MySpinner from '../../components/MySpinner'
import PdBanner from '../../components/PdBanner'
import PdWarranty from '../../components/PdWarranty'
import PdGarantee from '../../components/PdGarantee'
import PdInspection from '../../components/PdInspection'
import PdBuyColumn from '../../components/PdBuyColumn'
import Footer from '../../components/Footer';

import { loadProduct } from '../../store/actions/productDetails';

import './styles.css';
import PdRandomCars from '../../components/PdRandomCars'

const ProductDetails = ({
    productDetails,
    loadProduct,
    match,
    location,
  }) => {

    const { pathname } = location;

    const { product, isLoading, error } = productDetails;

    useEffect(() => {
        console.log(`current id : ${match.params.id}`);
        loadProduct(match.params.id);
        // console.log(productDetails.product);
    }, [pathname]);

    if (isLoading) return <MySpinner key={0} text={'Loading...'} />;

    return (
        product && 
        (
        <>
            <main class="main">
                <PdBanner 
                    product = {product}
                    >
                </PdBanner>
                <PdWarranty product={product}/>
                <PdGarantee />
                <PdInspection product={product}/>
                <PdBuyColumn product={product}/>
                <PdRandomCars />
            </main>
            <Footer />
        </>
        )
    );
}

export default connect(
    state => ({
        productDetails: state.productDetailsReducer,
    }), 
    {
        loadProduct,
    },)(withRouter(ProductDetails));