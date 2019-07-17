// Libraries Imports
import "react-native";
import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

// Component to bes tested
import MainContactsScreen from "../src/Components/MainContactsScreen";

// Testing the MainContactsScreen is rendered correctly.
describe("MainContactsScreen component rendering", () => {
  test("should render correctly", () => {
    const wrapper = shallow(<MainContactsScreen />);
    expect(wrapper.exists()).to.equals(true);
  });
});

// Testing input changeText event.
describe("Input change event should be fired", () => {
  const wrapper = shallow(<MainContactsScreen />);
  wrapper.find("TextInput").simulate("changeText", "Ahmed Hatem");
  expect(wrapper.state("search")).to.equal("Ahmed Hatem");
});

// Testing onPress event to change the icon according to the value of searchBarFocused.
describe("Icon onPress event should be fired", () => {
  const wrapper = shallow(<MainContactsScreen />);
  wrapper.find("Icon").simulate("onPress");
  expect(wrapper.state("searchBarFocused")).to.equal(false);
});

// Testing onPress event to dismiss the keyboard from the screen.
describe("TouchableWithoutFeedback onPress event should be fired", () => {
  const wrapper = shallow(<MainContactsScreen />);
  wrapper.find("TouchableWithoutFeedback").simulate("onPress");
  expect(wrapper.state("searchBarFocused")).to.equal(false);
});
