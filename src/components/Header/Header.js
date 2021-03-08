import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Product from '../../components/Product';
import Row from 'react-bootstrap/Row';

import './styles.css';

const Header = ({
    location,
    header,
    liked: { likedProducts },
    cart,
    auth,
    history,
    }) => {
    const { pathname } = location;

    useEffect(() => {
        console.log('header useeffect.');
    }, []);

    function getCurrentUser() {
        let user = null;
        user = auth.loginToken ? 'local' : null;
        console.log("header current user");
        console.log(user);
        // console.log(auth.localUser);
        return user;
    }

    const handleProfilePage = () => {
        history.push("/profile");
    }

    return (
        // TODO: modal car like, logo svg(done)
        <header class="header">
            <div class="container">
                <div class="header-holder">
                    <div class="header-left">
                        <strong class="logo">
                            <a href="#"><img src={require(`../../static/logo.svg`)} alt="Carnex"/></a>
                        </strong>
                        <div class="nav-drop">
                            <div class="nav-area">
                                <ul class="menu">
                                    <li class="has-dropdown">
                                        <a href="#products"><i class="icon icon-inventory"></i> Inventory</a>
                                    </li>
                                    <li class="has-dropdown">
                                        <a href="#Trade"><i class="icon icon-sell-a-car"></i> Sell A Car</a>
                                    </li>
                                    <li class="has-dropdown">
                                        <a href="#Finance"><i class="icon icon-financing"></i> Financing</a>
                                    </li>
                                    <li class="has-dropdown">
                                        <a href="#Aboutus"><i class="icon icon-about-us"></i> About Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul class="login-info">
                        <li class="favourite"><a class="favourite-opener"><i class="icon-heart-o"></i></a></li>
                        <li class="user">
                            { !getCurrentUser() ? (
                                <a id="logintable" data-fancybox href="#logintab"><i class="icon-carnex_website_icons-42"></i></a>
                            ) : (
                                <button onClick={handleProfilePage}><i class="icon-carnex_website_icons-42"></i></button>
                            )}
                            {/* <a data-fancybox href="#logintab"><i class="icon-carnex_website_icons-42"></i></a> */}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="favourite-modal">
                <div class="container">
                    <div class="wrap">
                        <div class="favourite-info-section">
                            <h2>CARS YOU LIKED</h2>     
                                    <Row>
                                        {likedProducts.map((product, i) =>
                                            (
                                                <Product product={product} key={i} />
                                            ),
                                        )}
                                    </Row>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        // <header className="header shop">
        //     <div className="header-inner" style={(pathname.includes('/product-details/')) ? {} : pb}>
        // </header>
    );
};
export default connect(
    state => ({
    header: state.headerReducer,
    liked: state.likedReducer,
    cart: state.cartReducer,
    auth: state.authReducer,
    }),
    {},
)(withRouter(Header));