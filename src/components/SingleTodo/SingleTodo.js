import React from "react";
import axios from "axios";
import { useState } from "react";

const SingleTodo = (props) => {
  const todo = props.todo;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/todos/${todo.id}`, {
        title,
        body,
      });
      setTitle("");
      setBody("");
      props.callBack()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div key={todo.id}>
      <h2>{todo.title}</h2>
      <h2>{todo.body}</h2>
      <div>
        Update task:
        <form
          className="d-flex flex-column justify-content-center text-center align-items-center"
          onSubmit={handleFormSubmit}
        >
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body:</label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <input type="submit" value="Modify" />
        </form>
      </div>
    </div>
  );
};

export default SingleTodo;
