import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
    

  const handleNc=(event)=>{
      setNewName(event.target.value)
  }

  const aN=(event)=>{
    event.preventDefault()
    const p={
      name:newName
    }
    setPersons(persons.concat(p))
    setNewName('')
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={aN}>
        <div>
          name: <input value={newName} onChange={handleNc}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(p1=>{return(
            <h3 key={p1.name}>{p1.name}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App