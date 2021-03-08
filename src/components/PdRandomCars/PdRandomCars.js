import React from 'react'
import { connect } from 'react-redux';
import Product from '../Product';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PdRandomCars = ({
    products: {isLoading, products, hasMoreItems, error},
}) => {
    const p1 = {
        fontSize: '30px',
    }

    const p2 = {
        margin: '0 100px',
    }

    return (
        <div class="latest-product-area">
            <div class="container">
                <h2>You May Also Like</h2>
                     <Row>
                        {products[0] &&
                                    (
                                        <Product product={products[0]}/>   
                                    )}
                        {products[1] &&
                                    (                                        
                                        <Product product={products[1]}/>
                                    )}
                        {products[2] &&
                                    (                                        
                                        <Product product={products[2]}/>
                                    )}
                        {products[3] &&
                                    (                                        
                                        <Product product={products[3]}/>
                                    )}
                     </Row>
                </div>
            </div>
    )
}

export default connect(
    state => ({
        products: state.productsReducer,
    }),
    {},
  )(PdRandomCars);
