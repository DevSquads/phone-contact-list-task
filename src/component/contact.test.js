import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from './contact'

configure({adapter: new Adapter()})

describe(' Contact Component', () =>{
    it('should render completly', () =>{
        const wrapper = shallow(<Contact />)
        expect(wrapper.find('img')).toHaveLength(1)
        expect(wrapper.find('h1')).toHaveLength(1)
        expect(wrapper.find('p')).toHaveLength(1)
    })
})