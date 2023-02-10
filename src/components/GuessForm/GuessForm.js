import { useState } from 'react'

function GuessForm({ handleSubmit, gameStatus }) {
    const [word, setWord] = useState('')

    const submitForm = e => {
        e.preventDefault()
        if (word.replace(' ', '').length !== 5) {
            alert('Word Must be 5 Letters,no spaces')
            return false
        }
        handleSubmit(word.toUpperCase())

        setWord('')
    }

    return (
        <form className='guess-input-wrapper' onSubmit={submitForm}>
            <label htmlFor='word-input' className='p'>
                {gameStatus === 'running' ? 'Enter Guess: ' : 'Game Over'}
            </label>
            <input
                disabled={gameStatus !== 'running'}
                type='text'
                id='word-input'
                value={word}
                className='p'
                maxLength='5'
                minLength='5'
                onChange={e => setWord(e.target.value)}
            />
        </form>
    )
}

export default GuessForm
