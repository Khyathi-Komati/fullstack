import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:'040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
    const [newNumber,setNewNumber] = useState('')

  const handleNc=(event)=>{
      setNewName(event.target.value)
  }

  const handleNc1=(event)=>{
    setNewNumber(event.target.value)
}

  const aN=(event)=>{
    event.preventDefault()
    const v=persons.some((variable)=>{return variable.name===newName})
    if(v===true)
    {
      alert(`${newName} is already added to phonebook` )
    }
    else{
    const p={
      name:newName,
      number:newNumber
    }
    setPersons(persons.concat(p))
    setNewNumber('')
    setNewName('')
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={aN}>
        <div>
          name: <input value={newName} onChange={handleNc}/>
          number: <input value={newNumber} onChange={handleNc1}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(p1=>{return(
            <h3 key={p1.name}>{p1.name} {p1.number}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App