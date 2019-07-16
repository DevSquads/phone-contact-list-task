import React, { Component } from 'react';
import Contact from "./Contacts";
import SearchText from "./SearchText";
import '../Style/ContactList.css';

const CONTACTS = [
    {
        id: 1,
        name: 'Natarajah',
        phoneNumber: '0938073320',
        image: 'http://accounts-cdn.9gag.com/media/avatar/14368888_100_1.jpg'
    },
    {
        id: 2,
        name: 'Krot',
        phoneNumber: '0945565655',
        image: 'http://forums.animeboston.com/download/file.php?avatar=11355_1455595397.png'

    },
    {
        id: 3,
        name: 'Mandala',
        phoneNumber: '0975149873',
        image: 'http://avatars-cdn.9gag.com/avatar/erickson8903_14899765_100.jpg'
    },
    {
        id: 4,
        name: 'Shiva',
        phoneNumber: '0638546385',
        image: 'https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg'
    },
    {
        id: 5,
        name: 'Ashvattha',
        phoneNumber: '0506549879',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg'
    },
    {
        id: 6,
        name: 'Tomas Kennedy',
        phoneNumber: '0505549879',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg'
    },
    {
        id: 7,
        name: 'Enrique',
        phoneNumber: '0506549899',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg'
    }
    ,
    {
        id: 8,
        name: 'Darnell',
        phoneNumber: '0506549100',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg'
    }
];


class ContactList extends Component {

    constructor(props) {
        super(props)
        this.state ={
            displayedContacts: CONTACTS
        }
        this.searchHandler=this.searchHandler.bind(this);
    }

    searchHandler (event) {
        let searcjQery = event.target.value.toLowerCase(),
            displayedContacts = CONTACTS.filter((el) => {
                let searchValue = el.name.toLowerCase();
                return searchValue.indexOf(searcjQery) !== -1;
            });
        this.setState({
            displayedContacts: displayedContacts
        })
    };
    render () {
        let contacts = this.state.displayedContacts;
        console.log(contacts);
        return (
            <div id="ContactBox">
                <div id="PhoneList">
                     <div id="topmenu">
                        <SearchText searchHandler={this.searchHandler}/>
                </div>
                <div className="ScrollDiv">
                    {
                        contacts.map((el) => {
                            return <Contact key={el.id}
                                            name={el.name}
                                            image={el.image}
                                            phone={el.phoneNumber}
                            />
                        })
                    }
                </div>

                </div>
            </div>
        )
    };

}

export default ContactList;