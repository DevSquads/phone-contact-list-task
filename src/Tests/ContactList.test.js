import React from 'react';
import ContactList from './ContactList';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure,mount } from 'enzyme';

configure({adapter: new Adapter()});

describe("should adjust keywords and trigger onSearch correctly", () => {

    test('Render element',()=>{
        const component=shallow (<ContactList />);
        expect(component.find('#ContactBox')).toHaveLength(1);
    });
    test('Test Search',()=>{
        const component=mount (<ContactList />);
        const input=component.find('input');
        input.simulate('change',{target:{value:'na'}});
    });

});