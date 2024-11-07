import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ComplaintForm, { ComplaintFormData } from '../ComplaintForm'

describe('ComplaintForm', () => {
    it('should not crash', () => {
        render(<ComplaintForm />)
    })

    it('should validate the name field', async () => {
        render(<ComplaintForm />)
        screen.getByText(/send/i).click()
        expect(
            await waitFor(() => screen.findByText(/Name is required./i))
        ).toBeInTheDocument()
    })

    it('should validate the email field', async () => {
        render(<ComplaintForm />)
        screen.getByText(/send/i).click()
        expect(
            await waitFor(() => screen.findByText(/Email is required./i))
        ).toBeInTheDocument()
    })

    it('should show a success message when the form is submitted', async () => {
        // TODO: Implement this test
        expect(1).toBe(2)
    })

    it('should call the onSubmit function when the form is submitted containing the form data', async () => {
        // TODO: Fix this test, we cannot currently assert that the onSubmit function is called with the expected data

        const expectedData: ComplaintFormData = {
            name: 'John Doe',
            email: 'test@test.se',
            message: 'Your app is buggy as hell!',
        }

        const onSubmit = jest.fn()
        render(<ComplaintForm />)

        fireEvent.change(screen.getByRole('textbox', { name: /name\*/i }), {
            target: { value: 'John Doe' },
        })
        fireEvent.change(screen.getByRole('textbox', { name: /email\*/i }), {
            target: { value: 'test@test.se' },
        })
        fireEvent.change(screen.getByRole('textbox', { name: /message/i }), {
            target: { value: 'Your app is buggy as hell!' },
        })

        screen.getByText(/send/i).click()

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith(expectedData)
        })
    })

    it('should clear the form after submission', async () => {
        //TODO: Fix this test, the form is not being cleared after submission
        render(<ComplaintForm />)

        fireEvent.change(screen.getByRole('textbox', { name: /name\*/i }), {
            target: { value: 'John Doe' },
        })
        fireEvent.change(screen.getByRole('textbox', { name: /email\*/i }), {
            target: { value: 'test@test.se' },
        })
        fireEvent.change(screen.getByRole('textbox', { name: /message/i }), {
            target: { value: 'Your app is buggy as hell!' },
        })

        screen.getByText(/send/i).click()

        await waitFor(() => {
            expect(
                screen.getByRole('textbox', { name: /name\*/i })
            ).toHaveValue('')
            expect(
                screen.getByRole('textbox', { name: /email\*/i })
            ).toHaveValue('')
            expect(
                screen.getByRole('textbox', { name: /message/i })
            ).toHaveValue('')
        })
    })
})
