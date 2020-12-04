import React from "react";
import ReactDOM from "react-dom";
import SingleTodo from "./SingleTodo";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer'

const todo = {
  title: "Movie",
  body:
    "Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.",
  id: 26,
};

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<li></li>, div);
});

it("renders SingleTodo with props correctly and checks title by ID", () => {
  const { getByTestId } = render(<SingleTodo todo={todo}></SingleTodo>);
  expect(getByTestId("single-todo")).toHaveTextContent("Movie");
});

it("renders SingleTodo with props correctly and checks body by text", () => {
  const { getByText } = render(<SingleTodo todo={todo}></SingleTodo>);
  expect(
    getByText(
      "Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience."
    )
  ).toBeVisible;
});

it("matches snapshot", () => {
  const compTree = renderer.create(<SingleTodo todo={todo}></SingleTodo>).toJSON();
  expect(compTree).toMatchSnapshot();
})