import { render, fireEvent, screen } from '@testing-library/react'
import TodoList from '../TodoList'

describe('TodoList', () => {
    it('should allow users to add a new todo', () => {
        render(<TodoList />)
        const input = screen.getByPlaceholderText('Add a new task')
        fireEvent.change(input, { target: { value: 'New Task' } })
        fireEvent.click(screen.getByText('Add'))
        expect(screen.getByText('New Task')).toBeInTheDocument()
    })

    it('should allow users to mark a todo as completed', () => {
        render(<TodoList />)
        const input = screen.getByPlaceholderText('Add a new task')
        fireEvent.change(input, { target: { value: 'New Task' } })
        fireEvent.click(screen.getByText('Add'))
        fireEvent.click(screen.getByText('New Task'))
        expect(screen.getByText('New Task')).toHaveClass('completed') // Or use a checkbox instead and make sure that its checked
    })

    it('should allow users to clear completed todos', () => {
        render(<TodoList />)
        const input = screen.getByPlaceholderText('Add a new task')
        fireEvent.change(input, { target: { value: 'New Task' } })
        fireEvent.click(screen.getByText('Add'))
        fireEvent.click(screen.getByText('New Task'))
        fireEvent.click(screen.getByText('Clear Completed'))
        expect(screen.queryByText('New Task')).not.toBeInTheDocument()
    })
})
