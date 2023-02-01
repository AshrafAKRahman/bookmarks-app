import { useEffect, useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    const addTodo = (e)=> {
        e.preventDefault()
        const newTodos = prevTodos => {
            return [
                ...prevTodos, 
                {
                    id: new Date().getTime(),
                    todoText: todo, 
                    ...todo
                }
            ]
        }

        setTodos(newTodos)
        console.log(todos)
    }

    useEffect(()=>{
        console.log(todos);
    }, [todos])

    return ( 
        <div className="todo-card">
            <div className="todo-wrapper">
                <h3 className="todo-heading">Todos</h3>
                <form 
                className="todo-form"
                onSubmit={addTodo}
                >
                <input 
                type="text" 
                className="todo-input"
                onChange={e => {
                    setTodo(e.target.value)
                    console.log(todo)
                    }}
                 />
                <button type="submit" className="btn-add">Add +</button>
                </form>
                {todo}
            </div>
        </div>
    );
}
 
export default Todo;