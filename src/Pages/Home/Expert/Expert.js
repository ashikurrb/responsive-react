import React from "react";

const Expert = ({ expert }) => {
  const { name, title, description, img } = expert;
  return (
    <div className="col-lg-4 col-md-6">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5 className="text-danger">{title}</h5>
    </div>
  );
};

export default Expert;
