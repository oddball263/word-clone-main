import { useState } from 'react'

function GuessForm({ handleSubmit }) {
    const [word, setWord] = useState('')

    const submitForm = e => {
        e.preventDefault()
        if (word.length !== 5) {
            console.log('Word Must be 5 Letters')
            return false
        }
        handleSubmit(word.toUpperCase())

        setWord('')
    }

    return (
        <form className='guess-input-wrapper' onSubmit={submitForm}>
            <label htmlFor='word-input' className='p'>
                Enter Guess:
            </label>
            <input
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
