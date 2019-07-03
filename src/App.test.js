import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import contactList from './contactList';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  it('starts with a count of 0', () => {
    const cas = shallow(<App />);
    expect(cas.find(contactList)).toHaveLengthOf(1);
  });
});