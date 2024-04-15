import { Grid, TextField, Button, Snackbar, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'

const schema = yup.object().shape({
    name: yup.string().required('Name is required.'),
    email: yup
        .string()
        .email('Email is not valid.')
        .required('Email is required.'),
    message: yup.string(),
})

export interface ComplaintFormData {
    name: string
    email: string
    message?: string
}

interface ComplainFormProps {}

const ComplaintForm = ({}: ComplainFormProps) => {
    const [open, setOpen] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleFormSubmit = (data: ComplaintFormData) => {
        // TODO: Submit this complaint email to the intern who broke our code
        // TODO: Reset the form after submission
        setOpen(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Grid container gap={3} maxWidth={600} marginX="auto">
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            Submit bug reports here!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('name')}
                            label="Name*"
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('email')}
                            label="Email*"
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('message')}
                            name="message"
                            label="Message"
                            multiline
                            rows={6}
                            placeholder="Enter your message"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message="Your complaint has been submitted"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </>
    )
}

export default ComplaintForm
