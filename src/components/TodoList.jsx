import { Items } from "../utils/Items";
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, setTodos] = useState(Items); 
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        const newItem = { id: Date.now(), item: newTodo };
        setTodos([...todos, newItem]);
        setNewTodo("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id)); 
    };

    const editTodo = (id, newItem) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, item: newItem } : todo
            )
        );
    };

    return (
        <div className="TodoList">
            <div className="input">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new todo Item"
                />
                <button onClick={addTodo} >Add</button>
            </div>
            <div>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        item={todo.item}
                        onDelete={deleteTodo}
                        onEdit={editTodo}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
