import { Link } from "react-router-dom";
import Hero from "./Hero";

function Error404() {


  return (
    <div>
      <Hero text="Oops! You seem to be lost: Error 404" />
      <h2 className="p-3 my-5">Here are some helpful links:</h2>
      <div className="container">
      <button type="button" className="btn btn-link">
        <Link to="/">Home</Link>
      </button>
      <button className="btn btn-link">
        <Link to="/search">Search</Link>
      </button>
      <button className="btn btn-link">
        <Link to="/about">About</Link>
      </button>
      </div>
    </div>
  );
}

export default Error404;
