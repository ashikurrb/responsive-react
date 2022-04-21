import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../Images/404.jpeg";

const NotFound = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={notFound} alt="" />
      <br />
      <br />
      <Link to="/">
        <button className="btn btn-success">GO Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
