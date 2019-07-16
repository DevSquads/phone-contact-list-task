import React from 'react';
import SearchText from './SearchText';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe("should adjust value and get it", () => {

    test('Render element',()=>{
        let component=shallow (<SearchText />);
        expect(component.find('#SearchID')).toHaveLength(1);
    });
    test('Test input value',()=>{
        const component=shallow (<SearchText />);
        const input = component.find('input');
        const text=input.text();
        console.log(text);
        input.value = 'giraffe'
        const text2=input.value;
        expect(text2).toEqual('giraffe');
        });

});