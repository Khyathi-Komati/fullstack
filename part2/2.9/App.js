import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [var1,setVar1] = useState(persons)

  const handleNc=(event)=>{
      setNewName(event.target.value)
  }

  const handleNc1=(event)=>{
    setNewNumber(event.target.value)
}
const handleNc2=(event)=>{
  var x=event.target.value.toLowerCase()
  setVar1(persons.filter((var2)=>{return var2.name.toLowerCase().includes(x)}))
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
    setVar1(var1.concat(p))
    setNewNumber('')
    setNewName('')
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h4> filter shown with<input onChange={handleNc2}/></h4>
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
          var1.map(p1=>{return(
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