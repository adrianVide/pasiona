import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");




  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3000/todos", {
        title,
        body,
      });
      setTitle("");
      setBody("");
      props.callBack();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Add a new Task</h1>
      <div className="d-flex justify-content-center">
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

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
