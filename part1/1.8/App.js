import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const A1=()=>{setGood(good+1)}
  const A2=()=>{setNeutral(neutral+1)}
  const A3=()=>{setBad(bad+1)}
  
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={A1}>good</button><button onClick={A2}>neutral</button><button onClick={A3}>bad</button>
        </p>
      <h2>Statistics</h2>
       <Statistics G={good} N={neutral} B={bad}/>
    </div>
  )
}
const Statistics=(props)=>{
  const t=props.G+props.N+props.B
  const a=props.G-props.B/t
  const p=props.G*100/t
  return(
    <p>
      good {props.G}<br></br>
      neutral {props.G}<br></br>
      bad {props.G}<br></br>
      all {t}<br></br>
      average {a}<br></br>
      positive {p}<br></br>
    </p>
  )
}
export default App