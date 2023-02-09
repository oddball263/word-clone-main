import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessForm from '../GuessForm'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
    const handleNewGuess = word => {
        console.log('new word: ', word)
    }
    return (
        <>
            <GuessForm handleSubmit={handleNewGuess}></GuessForm>
        </>
    )
}

export default Game