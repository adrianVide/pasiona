import React from "react";
import axios from "axios";
import { useState } from "react";

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
        <div className="d-flex justify-content-center bg-gray-100 rounded-xl py-6">
          <form
            className="d-flex flex-column justify-content-center text-center align-items-center"
            onSubmit={handleFormSubmit}
          >
        <h1 className="text-gray-800 font-bold ">Add a new Task</h1>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker m-1"
              placeholder="Title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker m-1"
              placeholder="Body"
              type="text"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <input className="shadow appearance-none border rounded py-2 px-6 text-grey-darker m-1" type="submit" value="Add Task" />
          </form>
        </div>


  );
};

export default AddTodo;
