import React from 'react'
import Word from './Word'

function Words(props) {
    return (
        <div className='pl-5 grid grid-rows-6 gap-2'>
           {
               props.words.map((word, i) => {
                   return <Word key={i} word={word}/>
               })
           } 
        </div>
    )
}

export default Words
