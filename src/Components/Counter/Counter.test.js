import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "./Counter";

configure({ adapter: new Adapter() });

describe("Counter", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test("render counter title", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  test("render counter subtitle", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
  });

  test("render buttons", () => {
    expect(wrapper.find("button")).toHaveLength(3);
  });

  test("render increment button", () => {
    expect(wrapper.find("#increment-btn").text()).toEqual("Increment");
  });

  test("render decrement button", () => {
    expect(wrapper.find("#decrement-btn").text()).toEqual("Decrement");
  });

  test("render reset button", () => {
    expect(wrapper.find("#reset-btn").text()).toEqual("Reset");
  });

  test("increment count value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#count-value").text()).toEqual("1");
  });

  test("decrement count value", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#count-value").text()).toEqual("0");
  });

  test("reset count value", () => {
    wrapper.find("#reset-btn").simulate("click");
    expect(wrapper.find("#count-value").text()).toEqual("0");
  });
});
