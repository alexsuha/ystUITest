import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

import './styles.css';
import $ from 'jquery';
import { likeProduct, unlikeProduct } from '../../store/actions/liked';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../store/actions/cart';

const Product = ({
  product,
  likeProduct,
  unlikeProduct,
  addProductToCart,
  removeProductFromCart,
  liked,
  cart,
}) => {
//   const { id, name, price, image, shortDescription, description } = product;
  const { name, saleprice, mdspprice, imgurl, uuid, mileage, trim, discount, inspector, issold, isbooked } = product;

  function checkLiked() {
    let islike =
        (liked.likedProducts.length > 0 &&
        (liked.likedProducts.find(p => p.uuid === product.uuid) !== undefined));
    console.log(islike);
    console.log(liked.likedProducts.find(p => p.uuid === product.uuid));
    return islike;
}
 
  const getMainClass = () => {
     let mainClass = "latest-product-block like-block";
     if (issold || isbooked) {
       mainClass += " sold";
     }

     if (product.discount > 0) {
       mainClass += " offer";
     }

     if (checkLiked())
     {
       mainClass += " like-active"
     }

     return mainClass;
  }

  const numberWithCommas = (x) => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

  useEffect(() => {

  }, []);

  const handleCloseLiked = () => {
    document.body.classList.remove("favourite-modal-active");
  }


  return (
        <Col style={{padding: "2px 5px 2px 5px"}} xs={{ span: 3 }} sm={{ span: 4 }} md={{ span: 3 }} lg={{ span: 4 }} xl={{ span: 1 }}>
          <div class={getMainClass()}>
            <div class="image-holder">
              <a href={`#product-details/${uuid}`} onClick={handleCloseLiked}>
                <img src={imgurl} alt="image-description"/>
              </a>
              <a class="like"><i class={checkLiked() ? "icon-heart" : "icon-heart-o"}></i></a>
              <span class="offer-badge">${discount} OFF</span>
              <div class="status-wrap">
                  <a href={`#product-details/${uuid}`} onClick={handleCloseLiked}>
                    <span class="brand-logo">
                        <img src={require(`../../static/logo-white.svg`)} alt="Carnex"/>
                    </span>
                    {issold ? (<span class="text" style={{fontSize: "18px"}}>SOLD</span>) : (<span class="text">SOLD<br/> PENDING</span>)}
                  </a>
              </div>
            </div>
            <div class="description">
              <strong class="name" style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>{name} <span class="version">{`${trim}`}</span></strong>
              <div class="info-area">
                <div class="info-wrap">
                  <span class="running">{`${numberWithCommas(mileage)}`}</span>
                  <span class="sub-text">Kilometers</span>
                </div>
                <div class="price-wrap">
                  <strong class="price">{`$${numberWithCommas(saleprice - discount)}`}</strong>
                  <span class="sub-price">{`EST $${mdspprice}/mo`}</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        /* <div className="col-lg-3 col-md-4 col-12">           
            <div className="single-product ribbon">
                {(issold || isbooked) ? (<div className="product-img overlay">
                      <img className="default-img" src={imgurl} alt="#"/>
                      <div className="sold d-flex align-items-center justify-content-center">
                          {issold ? "SOLD" :
                          "PENDING"}
                      </div>
                </div>) : (
                <>
                 {(discount > 0) &&
                (<div class="wrap">
                      <span class="ribbon6" style={pa}>${discount} OFF</span>
                </div>)}
                <div className="product-img">
                    <a href={`#product-details/${uuid}`}>
                    <img className="default-img" src={imgurl} alt="#"/>
                    {(inspector !== "") && (<div class="img-title">
												<i class="far fa-user-circle"></i>
												Camex Certified
											</div>)}
                    </a>
                </div>
                </>
                )}
                <div className="product-content">
                    <div className="d-flex">
                        <h3 className="pr-2"><a href={`#product-details/${uuid}`}>{name}</a></h3>
                        <div style={pb}><span className="text-xs pt-1">{`${trim}`}</span></div>
                    </div>
                    { (discount > 0) && (
                        <div class="text-right discount">
                          <div><span class="text-md del">${saleprice}</span></div>
                        </div>
                     )}
                    <div className="d-flex justify-content-between align-items-end">
                        <div className="mb-1">
                            <div className="text-md"><span>{`${mileage}`}</span></div>
                            <div><span className="text-xs">Kilometers</span></div>
                        </div>
                        <div className="product-price text-right">
                            <div><span>{`$${saleprice - discount}`}</span></div>
                            <div><p>{`EST $${mdspprice}/mo`}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */
  );
};

export default connect(
  state => ({
    liked: state.likedReducer,
    cart: state.cartReducer,
  }),
  {
    likeProduct,
    unlikeProduct,
    addProductToCart,
    removeProductFromCart,
  },
)(Product);
