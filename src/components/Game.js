import React, { useState } from 'react'
import Words from './Words'
import Keyboard from './Keyboard';

function Game() {
    //const totalTries = 5;
    // eslint-disable-next-line
    const [words, setWords] = useState(["", "", "", "", ""]);
    
    return (
        <div className='w-full flex flex-col justify-center'>
                <Words words={words}/>
                <Keyboard />
        </div>
    )
}

export default Game
