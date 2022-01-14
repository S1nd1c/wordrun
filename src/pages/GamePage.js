import React from 'react'
import Game from '../components/Game'
import Header from '../components/Header'

function GamePage() {
    return (
        <div className="w-full flex flex-col space-y-20 items-center">
            <Header />
            <Game />
        </div>
    )
}

export default GamePage
