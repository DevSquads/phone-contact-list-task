import React from 'react';
import Contact from './Contacts';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe("should render element", () => {

    test('Render element',()=>{
        let component=shallow (<Contact />);
        expect(component.find('.SingleContact')).toHaveLength(1);
    });


});