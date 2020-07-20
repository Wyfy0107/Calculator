import React from "react";
import "../CSS/Button.css";

type props = {
  del: () => void;
  but: string;
};

const DelButton = (props: props) => {
  return (
    <div className='button' onClick={props.del}>
      {props.but}
    </div>
  );
};

export default DelButton;
