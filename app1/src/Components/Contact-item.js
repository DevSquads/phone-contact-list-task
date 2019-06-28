import React from 'react';
import './Contact-item.css';
const ContactItem = (props) => {
    const { FirstName, SecondName, Id, JobTitle } = props;
    return (
        <>
            <div className="Contact-Item">

                <div id='parent_div_1'>
                    <p class="Img-Name">{FirstName.charAt(0).toUpperCase()}{" "}{SecondName.charAt(0).toUpperCase()}</p>
                </div>

                <div id='parent_div_2'>
                    <p class="Contact-Name">{FirstName}{" "}{SecondName}</p>
                    <p>{JobTitle}</p>
                </div>

            </div>

        </>
    );
}


export default ContactItem;
