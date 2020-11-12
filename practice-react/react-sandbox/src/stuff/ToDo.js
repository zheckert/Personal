import React, {useState} from "react"

export const ToDo = () => {

    const [toDoItem, setToDoItem] = useState("")
    const [list, setList] = useState([])

    const addToDo = (event) =>{
        event.preventDefault()
        setList(prevList => [...prevList, setToDoItem])
        setToDoItem("")
    }

    const handleChange = (event) =>{
        event.preventDefault()
        setToDoItem(event.target.value)
    }

    const allItems = list.map(toDo => <p key={toDo}>{toDo}</p>)

    return(
        <div>
            <form>
                <input type="text" placeholder="Type your To-do item here." value={toDoItem} onChange={handleChange}></input>
                <button onClick={addToDo}>Click to add this to your list</button>
            </form>
            {allItems}
        </div>
    )
    
}