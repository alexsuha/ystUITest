import React, { useState, useRef, useEffect } from 'react'
import $ from 'jquery'
import * as API from '../../services/api';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

window.jQuery = $

const PdInspection = ({
	product,
}) => {
   
	const [roadtestsum,setRoadtestsum]=useState([]);
	const [exinteriorsum,setExinteriorsum]=useState([]);
	const [chassissum,setChassissum]=useState([]);
	const { uuid } = product;

	const getData=(filename, callback)=>{
        fetch(`${API.CDNADDR}/${uuid}/${filename}`
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
	
	useEffect(() => {	 
		if (roadtestsum.length === 0) {
			getData("ex_interior_summary.json",setExinteriorsum);
			getData("chassis_summary.json",setChassissum);
			getData("roadtest_summary.json",setRoadtestsum);
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

    const handleOwlImagePrev = () => {
        childRef.current.prev();
    }

    const handleOwlImageNext = () => {
        childRef.current.next();
    }

    const childRef = useRef();

    return (
        <>
        <div class="inspection-area">
            <div class="container">
                <div class="heading-area">
                    <h2>Mechanic’s 170  <br/>Point Inspection</h2>
                    <p>We have a 170 Points Inspection System that makes sure you can be 100% confident with your vehicle purchase.</p>
                </div>
                <div class="inspection-detail-area">
                    <ul class="tabset">
                        <li id="t1" class="active">
                            <a onClick={() => {handleTabChange(0)}}>
                                <span class="icon-holder">
                                    <i class="icon-carnex_website_icons-08"></i>
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
                        <li id="t3">
                            <a onClick={() => {handleTabChange(2)}}>
                                <span class="icon-holder">
                                    <i class="icon-carnex_website_icons-10"></i>
                                </span>
                                <span class="text">Chassis Report</span>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab1" class="active">
                        {(exinteriorsum.length > 0) && (<div class="inspection-list-holder">
                                <ul class="inspection-list">
                                    {(() => {
                                        let rows = [];
                                        for (let i = 0; i < 7; i++) {
                                            rows.push(
                                                (exinteriorsum[i].error > 0) ? (
                                                        <li class="find">
                                                            <div class="title-wrap">
                                                                <strong class="title">{exinteriorsum[i].name}</strong>
                                                            </div>
                                                            <div class="status-wrap">
                                                                <a class="status">{exinteriorsum[i].error} findings </a>
                                                                <span class="status-icon">
                                                                    <i class="icon"></i>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    ) : (
                                                        <li>
                                                            <div class="title-wrap">
                                                                <strong class="title">{exinteriorsum[i].name}</strong>
                                                            </div>
                                                            <div class="status-wrap">
                                                                <a class="status">Passed</a>
                                                                <span class="status-icon">
                                                                    <i class="icon"></i>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    )
                                                );
                                        }
                                        return rows;
                                                })()
                                    }
                                    <li>
                                        <span class="btn-wrap">
                                            <a href="#inspection" class="btn-secondary-outline">Review Entire 170 Point Inspection</a>
                                        </span>
                                    </li>
                                </ul>
							</div>)}
                        </div>
                        <div id="tab2" class="js-tab-hidden">
                            {(roadtestsum.length > 0) && (<div class="inspection-list-holder">
                                <ul class="inspection-list">
                                    {(() => {
                                        let rows = [];
                                        for (let i = 0; i < 3; i++) {
                                            rows.push(
                                                (roadtestsum[i].error > 0) ? (
                                                        <li class="find">
                                                            <div class="title-wrap">
                                                                <strong class="title">{roadtestsum[i].name}</strong>
                                                            </div>
                                                            <div class="status-wrap">
                                                                <a class="status">{roadtestsum[i].error} findings </a>
                                                                <span class="status-icon">
                                                                    <i class="icon"></i>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    ) : (
                                                        <li>
                                                            <div class="title-wrap">
                                                                <strong class="title">{roadtestsum[i].name}</strong>
                                                            </div>
                                                            <div class="status-wrap">
                                                                <a class="status">Passed</a>
                                                                <span class="status-icon">
                                                                    <i class="icon"></i>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    )
                                                );
                                        }
                                        return rows;
                                                })()
                                    }
                                    <li>
                                        <span class="btn-wrap">
                                            <a href="#inspection" class="btn-secondary-outline">Review Entire 170 Point Inspection</a>
                                        </span>
                                    </li>
                                </ul>
							</div>)}
                        </div>
                        <div id="tab3" class="js-tab-hidden">
                             {(chassissum.length > 0) && (<div class="inspection-list-holder">
                                <ul class="inspection-list">
                                    {(() => {
                                        let rows = [];
                                        for (let i = 0; i < 5; i++) {
                                            rows.push(
                                                (chassissum[i].error > 0) ? (
                                                        <li class="find">
                                                            <div class="title-wrap">
                                                                <strong class="title">{chassissum[i].name}</strong>
                                                            </div>
                                                            <div class="status-wrap">
                                                                <a class="status">{chassissum[i].error} findings </a>
                                                                <span class="status-icon">
                                                                    <i class="icon"></i>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    ) : (
                                                        <li>
                                                            <div class="title-wrap">
                                                                <strong class="title">{chassissum[i].name}</strong>
                                                            </div>
                                                            <div class="status-wrap">
                                                                <a class="status">Passed</a>
                                                                <span class="status-icon">
                                                                    <i class="icon"></i>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    )
                                                );
                                        }
                                        return rows;
                                                })()
                                    }
                                    <li>
                                        <span class="btn-wrap">
                                            <a href="#inspection" class="btn-secondary-outline">Review Entire 170 Point Inspection</a>
                                        </span>
                                    </li>
                                </ul>
							</div>)}
                        </div>
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
                                <a data-fancybox="gallery01" href={`${API.CDNADDR}/${uuid}/imspection1.png`}><img src={`${API.CDNADDR}/${uuid}/imspection1.png`} alt="image-description"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="block">
                            <div class="image-holder">
                                <a data-fancybox="gallery01" href={`${API.CDNADDR}/${uuid}/imspection2.png`}><img src={`${API.CDNADDR}/${uuid}/imspection2.png`} alt="image-description"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="block">
                            <div class="image-holder">
                                <a data-fancybox="gallery01" href={`${API.CDNADDR}/${uuid}/imspection3.png`}><img src={`${API.CDNADDR}/${uuid}/imspection3.png`} alt="image-description"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="block">
                            <div class="image-holder">
                                <a data-fancybox="gallery01" href={`${API.CDNADDR}/${uuid}/imspection4.png`}><img src={`${API.CDNADDR}/${uuid}/imspection4.png`} alt="image-description"/></a>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                <button class="slick-next slick-arrow" aria-label="Next" type="button" onClick={handleOwlImageNext}>Next</button>
            </div>
        </div>
        </>
	)
}

export default PdInspection
