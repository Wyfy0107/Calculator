import React from 'react'
import './Button.css'

const DelButton = (props) => {
    return (
        <div className='button' onClick={props.del}>
            {props.but}
        </div>
    )
}

export default DelButton
