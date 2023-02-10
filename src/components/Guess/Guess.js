import React from 'react'

function Guess({ word, answer }) {
    const value = word ? word.split('') : ['', '', '', '', '']

    const getClass = (letter, i) => {
        if (!letter || letter === '') return 'cell'
        if (letter === answer[i]) return 'cell correct'
        if (answer.includes(letter)) return 'cell misplaced'
        return 'cell incorrect'
    }

    return (
        <p className='guess'>
            {value.map((letter, i) => (
                <span key={i} className={getClass(letter, i)}>
                    {letter}
                </span>
            ))}
        </p>
    )
}

export default Guess
