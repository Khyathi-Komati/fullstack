import React from 'react'

const App = () => {
  
  const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
  
    ]

  return (
    <div>
    {
      courses.map((t)=>{
        return(
          <Course key={t.id} a={t}/>
        )
      }
      )
    }
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

  const Total=({c})=> {
    const k=c.map((y)=>{return(y.exercises)})
    const sum=k.reduce((a,c)=>{return a+c})
    return(
      <strong><p>total of{sum} exercises</p></strong>
    )
  }
export default App