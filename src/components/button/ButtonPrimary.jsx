import React from 'react'
import './button.scss'
export const ButtonPrimary = ({title}) => {
return (
        <button className='button'>
            <p>{title}</p>
        </button>
);
}