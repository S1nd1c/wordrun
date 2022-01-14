import React from 'react'
import Key from './Key'

function Keyboard() {
    return (
        <div>
            <div className='grid grid-rows-3 gap-3 mx-2'>
                <div className="grid grid-cols-10 gap-1">
                    <Key letter="Q" />
                    <Key letter="W" />
                    <Key letter="E" />
                    <Key letter="R" />
                    <Key letter="T" />
                    <Key letter="Y" />
                    <Key letter="U" />
                    <Key letter="I" />
                    <Key letter="O" />
                    <Key letter="P" />
                </div>
                <div className='grid grid-cols-10 gap-1'>
                    <Key letter="A" />
                    <Key letter="S" />
                    <Key letter="D" />
                    <Key letter="F" />
                    <Key letter="G" />
                    <Key letter="H" />
                    <Key letter="J" />
                    <Key letter="K" />
                    <Key letter="L" />
                    <Key letter="Ñ" />
                </div>
                <div className="grid grid-cols-10 gap-1">
                    <div className='col-span-2'>
                        <Key letter="ENTER" />
                    </div>
                    <Key letter="Z" />
                    <Key letter="X" />
                    <Key letter="C" />
                    <Key letter="V" />
                    <Key letter="B" />
                    <Key letter="N" />
                    <Key letter="M" />
                    <Key letter={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6 ml-1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path></svg>} />
                </div>
            </div>
        </div>
    )
}

export default Keyboard
