import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img
          className="circle-img"
          src={props.img}
          alt={props.name + " image"}
        />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
