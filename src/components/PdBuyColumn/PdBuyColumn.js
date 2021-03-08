import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { calculateMdsp } from '../../store/actions/mdspCalc';
import { setCarId, setCarImg, setCarName } from '../../store/actions/checkout';
import Checkout from '../../pages/Checkout';
import BookCheck from '../../pages/BookCheck'
import './styles.css'


const PdBuyColumn = ({
	product,
	mdsp,
	calculateMdsp,
	history,
	setCarId,
	setCarImg,
	setCarName,
}) => {
    
    const pa = {
        color: '#f9693b',
    }
	
	function calculateMdspInner()
	{
		var vprice = saleprice
		var down_payment = downpay
		var apr = interestrate
		var term = loanmonth
		var principal = vprice - down_payment;
		var r = apr / 1200;
		var n = term;
		var t = Math.pow(1 + r, n);
		var _mdsp = 0
		if(r) {		
			_mdsp = principal * r * t / (t - 1);
		}
		calculateMdsp(_mdsp.toFixed(2));
	}

	const { saleprice, uuid, imgurl, name, issold, isbooked } = product;
	const [interestrate, setInterestrate] = useState(6.99);
	const [downpay, setDownpay] = useState(0);
	const [loanmonth, setLoanmonth] = useState(60);

	// const handlePriceInput = (e) => {
	// 	setPrice(e.target.value);
	// }

	const handleIRInput = (e) => {
		setInterestrate(e.target.value);
	}

	const handleDPInput = (e) => {
		setDownpay(e.target.value);
	}

	const handleLMInput = (e) => {
		setLoanmonth(e.target.value);
	}

	const handleCheckout = () => {
		console.log(imgurl);
		setCarId(uuid);
		setCarImg(imgurl);
		setCarName(name);
		//history.push('/checkout');
	}

    useEffect(() => {
        calculateMdspInner();
      }, [saleprice, interestrate, downpay, loanmonth]);

    const childRef = useRef();

    return (
		<div className="car-card">
            <div class="product-detail-row-section">
				<div class="container">
					<h2>Buy This Car</h2>
					<div class="wrap">
						<div class="product-detail-row-holder">
							<div class="product-detail-row">
								<div class="product-detail-col">
									<div class="product-detail-block">
										<div class="wrap">
											<div class="image-holder">
												<img src={require(`../../static/img10.png`)} alt="image-description"/>
											</div>
											<div class="description">
												<strong class="title">At carnex, we help you Finance</strong>
												<p>Complete the paperwork online and we'll deliver your new car. No pressure, no fuss, just convenience.</p>
                                                {(issold || isbooked) ? (<h3 style={pa}>Not available now</h3>) : (
												    <a data-fancybox="tab1" href="#pop1" class="btn-secondary-outline" onClick={handleCheckout}>
                                                        Hold my car                                                    
                                                    </a>
                                                )}
											</div>
										</div>
									</div>
								</div>
								<div class="product-detail-col">
									<div class="product-detail-block">
										<div class="wrap">
											<div class="image-holder">
												<img src={require(`../../static/img11.png`)} alt="image-description"/>
											</div>
											<div class="description">
												<strong class="title">Are you looking to do a trade-in?</strong>
												<p>Answer a few questions about your car and get an instant value. We can deduct your trade in value directly from the cost of this vehicle.</p>
                                                {(issold || isbooked) ? (<h3 style={pa}>Not available now</h3>) : (
												    <a data-fancybox="requesttest" href="#requesttest" class="btn-secondary-outline lightbox">Request Test Drive</a>
                                                )}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="finance-plan-area">
							<h2>Car Loan Payment Estimator</h2>
							<ul class="plan-list">
								<li>
									<strong class="title">Vehicle Price</strong>
									<div class="payment-info">
										<strong class="payment">{`$${saleprice}`}</strong>
									</div>
								</li>
								<li>
									<strong class="title">Interest Rate</strong>
									<div class="payment-info">
                                        <input className="taxinput" type="number" step="0.01" value={interestrate} onChange={handleIRInput}/>
                                        <span style={{width: "15px", padding: "0 0 0 5px"}}>%</span>
									</div>
								</li>
								<li>
									<strong class="title">Down Payment</strong>
									<div class="payment-info">
                                        <input className="taxinput" type="number" step="0.01" value={downpay} onChange={handleDPInput}/>
										<span style={{width: "15px", padding: "0 0 0 5px"}}>$</span>
									</div>
								</li>
								<li>
									<strong class="title">Loan Period (Terms in months)</strong>
									<div class="payment-info">
                                        <input className="taxinput" type="number" step="1" value={loanmonth} onChange={handleLMInput}/>
                                        <span style={{width: "15px", padding: "0 0 0 5px"}}>m</span>
									</div>
								</li>
								<li class="foot">
									<strong class="title">Monthly Payment</strong>
									<div class="payment-info">
										<strong class="payment">{`$${mdsp.mdsp}`}</strong>
									</div>
								</li>
							</ul>
							<a href="#finance" class="go-btn">Go To Finance Plan</a>
						</div>
					</div>
				</div>
			</div>
            <Checkout />
            <BookCheck product={product}/>
        </div>
		)
	}
	
export default connect(
	state => ({
		mdsp: state.mdspCalcReducer,
	}), 
	{
		calculateMdsp,
		setCarId,
		setCarImg,
		setCarName,
	}	
)(withRouter(PdBuyColumn));
