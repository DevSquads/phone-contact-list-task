import React from 'react';
import { configure , shallow} from 'enzyme';
import Contact from "./Contact";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter : new Adapter()});
describe('Contact', ()=> {
    it('should be true' , () =>{
    const  fackContact = { 
      id:1,
      name:"laila Mohamed",
      image:"http://cdn.playbuzz.com/cdn/e6516fc7-27c5-4798-8097-3553691017a2/5cab9b6e-6a4c-4bda-90fe-c8af89826b03.jpg",
      company:"teacher"}
      const wrapper = shallow(<Contact contact={fackContact}/>);
      const name = <p className="nameText">{fackContact.name}</p>;
      expect(wrapper.contains(name)).toEqual(true);
      expect(wrapper.find('p')).toHaveLength(1)
    })
})
 