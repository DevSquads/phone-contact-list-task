import React from "react";
import { shallow } from "enzyme";
import ContList from "./ContList";

describe("<ContList />", () => {
  it("should renders 6 Div area", () => {
    const ListItem = shallow(<ContList />);
    expect(ListItem.find("div").length).toEqual(6);
  });
  it("should renders image tag with imgCircle class", () => {
    const ListItem = shallow(<ContList />);
    expect(ListItem.find("img.imgCircle").length).toEqual(1);
  });
  it("should renders name h6 tag with imgCircle class", () => {
    const ListItem = shallow(<ContList />);
    expect(ListItem.find("h6").length).toEqual(1);
  });
});
