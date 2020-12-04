import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./AddTodo";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer'

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<form></form>, div);
});

it("renders AddTodo correctly and checks expected text using data-testid", () => {
  const { getByTestId } = render(<AddTodo />);
  expect(getByTestId("add-todo")).toHaveTextContent("Add a new Task");
});

it("renders AddTodo correctly and checks expected text using text", () => {
  const { getByText } = render(<AddTodo />);
  expect(getByText("Add a new Task")).toBeVisible();
});

it("matches snapshot", () => {
  const compTree = renderer
    .create(<AddTodo />)
    .toJSON();
  expect(compTree).toMatchSnapshot();
});
