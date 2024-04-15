import { Divider, Grid } from '@mui/material'
import React from 'react'
import ComplaintForm from './Components/ComplaintForm'
import TodoList from './Components/TodoList'
import FoodSearcher from './Components/FoodSearcher'

function App() {
    const availableFoods = [
        'Apple',
        'Banana',
        'Orange',
        'Pineapple',
        'Strawberry',
    ]

    return (
        <Grid container spacing={10}>
            <Grid item xs={12}>
                <FoodSearcher
                    availableFoods={availableFoods}
                    onFoodSelect={() => {}}
                />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
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
