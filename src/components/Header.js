import React from 'react'

function Header() {
    return (
        <div className='fixed px-4 top-0 left-0 w-full h-14 border-b-2 border-gray-400 grid grid-cols-4'>
            <div className="flex items-center">Options</div>
            <div className='flex items-center justify-center col-span-2'>
                <h1 className='text-center text-2xl font-bold text-black-900'>WordRun</h1>
            </div>
            <div className="flex flex-col items-center self-end justify-self-end">
                <p className="text-md">Streak</p>
                <span className="text-2xl font-bold">0</span>
            </div>
        </div>
    )
}

export default Header
