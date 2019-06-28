import React from 'react';
import './Contact-item.css';
const ContactItem = (props) => {
    const { FullName, JobTitle } = props;
    return (
        <>
            <div className="Contact-Item">

                <div id='parent_div_1'>
                    <p class="Img-Name">{FullName.split(" ")[0].charAt(0).toUpperCase() + " " + FullName.split(" ")[1].charAt(0).toUpperCase()}</p>
                </div>

                <div id='parent_div_2'>
                    <p class="Contact-Name">{FullName}</p>
                    <p>{JobTitle}</p>
                </div>

            </div>

        </>
    );
}


export default ContactItem;
