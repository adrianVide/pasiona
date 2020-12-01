import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleTodo from "../SingleTodo/SingleTodo.js";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  

  useEffect(async () => {
    const result = await axios("http://localhost:3000/todos");
    setTodos(result.data);
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo todo={todo} />
      ))}
    </div>
  );
};

export default Todo;
