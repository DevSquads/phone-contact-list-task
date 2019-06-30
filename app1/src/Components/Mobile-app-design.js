import React from 'react';
import './Mobile-app-design.css';
import ContactListing from './Contact-listing';
const MobileApp = (props) => {
    const { data } = props;
    return (
        <div className="Mobile" >
            <div className="mobile-speaker"></div>
            <div className="mobile-camera"></div>
            <div className="mobile-screen">
                <ContactListing key={data[0].Id + data[1].Id} data={data} />
            </div>
            <div className="mobile-Button"></div>
        </div>
    );
}


export default MobileApp;
