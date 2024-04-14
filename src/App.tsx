import { Divider, Grid } from '@mui/material'
import React from 'react'
import ComplaintForm from './Components/ComplaintForm'
import TodoList from './Components/TodoList'

function App() {
    return (
        <Grid container spacing={10}>
            <Grid item xs={12}>
                <TodoList />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <ComplaintForm />
            </Grid>
        </Grid>
    )
}

export default App
