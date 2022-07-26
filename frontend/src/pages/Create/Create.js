import { useState } from "react";
import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [body, setBody] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, tag, body };

    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setTag("");
      setBody("");
      console.log("new workout added:", json);
    }
  };

  return (
    <div className="create">
      <form className="create-form" onSubmit={handleSubmit}>
        <h2 className="create-heading">CREATE BLOG</h2>
        <label className="create-label">
          Title :
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="create-input"
          />
        </label>
        <label className="create-label">
          Tags :
          <input
            type="text"
            onChange={(e) => setTag(e.target.value)}
            value={tag}
            className="create-input"
          />
        </label>
        <label className="create-label">
          Content :
          <input
            type="text"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            className="create-input"
          />
        </label>
        <div className="button-wrapper">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
