import React from 'react';
import '../CSS/Button.css';

const CalcButton = (props) => {
	return (
		<div className='button' onClick={props.add}>
			{props.but}
		</div>
	);
};

export default CalcButton;
