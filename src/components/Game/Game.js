import { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessForm from '../GuessForm'
import GameBoard from '../GameBoard'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import ResultBanner from '../ResultBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
    const [guessList, setGuessList] = useState([])
    const [gameStatus, setGameStatus] = useState('running')

    const handleNewGuess = word => {
        if (guessList.length < NUM_OF_GUESSES_ALLOWED) setGuessList([...guessList, word])
        if (word === answer) {
            setGameStatus('won')
        } else if (guessList.length === 5) {
            setGameStatus('lost')
        }
    }

    return (
        <>
            <GameBoard answer={answer} guessList={guessList} />
            <GuessForm handleSubmit={handleNewGuess} gameStatus={gameStatus} />

            <ResultBanner showBanner={gameStatus === 'won'}>
                <div className='happy banner'>
                    <p>
                        <strong>Congratulations!</strong> Got it in
                        <strong>{guessList.length} guesses</strong>.
                    </p>
                </div>
            </ResultBanner>
            <ResultBanner showBanner={gameStatus === 'lost'}>
                <div className='sad banner'>
                    <p>
                        Sorry, the correct answer is <strong> {answer}</strong>.
                    </p>
                </div>
            </ResultBanner>
        </>
    )
}

export default Game
