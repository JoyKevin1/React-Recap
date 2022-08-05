import { React, useState } from 'react'
import Todo from './Components/TodoWrapper/TodoWrapper'
import StateContext from './helpers/useContext'

export default function App() {
    const [todosArray, setTodosArray] = useState([])
    const [deleted, setDeleted] = useState([])
    return (
        <StateContext.Provider value={{
            deleted,
            setDeleted,
            todosArray,
            setTodosArray
        }}>
            <Todo />
        </StateContext.Provider>
    )
}