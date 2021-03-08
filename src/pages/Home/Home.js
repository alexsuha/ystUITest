// import React, { useEffect, useState, useRef } from 'react';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../../components/Footer';

import './styles.css';

const Home = () => {
  // const [index, setIndex] = useState(0);
  // const [direction, setDirection] = useState(null);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  //   setDirection(e.direction);
  // };

  const handleTipsRequirement = () => {
    if (sendname === "" || sendemail === "") {
        alert("Please fill your name and email, we will contact you soon.");
        return;
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(sendemail) ) {
        alert("invalid email");
        return;        
    } 

    var templateParams = {
      from_name: sendname,
      from_email: sendemail,
	  to_email: "info@carnex.ca",
  };
   
  emailjs.send("service_0rd7w6j", "template_ho6pd46", templateParams)
      .then(function(response) {
         alert("your require has been sent out, we will contact you soon!!!")
      }, function(error) {
         console.log('FAILED...', error);
      });
  }

  const [sendemail, setSendemail] = useState("");
  const [sendname, setSendname] = useState("");

  return (
    <>
        <main class="main">
			<div class="banner-section">
				<div class="banner-area">
					<div class="container">
						<div class="banner-caption">
							<h1>The Best Place to Sell and Buy a Used Car</h1>
							<p>Giving you best prices and quality cars you deserve.</p>
						</div>
						<ul class="btns-list">
							<li><a href="#trade" class="btn-primary-outline">Sell A Car</a></li>
							<li><a href="#products" class="btn-primary">Buy A Car</a></li>
						</ul>
						<div class="banner-image">
							<img src={require(`../../static/img19.png`)} alt="image-description"/>
							<a class="offer-btn">We Offer 170 Point Car Inspection </a>
							<span class="logo">
								<a href="#">
									<img src={require(`../../static/logo.svg`)} alt="Carnex"/>
								</a>
							</span>
					    </div>
                    </div>
				</div>
                <div class="buy-area">
					<div class="container">
						<div class="section-heading-area">
							<h2>How to Buy A Car with Carnex</h2>
							<p>We offer more than just car sales, we have affiliated services to provide you services after your purchase.</p>
						</div>
						<div class="buy-slider">
							<div class="slide">
								<div class="block">
									<div class="image-holder">
										<img src={require(`../../static/img14.png`)} alt="image-description"/>
									</div>
									<div class="description">
										<strong class="title">find your car</strong>
										<p>Browse the entire inventory of our carefully curated and professionally inspected cars online.</p>
										<span class="number">1</span>
									</div>
								</div>
							</div>
							<div class="slide">
								<div class="block">
									<div class="image-holder">
										<img src={require(`../../static/img15.png`)} alt="image-description"/>
									</div>
									<div class="description">
										<strong class="title">book testdrive</strong>
										<p>All our cars are sanitized before and after the test drive, making your experience safe and sound.</p>
										<span class="number">2</span>
									</div>
								</div>
							</div>
							<div class="slide">
								<div class="block">
									<div class="image-holder">
										<img src={require(`../../static/img16.png`)} alt="image-description"/>
									</div>
									<div class="description">
										<strong class="title">worry free delivery</strong>
										<p>Choose to pick up your car from our experience center or let us deliver it to your doorstep.</p>
										<span class="number">3</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="sell-area">
				<div class="container">
					<div class="section-heading-area">
						<h2>How to Sell Your Car with Carnex?</h2>
						<p>We offer more than just car sales, we have affiliated services to provide you services after your purchase.</p>
					</div>
					<div class="wrap">
						<div class="sell-row">
							<div class="sell-col">
								<div class="sell-block">
									<span class="no"></span>
									<strong class="title">Book An Appointment</strong>
									<p>It only takes 2 minutes to book an inspection slot.</p>
								</div>
							</div>
							<div class="sell-col">
								<div class="sell-block">
									<span class="no"></span>
									<strong class="title">Free Car Inspection</strong>
									<p>Our professionals will inspect your car in just 30 minutes*!</p>
								</div>
							</div>
							<div class="sell-col">
								<div class="sell-block">
									<span class="no"></span>
									<strong class="title">Sell Your Car</strong>
									<p>Accept our offer, or bid with Carnex's network of dealers!</p>
								</div>
							</div>
						</div>
						<a href="#trade" class="btn-info">Sell Your Car</a>
					</div>
					<span class="home-img">
						<img src={require(`../../static/img17.png`)} alt="image-description"/>
					</span>
				</div>
			</div>
            <div class="discover-area">
				<span class="bg carnex-home"></span>
				<div class="container">
					<div class="discover-block-wrap">
						<div class="section-heading-area">
							<h2>Discover all that we offer</h2>
							<p>We offer more than just car sales, we have affiliated services to provide you services after your purchase.</p>
						</div>
						<div class="discover-row">
							<div class="discover-col">
								<div class="discover-block">
									<span class="icon-holder">
										<i class="icon icon-carnex_website_icons-35"></i>
									</span>
									<strong class="name">Dedicated Relationship<br/> Manager</strong>
								</div>
							</div>
							<div class="discover-col">
								<div class="discover-block">
									<span class="icon-holder">
										<i class="icon icon-carnex_website_icons-36"></i>
									</span>
									<strong class="name">Trained In-House <br/>Professionals</strong>
								</div>
							</div>
							<div class="discover-col">
								<div class="discover-block">
									<span class="icon-holder">
										<i class="icon icon-carnex_website_icons-37"></i>
									</span>
									<strong class="name">100% Service <br/>Warranty</strong>
								</div>
							</div>
							<div class="discover-col">
								<div class="discover-block">
									<span class="icon-holder">
										<i class="icon icon-carnex_website_icons-38"></i>
									</span>
									<strong class="name">One Stop <br/>Maintenance</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div class="tips-section">
				<div class="container">
					<div class="section-heading-area">
						<h2>Get Car Tips from our Expert</h2>
						<p>We will send you useful tips to your email on a monthly basis, leave us your contact info</p>
					</div>
					<from class="submit-area">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Your Name" value={sendname} onChange={(e) => {	setSendname(e.target.value)}}/>
						</div>
						<div class="form-group email">
							<input type="email" class="form-control" placeholder="Your email address" value={sendemail} onChange={(e) => {	setSendemail(e.target.value)}}/>
							<button type="submit" class="btn-info" onClick={handleTipsRequirement}>Notify <i class="icon icon-carnex_website_icons-39"></i></button>
						</div>
					</from>
				</div>
			</div>
        </main>
        {/* 
        <div className="carnex-gtips">
            <div className="section-title">
                <h2>GET CAR TIPS FROM OUR EXPERT</h2>
                <p style={p1}>WE WILL SEND YOU USEFUL TIPS TO YOUR EMAIL ON A MONTHLY BASIS, LEAVE US YOUR CONTACT INFO.</p>
            </div>
            <div className="text-center" style={pa}>
                <input className="home-nameinput" type="text" name="name" placeholder="Your Name" value={sendname} onChange={(e) => {	setSendname(e.target.value)}}/>
                <input className="home-emailinput" type="eamil" name="email" placeholder="Your Email Address" value={sendemail} onChange={(e) => {	setSendemail(e.target.value)}}/>
                <button className="button-primary home-inputButton" onClick={handleTipsRequirement}>Notify&nbsp;<i class="fas fa-paper-plane"></i></button>
            </div>
        </div> */}
        <Footer />
    </>
  );
};

export default Home;
