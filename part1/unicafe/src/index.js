import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistic = ({text, value}) => {
return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)}

const Statistics = props => {
  if (props.props.all === 0) {
    return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )}
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <Statistic text="good" value = {props.props.good}/>
        <Statistic text="neutral" value = {props.props.neutral} />
        <Statistic text="bad" value = {props.props.bad} />
        <Statistic text="all" value = {props.props.all} />
        <Statistic text="average" value = {props.props.average} />
        <Statistic text="positive" value = {props.props.positive + "%"} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good+neutral+bad
  const average = (good-bad)/all
  const positive = (good/all)*100

  const statistics_props =  {good: good, neutral: neutral, bad: bad, all: all, average: average, positive: positive}

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good+1)} text="good" />
        <Button onClick={() => setNeutral(neutral+1)} text="neutral" />
        <Button onClick={() => setBad(bad+1)} text="bad" />
      </div>
      <div>
        <Statistics props={statistics_props}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
