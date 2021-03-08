import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateUserProfile } from '../../store/actions/auth';

import './styles.css';

const ProfileTab = ({auth, updateUserProfile}) => {
    const p2 = {
        width: '90%',
        margin: '12px 0',
    }

    const p3 = {
        padding: '12px !important',
        borderRadius: '0 !important',
        width: '48%',
        marginRight: '4%',
        fontSize: '18px',
    }

    const p4 = {
        padding: '12px !important',
        borderRadius: '0 !important',
        width: '48%',
        fontSize: '18px',
    }

    const p5 = {
        padding: '12px !important',
        borderRadius: '0 !important',
        fontSize: '18px',
        width: '100%',
    }

    const p6 = {
        padding: '12px',
        border: '1px solid #ccc',
        color: '#666',
        background: '#eee',
    }

    const p7 = {
        width: '30%',
        height: '50px',
    }

    const pd = {
        width: '90%',
    }

    function getCurrentUser() {
        let user = auth.userProfile;
        //console.log("profiletab");
        //console.log(user);
        return user;
      }

    const [firstname, setFirstname] = useState(getCurrentUser().firstname);
    const [lastname, setLastname] = useState(getCurrentUser().lastname);
    const [address, setAddress] = useState(getCurrentUser().address);
    const [phonenumber, setPhonenumber] = useState(getCurrentUser().phone);
    const [email, setEmail] = useState(getCurrentUser().email);

    const handleFNInput = (e) => {
		setFirstname(e.target.value);
    }
    
    const handleLNInput = (e) => {
		setLastname(e.target.value);
    }
    
    const handleADInput = (e) => {
		setAddress(e.target.value);
    }
    
    const handlePNInput = (e) => {
		setPhonenumber(e.target.value);
    }
    
    const handleEMInput = (e) => {
		setEmail(e.target.value);
    }
    
    function updateProfile() {
        let user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            address: address,
            phone: phonenumber,
        }
        updateUserProfile(user);
    }

    return (
        <div id="profile">
            <div class="profile-tab-area">
                <div class="profile-info">
                    <strong class="title">{firstname}'s Profile</strong>
                    <div class="user-image">
                        <img src={getCurrentUser().imgurl ? getCurrentUser().imgurl : require(`../../static/profile.png`)} />
                    </div>
                </div>
                <div class="wrap">
                    <div class="profile-block">
                        <div class="field-detail">
                            <strong class="title">Personal Information</strong>
                            <div class="field-slide">
                                <div class="profile-field">
                                    <label for="f-name">First Name</label>
                                    <div class="field">
                                        <input type="text" id="f-name" class="form-control" placeholder="First Name" value={firstname} onChange={handleFNInput}/>
                                    </div>
                                </div>
                                <div class="profile-field">
                                    <label for="l-name">Last Name</label>
                                    <div class="field">
                                        <input type="text" id="l-name" class="form-control" placeholder="Last Name" value={lastname} onChange={handleLNInput}/>
                                    </div>
                                </div>
                            </div>
                            <div class="field-slide">
                                <div class="profile-field">
                                    <label for="address">Address</label>
                                    <div class="field">
                                        <input type="text" id="address" class="form-control" placeholder="Address" value={address} onChange={handleADInput}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field-detail">
                            <strong class="title">Contact Information</strong>
                            <div class="field-slide">
                                <div class="profile-field">
                                    <label for="phone">Phone Number</label>
                                    <div class="field">
                                        <input type="tel" id="phone" class="form-control" placeholder="Phone Number" value={phonenumber} onChange={handlePNInput}/>
                                    </div>
                                </div>
                            </div>
                            <div class="field-slide">
                                <div class="profile-field">
                                    <label for="email">E-mail</label>
                                    <div class="field">
                                        <input type="email" id="email" class="form-control" autocomplete="off" value={email} onChange={handleEMInput}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a onClick={updateProfile} class="save-btn btn-primary">Save</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(
    state => ({
      auth: state.authReducer,
    }),
    {updateUserProfile},
  )(withRouter(ProfileTab));
