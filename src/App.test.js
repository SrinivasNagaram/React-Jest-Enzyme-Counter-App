import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  test("render counter component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Counter")).toHaveLength(1);
  });
});
