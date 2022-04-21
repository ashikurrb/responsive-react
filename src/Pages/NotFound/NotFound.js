import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <img
        style={{ width: "75%"}}
        className="img-fluid"
        src="https://miro.medium.com/max/1400/1*cLQUX8jM2bMdwMcV2yXWYA.jpeg"
        alt=""
      />
      <br />
      <br />

      <Link to="/home">
        <button>GO Back</button>
      </Link>

    </div>

  );
};

export default NotFound;
