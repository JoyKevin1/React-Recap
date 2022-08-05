import StateContext from "../helpers/useContext"
import { useContext } from "react"

export default function SingleTodo(props) {
    let { setDeleted } = useContext(StateContext)
    let { todosArray, setTodosArray } = useContext(StateContext)

    const completeTodo = () => {
        setTodosArray(todosArray.map(singleTodo => {
            if(singleTodo.name === props.todoContent) {
                return {
                    ...singleTodo,
                    completed: true
                }
            }
            return singleTodo // Spent almost an hour with a bug due forgetting this return!!
        }))
    }

    console.log(todosArray)

    const deleteTodo = () => {
        setDeleted(prevDeleted => (
            [...prevDeleted,
            {
                id: props.id,
                name: props.Content
            }]
        ))
        setTodosArray(prevTodosArray => prevTodosArray.filter(el => el.id !== props.id))
    }

    return (
        <div className="todo">
            <div className={props.completion ? "completion" : "pending"}>
                <h2>{props.todoContent}</h2>
            </div>
            <button className="done-btn" onClick={completeTodo}>Completed</button>
            <button className="delete-btn" onClick={deleteTodo}>Delete</button>
        </div>
    )
}
