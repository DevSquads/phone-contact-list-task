import {
  React,
  ReactDOM,
  renderer,
  configure,
  shallow,
  Adapter,
  enzymeSerializer
} from "./test/config";
import App from "./App";
import ContactList from "./Containers/ContactList/ContactList";
configure({ adapter: new Adapter() });
describe("<App/>", () => {
  it("App render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ContactList));
  });
});
