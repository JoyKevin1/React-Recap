import { React, useState } from 'react'
import Todo from './Components/TodoWrapper/TodoWrapper'
import StateContext from './helpers/useContext'

export default function App() {
    const [todosArray, setTodosArray] = useState([])
    return (
        <StateContext.Provider value={{
            todosArray,
            setTodosArray
        }}>
            <Todo />
        </StateContext.Provider>
    )
}