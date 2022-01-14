import React from 'react'

function Tile(props) {
    return (
        <div className='h-16 w-16 border-2 border-gray-200 flex items-center justify-center'>
            <span className="text-3xl">{props.letter}</span>
        </div>
    )
}

export default Tile
