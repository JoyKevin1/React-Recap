import { React, useState, useContext } from "react"
import './todocss.css'
import SingleTodo from "../SingleTodo"
import StateContext from "../../helpers/useContext"

export default function Todo() {
    let [formContent, setFormContent] = useState('')
    let { todosArray, setTodosArray } = useContext(StateContext)

    function addToArray(e) {
        e.preventDefault()
        setTodosArray(prevTodos => ([
            ...prevTodos,
            {
                id: prevTodos.length + 1,
                name: formContent,
                completed: false
            }
        ]
        ))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setFormContent(e.target.value)
    }

    return (
        <div className="wrapper">
            <div className="sec-wrapper">
                <div>
                    <h1>Todo List</h1>
                </div>
                <div className="top-div">
                    <form onSubmit={addToArray}>
                        <input
                            onChange={handleSubmit}
                        ></input>
                        <button>Add</button>
                    </form>
                    <select>
                        <option>All</option>
                        <option>Done</option>
                        <option>Pending</option>
                    </select>
                </div>
                <div className="todos">
                    {todosArray.map(todo => <SingleTodo id={todo.id} key={todo.id} todoContent={todo.name} completion={todo.completed}/>)}
                </div>
            </div>
        </div>
    )
}