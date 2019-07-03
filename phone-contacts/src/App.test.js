import React from 'react';
import ReactDOM from 'react-dom';
import { render, mount } from 'enzyme';
import ContactList from './components/contact-list';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('App component', () => {
  it('should have 1 <contactList/> ', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(ContactList)).toBeTruthy();
    expect(wrapper.find(ContactList).length).toBe(1);
  });
});
