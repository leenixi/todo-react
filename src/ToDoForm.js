import { useState} from 'react'

function ToDoForm({addTask}){ //addTask - destrukturizaciya?
    const [userInput, setUserInput] = useState('')
    
    const handleChange = (e) => {
      setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)

    }

    const handleKeyPress = (e) => {
      if(e.key === "Enter") {  //if enter = text should disappear
          handleSubmit(e)
      }
    }

    



    return(
      <form onSubmit={handleSubmit}>
      <input
         value={userInput}
         type="text"
         onChange={handleChange}
         onKeyDown={handleKeyPress} 
         placeholder="Enter value.."
      />
      <button>Save</button>
      </form>
    )
}

export default ToDoForm;