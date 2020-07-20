import React from "react";
import "../CSS/Button.css";

type props = {
  add: () => void;
  but: string;
};

const CalcButton = (props: props) => {
  return (
    <div className='button' onClick={props.add}>
      {props.but}
    </div>
  );
};

export default CalcButton;
