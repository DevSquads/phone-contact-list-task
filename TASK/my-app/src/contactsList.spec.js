import React from 'react';
import { shallow } from 'enzyme';
import Contacts from './contactsList';
import Search from './components/Search'
describe('ContactsList', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Contacts />));
  
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render the Search Component', () => {
    expect(wrapper.containsMatchingElement(
      <Search handleSearchTxt={wrapper.instance().state.handleSearchTxt} />
    )).toEqual(true);
  });
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });
});