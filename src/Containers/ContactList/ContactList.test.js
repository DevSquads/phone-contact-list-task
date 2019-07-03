import {
  React,
  ReactDOM,
  renderer,
  configure,
  shallow,
  Adapter,
  enzymeSerializer
} from "../../test/config";
import ContactList from "./ContactList";
import ContactCard from "../../Components/ContactCard/ContactCard";

configure({ adapter: new Adapter() });

describe("ContactList component renders a list of ContactCard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactList />);
  });
  it("renders correctly", () => {
    expect(wrapper.find(ContactCard)).toHaveLength(7);
  });
  it("search functionality", () => {
    const form = wrapper.find("input");
    form.props().onChange({
      target: {
        value: "f"
      }
    });
    expect(wrapper.find(ContactCard)).toHaveLength(2);
  });
});
