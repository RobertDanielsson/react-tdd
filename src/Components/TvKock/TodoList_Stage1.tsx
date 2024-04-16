import { Box, TextField, Button, Typography } from '@mui/material'
import { useState } from 'react'
import './TodoList.css'

export interface Todo {
    id: number
    title: string
    isCompleted: boolean
}

const TodoList = () => {
    const [todoTitle, setTodoTitle] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo = () => {
        if (!todoTitle) return

        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                title: todoTitle,
                isCompleted: false,
            },
        ])

        setTodoTitle('')
    }

    // TODO: Implement the TodoList component
    // It should allow users to add a new todo - Completed
    // It should allow users to mark a todo as completed
    // It should allow users to clear completed todos

    return (
        <Box>
            <TextField
                value={todoTitle}
                placeholder="Add a new Todo"
                onChange={(e) => setTodoTitle(e.target.value)}
            />
            <Button onClick={handleAddTodo}>Add</Button>
            <Box>
                {todos.map((todo) => (
                    <Typography key={todo.id}>{todo.title}</Typography>
                ))}
            </Box>
            <Button>Clear Completed</Button>
        </Box>
    )
}

export default TodoList
