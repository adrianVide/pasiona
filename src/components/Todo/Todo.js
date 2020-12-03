import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleTodo from "../SingleTodo/SingleTodo.js";
import AddTodo from "../AddTodo/AddTodo.js";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      const result = await axios("http://localhost:3000/todos");
      setTodos(result.data);
    }
    fetchTodos();
  }, [reload]);

  return (
    <>
      <AddTodo callBack={() => setReload(!reload)} />
      <ul>
        {todos
          .map((todo) => (
            <SingleTodo todo={todo} key={todo.id} callBack={() => setReload(!reload)} />
          ))
          .reverse()}
      </ul>
    </>
  );
};

export default Todo;
