import React from "react";
import "../CSS/Display.css";

type props = {
  display: any;
};

const Display = (props: props) => {
  return <div className='display'>{props.display}</div>;
};

export default Display;
