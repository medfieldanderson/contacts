import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar name={props.name} imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Detail info={props.tel} />
        <Detail info={props.email} />
      </div>
    </div>
  );
};

export default Card;
