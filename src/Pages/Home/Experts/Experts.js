import React from "react";
import Expert from "../Expert/Expert";

const experts = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO & Founder - XYZ Inc.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.",
    img: "https://source.unsplash.com/user/c_v_r/300x300"
  },

  {
    id: 2,
    name: "John Doe",
    title: "CEO & Founder - XYZ Inc.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.",
    img: "https://source.unsplash.com/user/c_v_r/300x300"
  },

  {
    id: 3,
    name: "John Doe",
    title: "CEO & Founder - XYZ Inc.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.",
    img: "https://source.unsplash.com/user/c_v_r/300x300"
  },

  {
    id: 4,
    name: "John Doe",
    title: "CEO & Founder - XYZ Inc.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.",
    img: "https://source.unsplash.com/user/c_v_r/300x300"
  },

  {
    id: 5,
    name: "John Doe",
    title: "CEO & Founder - XYZ Inc.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.",
    img: "https://source.unsplash.com/user/c_v_r/300x300"
  },
  {
    id: 6,
    name: "John Doe",
    title: "CEO & Founder - XYZ Inc.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.",
    img: "https://source.unsplash.com/user/c_v_r/300x300"
  }
];

const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-primary mt-4">These are ExpetSSS</h2>
      <br />

      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.name} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
