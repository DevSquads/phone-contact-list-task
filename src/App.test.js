import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContactDetail from './components/ContactDetail';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  it('starts with a count of 0', () => {
    const component = shallow(<App />);
    expect(component.find(ContactDetail)).toHaveLengthOf(1);
  });
});