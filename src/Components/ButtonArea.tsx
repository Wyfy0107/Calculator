import React from "react";
import "../CSS/ButtonArea.css";

type props = {
  a: React.ReactNode[];
  children: React.ReactNode;
};

const ButtonArea = (props: props) => {
  return (
    <div className='button-area'>
      {props.a}
      {props.children}
    </div>
  );
};

export default ButtonArea;
