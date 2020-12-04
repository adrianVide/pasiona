import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer'



afterEach(cleanup)


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ul></ul>, div);
});

it("renders trigger correctly", () => {
  const { getByTestId } = render(<Todo />);
  expect(getByTestId("list-group")).toContainHTML('<ul') 
});

it("matches snapshot", () => {
  const compTree = renderer
    .create(<Todo />)
    .toJSON();
  expect(compTree).toMatchSnapshot();
});