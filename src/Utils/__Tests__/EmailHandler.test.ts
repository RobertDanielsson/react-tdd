import { sanitizeEmail, sendEmail } from '../EmailHandler'

describe('EmailHandler', () => {
    describe('sendEmail', () => {
        it('should send an email', async () => {
            const messageObj = {
                name: 'John Doe',
                email: 'john@doe.se',
                message: 'Your app is so buggy! How did you create this?',
            }
            const result = await sendEmail(messageObj)

            expect(result.success).toBeTruthy()
        })

        it('should send the email to the intern', async () => {
            const messageObj = {
                name: 'John Doe',
                email: 'john@doe.se',
                message: 'Your app is so buggy! How did you create this?',
            }
            const result = await sendEmail(messageObj)

            expect(result.recipient).toEqual('kalle_the_intern@forefront.se')
        })

        //Expand test suite as needed
    })

    describe('sanitizeEmail', () => {
        it('should replace buggy with cool', () => {
            const email = 'Your app is so buggy ! How did you create this?'
            const sanitizedEmail = sanitizeEmail(email)
            expect(sanitizedEmail).toEqual(
                'Your app is so cool ! How did you create this?'
            )
        })

        it('should replace broken with cool', () => {
            const email = 'This is the most broken app I have ever seen'
            const sanitizedEmail = sanitizeEmail(email)
            expect(sanitizedEmail).toEqual(
                'This is the most cool app I have ever seen'
            )
        })

        it('should replace error with cool', () => {
            const email = 'I keep getting error messages, whats going on?'
            const sanitizedEmail = sanitizeEmail(email)
            expect(sanitizedEmail).toEqual(
                'I keep getting cool messages, whats going on?'
            )
        })
    })
})
