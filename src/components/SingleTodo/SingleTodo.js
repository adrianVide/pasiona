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
      props.callBack();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li data-testid='single-todo' className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={`https://loremflickr.com/384/512/${todo.title}`}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-5 text-center md:text-left space-y-4 w-full">
          <figcaption className="font-bold">
            <div className="text-gray-800">{todo.title}</div>
          </figcaption>
          <blockquote>
            <p className="text-lg font-medium text-gray-600">{todo.body}</p>
          </blockquote>

          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-grey-darker m-1"
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <input
              className="shadow appearance-none border rounded py-2 px-3 text-grey-darker m-1"
              type="text"
              placeholder="Body"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <input
              className="shadow appearance-none border rounded py-2 text-grey-darker mx-4 px-6"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </figure>
    </li>
  );
};

export default SingleTodo;
