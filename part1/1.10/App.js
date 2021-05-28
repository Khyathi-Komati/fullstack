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
        <Button F1={A1} M1='good'/>
        <Button F1={A2} M1='neutral'/>
        <Button F1={A3} M1='bad'/>
        </p>
      <h2>Statistics</h2>
       <Statistics G={good} N={neutral} B={bad}/>
    </div>
  )
}
const Statistics=(props)=>{
  if (props.G===0 && props.N===0 && props.B===0)
  return (
    <h2> No FeedBack Given</h2>
  )
  const t=props.G+props.N+props.B
  const a=props.G-props.B/t
  const p=props.G*100/t
  return(
  <div>
    <Statistic C1={props.G} text='good'/> 
    <Statistic C1={props.N} text='neutral'/>
    <Statistic C1={props.B} text='bad'/>
    <Statistic C1={t} text='all'/>
    <Statistic C1={a} text='average'/>
    <Statistic C1={p} text='positive'/>
  </div>
  )
}
     const Button=(props)=>{
       return(
         <button onClick={props.F1}>{props.M1}</button>
       )
     }
const Statistic=(props)=>{
  return(
    <p> {props.text} {props.C1}</p>
  )
}     
export default App