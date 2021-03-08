import React from 'react';
import ProfileTab from '../../components/ProfileTab';
import HoldCarTab from '../../components/HoldCarTab';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import $ from 'jquery';

import {
    logoutLocalUser
} from '../../store/actions/auth';
import './styles.css';
import BookCarTab from '../../components/BookCarTab/BookCarTab';

const Profile = ({
    auth,
    logoutLocalUser,
}) => {

    const tabActive = [ true, false ];

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

    const handleLogout = () => {
        logoutLocalUser(auth.loginToken);
    }

    const { userProfile } = auth;

    return (
        userProfile && (
            <main class="main">
                <div class="account-detail-section">
                    <div class="account-sidebar">
                        <div class="head">
                            <strong class="title">My Account</strong>
                            <strong class="user-name">Hello {auth.userProfile.firstname}</strong>
                        </div>
                        <ul class="tabset">
                            <li id="t1" class="active">
                                <a onClick={() => {handleTabChange(0)}}><i class="icon icon-carnex_website_icons-42"></i>Profile</a>
                            </li>
                            <li id="t2">
                                <a onClick={() => {handleTabChange(1)}}><i class="icon icon-carnex_website_icons-14"></i>Test Drives</a>
                            </li>
                            <li id="t3">
                                <a onClick={() => {handleTabChange(2)}}><i class="icon icon-carnex_website_icons-11"></i>Holds</a>
                            </li>
                        </ul>
                        <span class="logout-btn-wrap">
                        <a onClick={handleLogout} class="logout-btn">Log Out</a>
                    </span>
                    </div>
                    <div class="account-content">
                        <div class="tab-content">
                            <div id="tab1" class="active">
                                <ProfileTab />
                            </div>
                            <div id="tab2" class="js-tab-hidden">
                                <BookCarTab />
                            </div>
                            <div id="tab3" class="js-tab-hidden">
                                <HoldCarTab />
                            </div>
                        </div>
                    </div>
                </div>
            </main>)
        // <div className="main">
		// 			<div className="col-lg-10 col-md-9 tab-content">
        //                 <div className="shadow-div">
        //                     <div className="tab-pane fade show active" id="profiletab" role="tabpanel">
    	// 					    <ProfileTab />
        //                     </div>
        //                     <div className="tab-pane fade p-4" id="drivetab" role="tabpanel">
        //                         <BookCarTab />
        //                     </div>
        //                     <div className="tab-pane fade p-4" id="holdtab" role="tabpanel">
        //                         <HoldCarTab />
        //                     </div>
        //                 </div>
		// 			</div>
		// 		</div>
		// 	</section>
		// </div>)
    )
}

export default connect(
    state => ({
      auth: state.authReducer,
    }),
    { logoutLocalUser },
  )(withRouter(Profile));