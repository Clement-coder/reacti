import React from 'react';
import { useState } from 'react';

export const Button = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={handleClick}>Click me!</button>  
            <div className='count'>
            {count}
            </div>
        </>
    )
}
