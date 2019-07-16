import React from "react";
import { shallow } from "enzyme";
import SerchBar from "./SerchBar";

describe("<SerchBar />", () => {
  it("should renders 1 Div tag", () => {
    const ListItem = shallow(<SerchBar />);
    expect(ListItem.find("div").length).toEqual(1);
  });
  it("should render 1 input tag", () => {
    const ListItem = shallow(<SerchBar />);
    expect(ListItem.find("input").length).toEqual(1);
  });
});
