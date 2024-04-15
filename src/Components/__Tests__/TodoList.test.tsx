import { render, fireEvent, screen } from '@testing-library/react'
import TodoList from '../TodoList'

describe('TodoList', () => {
    it('should allow users to add a new todo', () => {
        render(<TodoList />)

        const input = screen.getByPlaceholderText('Add a new Todo')
        fireEvent.change(input, { target: { value: 'New Todo' } })
        fireEvent.click(screen.getByText('Add'))

        expect(screen.getByText('New Todo')).toBeInTheDocument()
    })

    it('should allow users to mark a todo as completed', () => {
        render(<TodoList />)

        const input = screen.getByPlaceholderText('Add a new Todo')
        fireEvent.change(input, { target: { value: 'New Todo' } })
        fireEvent.click(screen.getByText('Add'))
        fireEvent.click(screen.getByText('New Todo'))

        expect(screen.getByText('New Todo')).toHaveClass('completed')
    })

    it('should allow users to clear completed todos', () => {
        render(<TodoList />)

        const input = screen.getByPlaceholderText('Add a new Todo')
        fireEvent.change(input, { target: { value: 'New Todo' } })
        fireEvent.click(screen.getByText('Add'))
        fireEvent.click(screen.getByText('New Todo'))
        fireEvent.click(screen.getByText('Clear Completed'))

        expect(screen.queryByText('New Todo')).not.toBeInTheDocument()
    })
})
