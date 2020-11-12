import React, {useState, useRef} from "react"

export const ToDo = () => {

    const [toDoItem, setToDoItem] = useState("")
    const [list, setList] = useState([])
    const inputRef = useRef(null)

    const handleChange = (event) => {
        setToDoItem(event.target.value)
    }

    const addToDo = (event) => {
        event.preventDefault()
        setList(prevList => [...prevList, toDoItem])
        setToDoItem("")
        inputRef.current.focus()
    }

    const allItems = list.map(toDo => <p key={toDo}>{toDo}</p>)

    return(
        <div>
            <form>
                <input 
                    ref={inputRef}
                    type="text" 
                    name="toDo" 
                    placeholder="Type your To-do item here." 
                    value={toDoItem} 
                    onChange={handleChange}>
                </input>
                <button onClick={addToDo}>Add to list</button>
            </form>
            {allItems}
        </div>
    )
    
}