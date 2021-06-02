import React from 'react'

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

  export default Course