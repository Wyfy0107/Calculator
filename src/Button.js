import React from 'react'
import './Button.css'

const Button = props => {
    return (
        <div className='button' onClick={props.click}>
            <p>{props.content}</p>
        </div>
    )
}

export default Button