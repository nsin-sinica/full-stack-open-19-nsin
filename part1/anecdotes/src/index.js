import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(6+1).join("0").split("").map(parseFloat))

  const handleClickNext = () => {
    setSelected(() => Math.floor(Math.random() * Math.floor(6)))
  }

  const handleClickVote = () => {
    const copy = [...points]
    copy[selected]+=1
    setPoints(copy)
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {points[selected]} votes
      </div>
      <Button onClick={handleClickVote} text="vote" />
      <Button onClick={handleClickNext} text="next anecote" />
      <div>
        <h1>Anecdote with most votes</h1>
        <div>
          <p>{props.anecdotes[points.indexOf(Math.max.apply(null, points))]}</p>
          <p>has {points[points.indexOf(Math.max.apply(null, points))]} votes</p>
        </div>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))