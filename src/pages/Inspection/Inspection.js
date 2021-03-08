import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import $ from 'jquery'
import * as API from '../../services/api';
import InspectionTD from '../../components/InspectionTD';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Inspection = ({
    productDetails,
}) => {

    const { product } = productDetails;

    const handleOwlImagePrev = () => {
        childRef.current.prev();
    }

    const handleOwlImageNext = () => {
        childRef.current.next();
    }

    const childRef = useRef();

    const handleBack = () => {
        window.history.back();
    }

    const [roadtest,setRoadtest]=useState([]);
	const [exinterior,setExinterior]=useState([]);
	const [chassis,setChassis]=useState([]);

	const getData=(filename, callback)=>{
        if (product === null)
        {
            return;
        }

        fetch(`${API.CDNADDR}/${product.uuid}/${filename}`
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            if(callback) callback(myJson)
        });
    }

    window.scrollTo(0, 0)
	
	useEffect(() => {	 
		if (roadtest.length === 0) {
			getData("ex_interior.json",setExinterior);
			getData("chassis.json",setChassis);
			getData("roadtest.json",setRoadtest);
		}
    }, [])

    const tabActive = [ true, false, false ];

    const handleTabChange = (e) => {
        for (let i = 0; i < 3; ++i)
        {
            tabActive[i] = false;
        }
        tabActive[e] = true;
        for (let i = 0; i < 3; ++i)
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
                $(`#tab${i+1}`).addClass("js-tab-hidden");
                $(`#t${i+1}`).removeClass("active");
            }
        }
    }

    return (
        product && (
        <div class="main">
            <div class="product-spec-area">
				<div class="container">
					<div class="heading-area">
						<a onClick={handleBack} class="back-btn">Back to Vehicle Details</a>
						<span class="point">170 Point Inspection Checklist</span>
					</div>
					<strong class="name">{product.name}</strong>
					<div class="wrap">
						<ul class="product-modal-info">
							<li class="vin">
								<strong class="title">VIN:</strong>
								<span class="text">{product.uuid}</span>
							</li>
							<li class="stock">
								<strong class="title">Stock #:</strong>
								<span class="text">{product.stocknumber}</span>
							</li>
							<li class="inspected">
								<strong class="title">Inspected on:</strong>
								<span class="text">{product.inspectdate}</span>
							</li>
						</ul>
						<div class="vehicle-info-block">
							<strong class="title">Information from Vehicle Identification Number:</strong>
							<ul class="vehicle-info-list">
								<li><span class="text">No reported accidents/flood damage/salvage</span></li>
								{/* <li><span class="text">Brakes left 50%</span> <span class="text">Tires left 50%</span></li> */}
								<li><span class="text">Car vacuumed and detailed, fully disinfected and sanitized</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
            <div class="product-report-area">
				<div class="container">
					<ul class="tabset">
						<li id="t1" class="active">
							<a onClick={() => {handleTabChange(0)}}>
								<span class="icon-holder">
									<i class="icon-carnex_website_icons-08"></i>
									{/* <span class="num">3</span> */}
								</span>
								<span class="text">In/Out Report</span>
							</a>
						</li>
						<li id="t2">
							<a onClick={() => {handleTabChange(1)}}>
								<span class="icon-holder">
									<i class="icon-carnex_website_icons-09"></i>
								</span>
								<span class="text">Test Drive Report</span>
							</a>
						</li>
						<li id="t3" >
							<a onClick={() => {handleTabChange(2)}}>
								<span class="icon-holder">
									<i class="icon-carnex_website_icons-10"></i>
								</span>
								<span class="text">Chassis Report</span>
							</a>
						</li>
					</ul>
                    <div class="tab-content report-slider">
						<div id="tab1" class="active">
                        {(exinterior.length > 0) && (<div>
                            <div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Body Panel (16 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 0; i < 8; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 8; i < 16; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
							</div>
							<div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Lights and Mirrors (16 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 16; i < 24; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 24; i < 32; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
							</div>
							<div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide-head">
										<h3>Glass/Windshield (8 PTS)</h3>
										<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
									</div>
									<ul class="list-detail">
                                    {(() => {
                                            let rows = [];
                                            for (let i = 32; i < 36; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
									</ul>
								</div>
								<div class="report-slider-col">
									<div class="slide-head">
										<h3></h3>
										<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
									</div>
									<ul class="list-detail">
                                    {(() => {
                                            let rows = [];
                                            for (let i = 36; i < 40; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
									</ul>
								</div>
							</div>
							<div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide-head">
										<h3>Rims/Tires (12 PTS)</h3>
										<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
									</div>
									<ul class="list-detail">
                                    {(() => {
                                            let rows = [];
                                            for (let i = 40; i < 46; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
									</ul>
								</div>
								<div class="report-slider-col">
									<div class="slide-head">
										<h3></h3>
										<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
									</div>
									<ul class="list-detail">
                                    {(() => {
                                            let rows = [];
                                            for (let i = 46; i < 52; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
									</ul>
								</div>
							</div>
							<div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide-head">
										<h3>Interior Functions (43 PTS)</h3>
										<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
									</div>
									<ul class="list-detail">
                                    {(() => {
                                            let rows = [];
                                            for (let i = 52; i < 74; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
									</ul>
								</div>
								<div class="report-slider-col">
									<div class="slide-head">
										<h3></h3>
										<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
									</div>
									<ul class="list-detail">
                                    {(() => {
                                            let rows = [];
                                            for (let i = 74; i < 95; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
									</ul>
								</div>
                            </div>
                            <div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Trims (11 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 95; i < 101; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 101; i < 106; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
							</div>
							<div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Accessory (6 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 106; i < 109; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Fixed</span>
											<span class="status-text">Passed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 109; i < 112; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={exinterior[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
                                </div>
							</div>
                        </div>)}
						</div>
                        {/* tab2 */}
                        <div id="tab2" class="js-tab-hidden">
                        {roadtest.length > 0 && (<div>
                            <div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Engine (9 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 0; i < 5; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={roadtest[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 5; i < 9; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={roadtest[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
							</div>
                            <div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Transmission (6 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 9; i < 12; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={roadtest[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 12; i < 15; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={roadtest[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
							</div>
                            <div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Steering&Brakes (13 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 15; i < 22; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={roadtest[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 22; i < 28; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={roadtest[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
							</div>
                        </div>)}
                        </div>
                        {/* tab3 */}
                        <div id="tab3" class="js-tab-hidden">
                        {chassis.length > 0 && (<div>
                            <div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Underneath (10 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 0; i < 5; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={chassis[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 5; i < 10; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={chassis[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
							</div>
                            <div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Fluids (10 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 10; i < 15; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={chassis[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 15; i < 20; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={chassis[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
							</div>
                            <div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Suspension (4 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 20; i < 22; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={chassis[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 22; i < 24; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={chassis[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
							</div>
                            <div class="report-slider-row">
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3>Exhaust&Electrical (6 PTS)</h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 24; i < 27; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={chassis[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
								<div class="report-slider-col">
									<div class="slide">
										<div class="slide-head">
											<h3></h3>
											<span class="info-text">Passed</span>
											<span class="status-text">Fixed</span>
										</div>
										<ul class="list-detail">
                                        {(() => {
                                            let rows = [];
                                            for (let i = 27; i < 30; i++) {
                                                rows.push(
                                                    <InspectionTD id={i+1} element={chassis[i]} />
                                                    );
                                            }
                                            return rows;
                                                    })()
                                        }
										</ul>
									</div>
								</div>
							</div>
                            </div>)}
                        </div>
					</div>
                </div>
            </div>
            <div class="product-slider-area">
                <div class="container">
                    <button class="slick-prev slick-arrow" aria-label="Previous" type="button" onClick={handleOwlImagePrev}>Previous</button>
                    <OwlCarousel ref={childRef} className='product-slider' loop margin={5} items={4} nav>
                        <div class="slide">
                            <div class="block">
                                <div class="image-holder">
                                    <a data-fancybox="gallery01" href={`${API.CDNADDR}/${product.uuid}/imspection1.png`}><img src={`${API.CDNADDR}/${product.uuid}/imspection1.png`} alt="image-description"/></a>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="block">
                                <div class="image-holder">
                                    <a data-fancybox="gallery01" href={`${API.CDNADDR}/${product.uuid}/imspection2.png`}><img src={`${API.CDNADDR}/${product.uuid}/imspection2.png`} alt="image-description"/></a>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="block">
                                <div class="image-holder">
                                    <a data-fancybox="gallery01" href={`${API.CDNADDR}/${product.uuid}/imspection3.png`}><img src={`${API.CDNADDR}/${product.uuid}/imspection3.png`} alt="image-description"/></a>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="block">
                                <div class="image-holder">
                                    <a data-fancybox="gallery01" href={`${API.CDNADDR}/${product.uuid}/imspection4.png`}><img src={`${API.CDNADDR}/${product.uuid}/imspection4.png`} alt="image-description"/></a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    <button class="slick-next slick-arrow" aria-label="Next" type="button" onClick={handleOwlImageNext}>Next</button>
                </div>
            </div>
       </div>
        )
    )
}

export default connect(
    state => ({
        productDetails: state.productDetailsReducer,
    }), null,)(withRouter(Inspection));
