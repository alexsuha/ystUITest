import React from 'react'
import './Footer.css'

import LoginTab from '../../components/LoginTab';

function Footer() {

    return (
		<>
		<LoginTab />
        <footer class="footer">
			<div class="container">
				<div class="footer-holder">
					<div class="footer-nav-col">
						<strong class="title">Explore carnex</strong>
						<ul class="footer-nav">
                                <li><a href="#products">Browse Cars</a></li>
                                <li><a href="#trade">Sell My Car</a></li>
                                <li><a href="#finance">Financing</a></li>
                                <li><a href="#aboutus">About Us</a></li>
						</ul>
					</div>
					<div class="footer-nav-col">
						<div class="contactus-area">
							<strong class="title">Contact Us</strong>
							<ul class="contact-list">
								<li><a href="tel:9055661233"><i class="icon icon-carnex_website_icons-11"></i> (647) 812-1067 </a></li>
								<li>
									<address><i class="icon icon-carnex_website_icons-12"></i>#5-1170 Burnhamthorpe Road, Mississauga, Ontario. L5C4E6</address>
								</li>
								<li><a href="mailto:info@carnex.ca"><i class="icon icon-carnex_website_icons-13"></i> info@carnex.ca</a></li>
							</ul>
						</div>
					</div>
					<div class="footer-nav-col">
						<strong class="title">Business Hour</strong>
						<div class="wrap">
							<i class="icon-carnex_website_icons-14"></i>
							<span class="text">Test Drive Available<br/> by Online Booking </span>
						</div>
						<div class="wrap">
							<i class="icon-carnex_website_icons-15"></i>
							<span class="text">Our Hours</span>
							<span class="text">Weekdays 10 a.m. - 6 p.m.</span>
							<span class="text">Weekends 11 a.m. - 6 p.m.</span>
						</div>
					</div>
					<div class="footer-nav-col">
						<div class="social-media-area">
							<strong class="title">Social Media</strong>
							<ul class="social-media-list">
								<li><a href="https://www.facebook.com/CARNEXca-103282401783051"><i class="icon-facebook"></i></a></li>
								<li><a href="https://www.instagram.com/carnex.ca/"><i class="icon-instagram"></i></a></li>
								<li><a href="https://twitter.com/CANEX69802099"><i class="icon-twitter"></i></a></li>
								<li><a href="https://www.youtube.com/channel/UC8SJL-hikjB8lY0MUysqfjw"><i class="icon-youtube-play"></i></a></li>
							</ul>
							<ul class="terms-list">
								<li><a href="#terms">Terms of Service</a></li>
								<li><a href="#terms">Privacy </a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="copyright-area">
					<span class="copyright">&copy; 2020 Carnex Canada. All rights reserved. Carnex is a proud member of
						<img src={require(`../../static/img13.png`)} alt="image-description"/>
					</span>
					<strong class="logo">
						<a href="#"><img src={require(`../../static/logo.svg`)} alt="Carnex"/></a>
					</strong>
				</div>
			</div>
		</footer>
		</>
    )
}

export default Footer
