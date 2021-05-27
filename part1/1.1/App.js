import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header Course={course} />
      <Content a1={part1} a2={part2} a3={part3} c1={exercises1} c2={exercises2} c3={exercises3} />
      <Total total={exercises1+exercises2+exercises3}/>
    </div>  )
}

const Header=prop=>{
  return(
    <div>
      <h1>{prop.Course}</h1>
    </div>
  );
}
const Content=props=>{
  return(
    <div>
      <p>
        {props.a1} {props.c1}
      </p>
      <p>
        {props.a2} {props.c2}
      </p>
      <p>
        {props.a3} {props.c3}
      </p>
    </div>
  )
}

const Total=prop=>{
  return(
    <div>
      <p>No:Of:Exercises:{prop.total}</p>
    </div>
  )
}

export default App