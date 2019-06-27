import React from 'react';
import './Mobile-app-design.css';
import ContactListing from './Contact-listing';
const MobileApp = (props) => {
    return (
        <div class="Mobile" >
            <div class="mobile-speaker"></div>
            <div class="mobile-camera"></div>
            <div class="mobile-screen">
                <ContactListing />
            </div>
            <div class="mobile-Button"></div>
        </div>
    );
}


export default MobileApp;
