import React, {useState} from 'react'
import "../StatesDemo/index.css"

const StateDemo = () => {
    // let name = "Dipti"
    // name = "Mahejabeen"
    const [name, setName] = useState("Dipti")
    const [counter, setCounter] = useState(0)
    // setName("Mahejabeen")                   //updation using react
    function handleClick(){
        // setName("Mahejabeen")  
        if (name === "Dipti"){
            setName("Mahejabeen")  
        }

        else{
            setName("Dipti")
        }
    }
  return (
    <div id='stateContainer'>
    <h1 className='demo'>StateDemo</h1>
    <h1 className='state'>The name is : {name}</h1>
    <h1 className='state'>Counter: {counter}</h1>
    <button id='button' onClick={handleClick}>Change Name</button>
    <button id="IncButton" onClick={()=> setCounter(counter + 1)}>Increase Counter +</button>
    <button id="DecButton" onClick={()=> setCounter(counter - 1)}>Increase Counter -</button>
    </div>
  )
}

export default StateDemo