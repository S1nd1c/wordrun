import React from 'react'

function Key(props) {
    return (
        <div className='h-12 w-auto rounded-md bg-gray-200 flex items-center justify-center'>
            <span className="text-18">{props.letter}</span>
        </div>
    )
}

export default Key
