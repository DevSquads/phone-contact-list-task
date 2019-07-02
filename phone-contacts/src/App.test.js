import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ContactList from './components/contact-list';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    console.log("FFFFFFFFFFFFFFFFFFFFF", wrapper)
    expect(wrapper.find('ContactList')).toHaveLengthOf(1);
  });
});
