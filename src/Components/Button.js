import React from 'react';
import '../CSS/Button.css';

const Button = (props) => {
	return (
		<div className='button' onClick={props.click}>
			<p>{props.content}</p>
		</div>
	);
};

export default Button;
