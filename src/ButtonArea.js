import React from 'react'
import './ButtonArea.css'

const ButtonArea = (props) => {
    return (
        <div className='button-area'>
            {props.a}
            {props.children}
        </div>
    )
}

export default ButtonArea
