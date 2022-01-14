import React from 'react'
import Tile from './Tile'

function Word(props) {
    return (
        <div className='flex space-x-2'>
            <Tile letter={props.word[0]} />
            <Tile letter={props.word[1]} />
            <Tile letter={props.word[2]} />
            <Tile letter={props.word[3]} />
            <Tile letter={props.word[4]} />
        </div>
        
    )
}

export default Word
