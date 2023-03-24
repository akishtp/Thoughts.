import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { createBlog } from "../../features/blog/blogActions";
import "./Create.css";

const Create: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("running");

    dispatch(
      createBlog({
        title,
        body,
      })
    );
  };

  return (
    <div className="create">
      <div className="full-side">
        <form className="left-side" onSubmit={(e) => handleSubmit(e)}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Body:
            <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          </label>
          <button type="submit" className="create-blog-button">
            Create
          </button>
        </form>
        <div className="right-side">
          You are not supposed to be here 👀. pls go bak 🥺👉👈.
        </div>
      </div>
    </div>
  );
};

export default Create;
