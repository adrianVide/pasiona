import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleTodo from "../SingleTodo/SingleTodo.js";
import AddTodo from "../AddTodo/AddTodo.js";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(async () => {
    try {
      const result = await axios("http://localhost:3000/todos");
      setTodos(result.data);
    } catch (error) {
      console.log(error);
    }
  }, [reload]);

  return (
    <>
      <AddTodo callBack={() => setReload(!reload)} />

      {todos
        .map((todo) => (
          <SingleTodo todo={todo} callBack={() => setReload(!reload)} />
        ))
        .reverse()}
    </>
  );
};

export default Todo;
