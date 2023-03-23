import React from "react";
import "./Create.css";

const Create: React.FC = () => {
  return (
    <div className="create">
      <div className="full-side">
        <form className="left-side">
          <label>
            Title:
            <input type="text" />
          </label>
          <label>
            Date:
            <input type="date" />
          </label>
          <label>
            Body:
            <input type="" />
          </label>
        </form>
        <div className="right-side">
          You are not supposed to be here 👀. pls go bak 🥺👉👈.
        </div>
      </div>
    </div>
  );
};

export default Create;
