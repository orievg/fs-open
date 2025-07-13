import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({value, text}) => {
    let element =
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    if (text === 'Positive:'){
        element =
            <tr>
                <td>{text}</td>
                <td>{value} %</td>
            </tr>
    }
    return (element)
}
const Statistics = ({text, noOfGood, noOfNeutral, noOfBad, total}) => {
    const calculateAverageScore = (noOfGood, noOfBad, total) => {
        return (noOfGood - noOfBad) / total
    }

    const calculatePositiveScore = (noOfGood, total) => noOfGood / total
    if (total === 0){
        return (
            <div>
                <h1>No feedback given</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>{text}</h1>
            <table>
                <tbody>
                    <StatisticLine value={noOfGood} text={'Good:' }/>
                    <StatisticLine value={noOfNeutral} text={'Neutral:' }/>
                    <StatisticLine value={noOfBad} text={'Bad:' }/>
                    <StatisticLine value={total} text={'Total:' }/>
                    <StatisticLine value={calculateAverageScore(noOfGood, noOfBad, total)} text={'Average:' }/>
                    <StatisticLine value={calculatePositiveScore(noOfGood, total)} text={'Positive:' }/>
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    console.clear()
    const headerText = "Give Feedback!"
    const statisticsText = "Statistics"

    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const [total, setTotal] = useState(0);

    const handleGoodClick = () => {
        const newGood = good + 1
        setGood(newGood)
        setTotal(newGood + bad + neutral)
    }
    const handleNeutralClick = () => {
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
        setTotal(good + bad + newNeutral)
    }
    const handleBadClick = () => {
        const newBad = bad + 1
        setBad(newBad)
        setTotal(good + newBad + neutral)
    }


    return (
        <div>
            <Header text={headerText}/>
            <Button onClick={() => {handleGoodClick()}} text="Good"/>
            <Button onClick={() => {handleNeutralClick()}} text="Neutral"/>
            <Button onClick={() => {handleBadClick()}} text="Bad"/>
            <Statistics text={statisticsText} noOfGood={good}
                        noOfNeutral={neutral} noOfBad={bad}
                        total={total}/>
        </div>
    )
}

export default App