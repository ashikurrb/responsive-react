import React from "react";
import './Service.css'

const Service = ({ service }) => {
  //const {service} = props;
  const { name, price, description, img } = service;
  return (
    <div className="service m-4">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h3>{price}</h3>
      <p className="p-3">{description}</p>
    </div>
  );
};

export default Service;