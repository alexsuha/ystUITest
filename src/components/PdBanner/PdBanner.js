import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ModalImg from '../../components/ModalImg';
import * as API from '../../services/api';
import $ from 'jquery';
import { likeProduct, unlikeProduct } from '../../store/actions/liked';
import { setCarId, setCarImg, setCarName } from '../../store/actions/checkout';
import './styles.css';
import StartModal from '../StartModal';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const PdBanner = ({
    product,
    mdsp,
    likeProduct,
    unlikeProduct,
    liked,
    history,
	setCarId,
	setCarImg,
	setCarName,
}) => {

    const pa = {
        color: '#f9693b',
    }

    const pf = {
        width: '100%',
        height: '80%',
    }

    const { name, imgurl, saleprice, carfaxlink, vrlink, mileage, owner, description, inspectdate, inspector,warranty, stocknumber,uuid, issold, isbooked } = product;

    const modalimg1 = `${API.CDNADDR}/${uuid}/car-detail1.png`
    const modalimg2 = `${API.CDNADDR}/${uuid}/car-detail2.png`
    const modalimg3 = `${API.CDNADDR}/${uuid}/car-detail3.png`

    const [showimg, setShowimg] = useState(modalimg1);

    // function toggleLike() {
    //     if (!isLiked()) {
    //         likeProduct(product);
    //         // showToast({ title: 'Notification', text: 'You liked the product.' });
    //     } else {
    //         unlikeProduct(product);
    //         // showToast({ title: 'Notification', text: 'You unliked the product.' });
    //     }
    // }
    
    function isLiked() {
        const isLiked =
            liked.likedProducts.length > 0 &&
            liked.likedProducts.find(p => p.uuid === product.uuid);
        return isLiked;
    }

    const handleCheckout = () => {
		console.log(imgurl);
		setCarId(uuid);
		setCarImg(imgurl);
		setCarName(name);
		//history.push('/checkout');
	}

    useEffect(() => {
        // far unlike
        $("#likebtn").click(function(){
            var heart_class = $(this).find("i").attr("class");
            var n = heart_class.includes("icon-heart-o");
            if (n === false) {
                $(this).find("i").removeClass("icon-heart-o");
                $(this).find("i").addClass("icon-heart");
                unlikeProduct(product);
            } else {
                $(this).find("i").removeClass("icon-heart");
                $(this).find("i").addClass("icon-heart-o");
                likeProduct(product);
            }
        });
    }, []);

    const numberWithCommas = (x) => {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    return (
        <div class="visual-section">
            <div class="visual-area">
                    <div class="large-image">
						{/* <img src={modalimg1} alt="image-description"/>	 */}
                        <iframe height="500px" width="100%" src={`${vrlink}!disablewatermark!hidevehiclehits!hidefeaturetour!hidelivevideo!hideexpandbtn!hideCarousel`} title="SpinCar" allow="fullscreen" scrolling="no" frameborder="none"></iframe>
					</div>
                    
                    <OwlCarousel style={pf} loop margin={5} items={3} nav>
                            <a data-fancybox="gallery" href={modalimg1}><img src={modalimg1} alt="image-description"/></a>
                            <a data-fancybox="gallery" href={modalimg2}><img src={modalimg2} alt="image-description"/></a>
                            <a data-fancybox="gallery" href={modalimg3}><img src={modalimg3} alt="image-description"/></a>
                    </OwlCarousel>
                    
            </div>
            <div class="visual-text-area">
                <div class="product-detail-area">
                    <span class="brand-no">Stock no.: {stocknumber}</span>
                    <div class="heading-area">
                        <div class="wrap">
                            <strong class="name">${numberWithCommas(saleprice)} CAD</strong>
                            <span class="amount">EST ${mdsp.mdsp}/monthly</span>
                            <a class="like" id="likebtn"><i class={isLiked() ? "icon-heart" : "icon-heart-o"}></i></a>
                        </div>
                        <span class="modal">{name}</span>
                    </div>
                    <ul class="product-detail-list">
                        <li><i class="icon icon-carnex_website_icons-04"></i>{numberWithCommas(mileage)} KM</li>
                        <li><i class="icon icon-carnex_website_icons-05"></i>Accident Free <a href={carfaxlink}>(CARFAX Report)</a></li>
                        <li><i class="icon icon-carnex_website_icons-06"></i>{owner} Owners</li>
                        <li><i class="icon icon-carnex_website_icons-07"></i>Warranty ({warranty})</li>
                    </ul>
                    <div class="text-area">
                        <strong class="title">Description</strong>
                        <p>{description}</p>
                    </div>
                </div>
                <div class="user-info-block">
                    <div class="image-holder">
                        <img src={require(`../../static/profile.png`)} alt="image-description"/>
                    </div>
                    <div class="description">
                        <strong class="name">{inspector}</strong>
                        <p>Last inspected this vehicle on <span class="time">{inspectdate}. </span>Feel free to call us anytime.</p>
                    </div>
                </div>
                <ul class="btns-list">
                    <li><a href="#trade" class="btn-primary-outline">Trade My Car</a></li>
                    {(issold || isbooked) ? (<li><h3 style={pa}>Not available now</h3></li>) : (
												    <li><a data-fancybox="tab2" href="#pop1" class="btn-primary lightbox" onClick={handleCheckout}>
                                                        Hold my car                                                 
                                                    </a></li>
                                                )}
                </ul>
            </div>
        </div>
    );
}

export default connect(
	state => ({
        mdsp: state.mdspCalcReducer,
        liked: state.likedReducer,
	}), 
	{
        likeProduct,
        unlikeProduct,
        setCarId,
		setCarImg,
		setCarName,
    },	
)(withRouter(PdBanner));