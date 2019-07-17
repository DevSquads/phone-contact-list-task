// Libraries Imports
import "react-native";
import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

// Component to be tested
import NamesList from "../src/Components/NamesList";

// ------- Unit Testing --------

// Testing the NamesList is rendered correctly.
describe("NameList component rendering", () => {
  test("should render correctly", () => {
    const wrapper = shallow(<NamesList />);
    expect(wrapper.exists()).to.equals(true);
  });
});

// Testing if the all names list is rendered when search text is empty.
describe("Search functionality with empty search text", () => {
  const wrapper = shallow(<NamesList />);
  wrapper.setProps({ searchText: "" });
  expect(wrapper.state("list").length).to.eql(24);
});

// Testing if the flatlist renders the list item according to the search text.
describe("Search functionality using correct search text", () => {
  test("Should render only the list item that its name equals to the search text", () => {
    const wrapper = shallow(<NamesList />);
    wrapper.setProps({ searchText: "Ahmed Sami" });
    expect(wrapper.state("list")).to.eql([
      { name: "Ahmed Sami", subtitle: "React Native Developer" }
    ]);
  });
});

// Testing if the user entered any name with any format it will rendered the entered name.
describe("Search functionality with empty search text", () => {
  const wrapper = shallow(<NamesList />);
  wrapper.setProps({ searchText: "aHmeD sAmI" });
  expect(wrapper.state("list")).to.eql([
    { name: "Ahmed Sami", subtitle: "React Native Developer" }
  ]);
});

// Testing if the view of wrong search text is rendered or not.
describe("Search functionality wrong search text", () => {
  const wrapper = shallow(<NamesList />);
  wrapper.setProps({ searchText: "fff" });
  expect(wrapper.find("View").exists()).to.eql(true);
});
