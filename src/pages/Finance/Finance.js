import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'

const Finance = () => {

    // const p1 = {
    //     padding: "70px 0",
    //     background: "#ffda42",
    // }

    // const p2 = {
    //     lineHeight: "25px",
    // }

    // const p3 = {
    //     padding: "70px 200px 70px 200px",
    // }

    // const p4 = {
    //     lineHeight: "28px",
    // }

    // const p5 = {
    //    height: "71px",
    // }

    // const p6 = {
    //     padding: "35px 0",
    // }

    // const p7 = {
    //     width: "75%",
    //     height: "50px",
    // }

    // const p8 = {
    //     lineHeight: "36px",
    // }

    // function calculateMdspInner()
	// {
	// 	var vprice = saleprice
	// 	var down_payment = downpay
	// 	var apr = interestrate
	// 	var term = loanmonth
	// 	var principal = vprice - down_payment;
	// 	var r = apr / 1200;
	// 	var n = term;
	// 	var t = Math.pow(1 + r, n);
	// 	var _mdsp = 0
	// 	if(r) {		
	// 		_mdsp = principal * r * t / (t - 1);
	// 	}
	// 	setMdsp(_mdsp.toFixed(2));
    // }
    
    // const handleIRInput = (e) => {
	// 	setInterestrate(e.target.value);
	// }

	// const handleDPInput = (e) => {
	// 	setDownpay(e.target.value);
	// }

	// const handleLMInput = (e) => {
	// 	setLoanmonth(e.target.value);
    // }
    
    // const handleSPInput = (e) => {
    //     setSaleprice(e.target.value);
    // }

    // const [saleprice, setSaleprice] = useState(0);
	// const [interestrate, setInterestrate] = useState(6.69);
	// const [downpay, setDownpay] = useState(0);
    // const [loanmonth, setLoanmonth] = useState(60);
    // const [mdsp, setMdsp] = useState(0);

    // useEffect(() => {
    //     calculateMdspInner();
    //   }, [saleprice, interestrate, downpay, loanmonth]);

    return (
      <>
        <main class="main">
			<div class="finance-banner-section">
				<div class="container">
					<h2>Finance</h2>
					<div class="wrap">
						<div class="text-area">
							<h1>Financing</h1>
							<p>This option is available to individuals and not businesses. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
						</div>
						<div class="image-holder">
							<div class="iamge-wrap">
								<img src={require(`../../static/img21.png`)} alt="image-description"/>
							</div>
							<a class="btn-info">Coming Soon</a>
						</div>
					</div>
				</div>
			</div>
			<div class="provide-section">
				<div class="container">
					<h2>We provide</h2>
					<div class="provide-row">
						<div class="provide-col">
							<div class="provide-block">
								<span class="icon-holder">
									<i class="icon-carnex_website_icons-22"></i>
								</span>
								<span class="text">Call in and Chat with our advisors</span>
							</div>
						</div>
						<div class="provide-col">
							<div class="provide-block">
								<span class="icon-holder">
									<i class="icon-carnex_website_icons-23"></i>
								</span>
								<span class="text">Customise your payment dates</span>
							</div>
						</div>
						<div class="provide-col">
							<div class="provide-block">
								<span class="icon-holder">
									<i class="icon-carnex_website_icons-24"></i>
								</span>
								<span class="text">Flexible Rates Available</span>
							</div>
						</div>
						<div class="provide-col">
							<div class="provide-block">
								<span class="icon-holder">
									<i class="icon-carnex_website_icons-25"></i>
								</span>
								<span class="text">Notify Approval within 7 Days</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
        <Footer />
        </>
    )
}

export default Finance
