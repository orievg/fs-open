import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({value}) => <p>Has {value} votes</p>
const JerryOfTheDay = ({votes, anecdotes}) => {
    const getIndexToFunniestJoke = () => {
        let max = 0;
        let maxIndex = 0;
        let i = 0;
        for (; i < votes.length; i += 1) {
            if (votes[i] > max) {
                max = votes[i];
                maxIndex = i;
            }
        }
        return max > 0 ? maxIndex : -1;
    }
    const funniestIndex = getIndexToFunniestJoke();
    if (funniestIndex === -1){
        return (
            <div>
                <h1>No funny jokes today</h1>
                <p>Upvote a joke to get started</p>
            </div>
        )
    }
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[funniestIndex]}</p>
        </div>

    )
}
const App = () => {
    console.clear()
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const [votes, setVotes] = useState(() => Array(anecdotes.length).fill(0))
    const [selected, setSelected] = useState(0)


    const getNextJoke = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }
    const upvoteJoke = () => {
        const newVotes = [...votes]
        newVotes[selected] = newVotes[selected] + 1
        setVotes(newVotes)
    }

    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <StatisticLine value={votes[selected]} />
            <Button onClick={() => {upvoteJoke()}} text="Upvote"/>
            <Button onClick={() => {getNextJoke()}} text="Next anecdote"/>
            <JerryOfTheDay votes={votes} anecdotes={anecdotes} />
        </div>
    )
}

export default App