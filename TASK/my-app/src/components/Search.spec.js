import React from 'react';
import {shallow} from 'enzyme';
import Search from './Search';

describe('Search', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Search handleSearchTxt={''}/>));
  
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});