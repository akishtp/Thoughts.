import "./Create.css";

const Create = () => {
  return (
    <div className="create">
      <form className="create-form">
        <h2 className="create-heading">CREATE BLOG</h2>
        <label className="create-label">
          Title :
          <input type="text" className="create-input" />
        </label>
        <label className="create-label">
          Tags :
          <input type="text" className="create-input" />
        </label>
        <label className="create-label">
          Content :
          <input type="text" className="create-input" />
        </label>
        <div className="button-wrapper">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
