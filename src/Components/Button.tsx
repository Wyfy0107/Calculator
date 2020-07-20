import React from "react";
import "../CSS/Button.css";

type buttonProps = {
  key: number;
  content: string;
  click: () => void;
  index: number;
};

const Button = (props: buttonProps) => {
  return (
    <div className='button' onClick={props.click}>
      <p>{props.content}</p>
    </div>
  );
};

export default Button;
