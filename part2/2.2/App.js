import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id:1,
    parts: [
      {
        id:1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id:2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id:3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id:4,
        name: 'Redux',
        exercises: 11
      },

    ]
  }
  
  

  return (
    <div>
    < Course a={course}/>
    </div>
  )
}
const Course = ({a})=>
{
  return(
    <div>
    <Header b={a.name}/>
    <Content c={a.parts}/>
    <Total c={a.parts}/>

    </div>
  )
}

const Header=({b})=>{
  return(
    <h2>{b}</h2>
  )
}

const Content=({c})=>{
  return(
    <div>
      {
        c.map(d=>{
          return(
            <Part key={d.id} e={d.name} f={d.exercises}></Part>
          )
        }
        )
      }

    </div> 
  )
    }
  const Part=({e,f})=>{
    return(
      <p>{e} {f}</p>
    )
  }

  const Total=({c})=>{
    let x=0
    for(const j of c)
    {
      x+=j.exercises
    }
    return(
      <p>total of {x} exercises</p>
    )
  }
export default App