import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const Secret = "secret"
  return (
  <>
    <h1>Greetings</h1>
    <Hello name="George" age= {26+10}/>
    <Hello name="Mary" age={Secret}/>
    <Hello name="There" age="0"/>
  </>
)}

ReactDOM.render(<App />, document.getElementById('root'))