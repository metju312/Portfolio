import React from "react";

const person = (props: any) => {
  return (
    <div>
      <p onClick={props.click}>Hello {props.name}</p>
      <input onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;