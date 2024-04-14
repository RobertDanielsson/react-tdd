import { ComplaintFormData } from '../Components/ComplaintForm'

export interface SendEmailResult {
    recipient: string
    message: string
    success: boolean
}

export const sendEmail = (messageObj: ComplaintFormData): SendEmailResult => {
    // TODO: Implement this function
    // sanitize the email message
    // "send" an email to the intern
    // return a result object

    return {
        recipient: '',
        message: messageObj.message || '',
        success: true,
    }
}

export const sanitizeEmail = (email: string) => {
    // replace words like 'buggy', broken and error with 'cool'. Expand when needed
    const wordstoReplace = ['buggy', 'broken', 'error']

    const sanitizedWords = email.split(' ').map((word) => {
        if (wordstoReplace.includes(word)) {
            return 'cool'
        }
        return word
    })

    return sanitizedWords.join(' ')
}
