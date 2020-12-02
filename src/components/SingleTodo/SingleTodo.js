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
    <div
      key={todo.id}
      class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"
    >
      <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img
          class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={`https://loremflickr.com/384/512/${todo.title}`}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-5 text-center md:text-left space-y-4">
          <figcaption class="font-bold">
            <div class="text-gray-800">{todo.title}</div>
          </figcaption>
          <blockquote>
            <p class="text-lg font-medium text-gray-600">{todo.body}</p>
          </blockquote>
          
          <form onSubmit={handleFormSubmit}>
          <div>
            <input
             class="shadow appearance-none border rounded py-2 px-3 text-grey-darker m-1"
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            /></div>
            
           
            <input
             class="shadow appearance-none border rounded py-2 px-3 text-grey-darker m-1"
              type="text"
              placeholder="Body"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <input class="shadow appearance-none border rounded py-2 px-3 text-grey-darker m-1" type="submit" value="Update" />
          </form>
        </div>
      </figure>
    </div>
  );
};

export default SingleTodo;
