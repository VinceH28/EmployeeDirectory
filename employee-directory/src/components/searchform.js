import React from "react";

function Query(props) {

  //keep track of input
  //reference names(first and last) ** match name ** 
  //reference country ** match reference **
  //use this.setState to display everything on page

  return (
    <input
      type="text"
      className="form-control"
      placeholder=""
      aria-label=" area for potential user input"
      aria-describedby="button-addon1"
      onChange={props.filter}
    />
  );
}

export default Query;