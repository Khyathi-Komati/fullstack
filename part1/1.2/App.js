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
      <Part P={props.a1} E={props.c1}/>
     
      
     <Part P={props.a2} E={props.c2}/>
   
  
     <Part P={props.a3} E={props.c3}/>
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
const Part=prop=>{
  return(
    <p>{prop.P} {prop.E}</p>
  )
}

export default App