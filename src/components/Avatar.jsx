import React from "react";

const Avatar = (props) => {
  return (
    <img className="circle-img" src={props.imgURL} alt={props.name + " image"} />
  );
};

export default Avatar;
