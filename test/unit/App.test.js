import React from "react";
import { shallow } from "enzyme";
import App from "../../src/components/App";

const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});
