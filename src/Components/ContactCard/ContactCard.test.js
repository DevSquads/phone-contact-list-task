import {
  React,
  ReactDOM,
  renderer,
  configure,
  shallow,
  Adapter,
  enzymeSerializer
} from "../../test/config";
import  ContactCard  from "./ContactCard";

configure({ adapter: new Adapter() });
describe("ContactCard render", () => {
  it("should has contactName", () => {
    const wrapper = shallow(<ContactCard />);
    expect(wrapper.find("h2"));
  });
});
