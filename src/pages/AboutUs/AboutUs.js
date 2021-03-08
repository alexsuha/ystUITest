import React, {useEffect} from 'react';
import Footer from '../../components/Footer';
import $ from 'jquery';

import './styles.css';

const AboutUs = () => {

    const p1 = {
        marginBottom: "50px",
    }

    const p2 = {
        listStyleType: "disc",
        paddingLeft: "22px",
    }

    const p3 ={
        minHeight: "172px",
    }

    const p4 = {
        lineHeight: "52px",
    }

    const p5 = {
        borderRadius: "30px 0 0 30px",
    }

    const p6 = {
        borderRadius: "0 30px 30px 0",
    }

    const p7 = {
        minHeight: "204px",
    }

    const p8 = {
        minHeight: "268px",
    }

    const p9 = {
        minHeight: "236px",
    }

    useEffect(() => {
        $("#aboutusTab").find(".active").css("color", "white");
        $("#aboutusTab").find(".active").css("background-color", "#f9693b");
        $("#aboutusTab").find("a").click(function(){
          setTimeout(
            function() 
            {
                $("#aboutusTab").find("a").css("color", "#454F5B");
                $("#aboutusTab").find("a").css("background-color", "white");
              $("#aboutusTab").find(".active").css("color", "white");
              $("#aboutusTab").find(".active").css("background-color", "#f9693b");
            }, 100);
          
        });
      }, []);

    const tabActive = [ false, false ];

    const handleTabChange = (e) => {
        for (let i = 0; i < 2; ++i)
        {
            tabActive[i] = false;
        }
        tabActive[e] = true;
        for (let i = 0; i < 2; ++i)
        {
            if (tabActive[i])
            {
                $(`#tab${i+1}`).removeClass("js-tab-hidden");
                $(`#tab${i+1}`).addClass("active");
                $(`#t${i+1}`).addClass("active");
            }
            else 
            {
                $(`#tab${i+1}`).removeClass("active");
                $(`#t${i+1}`).removeClass("active");
                $(`#tab${i+1}`).addClass("js-tab-hidden");
            }
        }
    }

    return (
    <>
        <main class="main">
			<section class="aboutus-section">
				<div class="container">
					<div class="section-heading-area">
						<h2>ABOUT US</h2>
						<p>Our goal is to create the ultimate car ownership experience where you can sit at home and relax. <br/> Based out of Toronto, serving all of Ontario.</p>
					</div>
					<div class="aboutus-tabs-area">
						<div class="tabset-wrap">
							<ul class="tabset">
								<li id="t1" class="active"><a onClick={() => {handleTabChange(0)}}>Review Buying Process</a></li>
								<li id="t2"><a onClick={() => {handleTabChange(1)}}>Review Selling Process</a></li>
							</ul>
							<span class="note">Please select the buying process you are interested in.</span>
						</div>
						<div class="tab-content">
							<div id="tab1" class="active">
								<div class="review-row">
									<div class="review-col">
										<strong class="heading">BUY FROM CARNEX</strong>
										<div class="review-block-holder">
											<div class="block">
												<a class="like"><i class="icon-heart"></i></a>
												<strong class="title">The Downfall of Regular Service Locations</strong>
												<ul class="list">
													<li>No Return Or Exchange On Vehicle.</li>
													<li>Zero Support After Purchase.</li>
													<li>Confusing Paperwork.</li>
												</ul>
											</div>
											<div class="block">
												<a class="like"><i class="icon-heart"></i></a>
												<strong class="title">Unpredictable Prices</strong>
												<ul class="list">
													<li>Hidden Fees & Sneaky Charges.</li>
													<li>Extremely Overpriced!</li>
													<li>Pushy Salesmen with hidden agendas.</li>
												</ul>
											</div>
											<div class="block">
												<a class="like"><i class="icon-heart"></i></a>
												<strong class="title">The Best Vehicles In North America!</strong>
												<ul class="list">
													<li>170 Inspection Checks On All Vehicles.</li>
													<li>Check Them On Our Carnex Certified Report.</li>
													<li>Get A 180 Day Free Warranty!</li>
												</ul>
											</div>
											<div class="block">
												<a class="like"><i class="icon-heart"></i></a>
												<strong class="title">Service Requests Are Minimal!</strong>
												<ul class="list">
													<li>Condition Too Good For Constant Service.</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="review-col private">
										<strong class="heading">PRIVATE SELLING</strong>
										<div class="review-block-holder">
											<div class="block">
												<span class="smiley"><i class="icon-carnex_website_icons-20"></i></span>
												<strong class="title">The Downfall of Regular Service Locations</strong>
												<ul class="list">
													<li>No Return Or Exchange On Vehicle.</li>
													<li>Zero Support After Purchase.</li>
													<li>Confusing Paperwork.</li>
												</ul>
											</div>
											<div class="block">
												<span class="smiley"><i class="icon-carnex_website_icons-20"></i></span>
												<strong class="title">Unpredictable Prices</strong>
												<ul class="list">
													<li>Hidden Fees & Sneaky Charges.</li>
													<li>Extremely Overpriced!</li>
													<li>Pushy Salesmen with hidden agendas.</li>
												</ul>
											</div>
											<div class="block">
												<span class="smiley"><i class="icon-carnex_website_icons-20"></i></span>
												<strong class="title">Poor Quality Vehicles!</strong>
												<ul class="list">
													<li>Hidden Faults</li>
													<li>Extra Charges To Fix Faults</li>
												</ul>
											</div>
											<div class="block">
												<span class="smiley"><i class="icon-carnex_website_icons-20"></i></span>
												<strong class="title">Poor After Support!</strong>
												<ul class="list">
													<li>No Support After You Buy.</li>
													<li>You Are No Longer A Priority</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="tab2" class="js-tab-hidden">
								<div class="review-row">
									<div class="review-col">
										<strong class="heading">BUY FROM CARNEX</strong>
										<div class="review-block-holder">
											<div class="block">
												<a class="like"><i class="icon-heart"></i></a>
												<strong class="title">CHILL & GET PAID</strong>
												<ul class="list">
													<li>Handled Professionally.</li>
													<li>Rapid Paperwork.</li>
													<li>Instant Cheque Before You Leave.</li>
												</ul>
											</div>
											<div class="block">
												<a class="like"><i class="icon-heart"></i></a>
												<strong class="title">YOUR TIME IS YOUR OWN</strong>
												<ul class="list">
													<li>Stay At Home & We Do It All For You!</li>
												</ul>
											</div>
											<div class="block">
												<a class="like"><i class="icon-heart"></i></a>
												<strong class="title">SAVE MORE MONEY!</strong>
												<ul class="list">
													<li>No Hidden Fees.</li>
													<li>We Buy Out Leased & Financed Cars</li>
													<li>Surprising Offers Available!</li>
												</ul>
											</div>
											<div class="block">
												<a class="like"><i class="icon-heart"></i></a>
												<strong class="title">WE”RE HERE TO HELP YOU!</strong>
												<ul class="list">
													<li>We Do All The Hard Work For You!</li>
													<li>Relax & We’ll Take Care Of You!</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="review-col private">
										<strong class="heading">PRIVATE SELLING</strong>
										<div class="review-block-holder">
											<div class="block">
												<span class="smiley"><i class="icon-carnex_website_icons-20"></i></span>
												<strong class="title">NO PRIVACY</strong>
												<ul class="list">
													<li>Personal Info Exposed.</li>
													<li>Random Strangers Turn Up.</li>
													<li>Vehicle Could Be Stolen.</li>
													<li>Possible Accident With Test Driving.</li>
													<li>Fraud!</li>
												</ul>
											</div>
											<div class="block">
												<span class="smiley"><i class="icon-carnex_website_icons-20"></i></span>
												<strong class="title">AMATURE PLANNING</strong>
												<ul class="list">
													<li>Poor Vehicle Description Skills.</li>
													<li>Struggles To Find Vehicle History.</li>
													<li>Unreliable Timing.</li>
												</ul>
											</div>
											<div class="block">
												<span class="smiley"><i class="icon-carnex_website_icons-20"></i></span>
												<strong class="title">PRICE ISSUES</strong>
												<ul class="list">
													<li>Unwanted Price Reduction To Please The Customer.</li>
													<li>Pulls Out Before Purchase.</li>
													<li>Stalling With Tests & Long, Cash Sales.</li>
												</ul>
											</div>
											<div class="block">
												<span class="smiley"><i class="icon-carnex_website_icons-20"></i></span>
												<strong class="title">LONG TERM EXPENSES!</strong>
												<ul class="list">
													<li>Everyday Use Decreases Value.</li>
													<li>Extra Tax & Insurance.</li>
													<li>Excess Parking.</li>
													<li>Vehicle Could Brake Before You Buy.</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<span class="home-img">
						<img src={require(`../../static/img17.png`)} alt="image-description"/>
					</span>
				</div>
			</section>
		</main>
        <Footer />
    </>
    )
}

export default AboutUs
