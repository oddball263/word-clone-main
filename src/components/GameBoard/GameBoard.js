import React from 'react'
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

function GameBoard({ guessList, answer }) {
    return (
        <div className='guess-results'>
            {range(0, NUM_OF_GUESSES_ALLOWED).map(n => (
                <Guess key={n} word={guessList[n]} answer={answer} />
            ))}
        </div>
    )
}

export default GameBoard
