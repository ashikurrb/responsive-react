import React from "react";
import { Link } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
  //const {service} = props;
  const { id, name, price, description, img } = service;
  return (
    <div className="service m-4 py-3">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h3>{price}</h3>
      <p className="p-3">{description}</p>
    <Link to={`/booking/${id}`}> <button className="btn btn-primary">Book {name}</button></Link>
    </div>
  );
};

export default Service;