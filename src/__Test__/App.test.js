import React from 'react';
import { shallow } from 'enzyme';
import App from '../Components/App';
import ContactsList from '../Components/ContactsList';

describe('App', () => {
  
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the app div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders the ContactsList Component', () => {
    expect(wrapper.containsMatchingElement(<ContactsList />)).toEqual(true);
  });

});
