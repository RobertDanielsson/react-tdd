import { Box, TextField, Typography } from '@mui/material'
import { useState } from 'react'

interface FoodSearcherProps {
    availableFoods: string[]
    onFoodSelect: (food: string) => void
}

const FoodSearcher = ({ availableFoods, onFoodSelect }: FoodSearcherProps) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredFoods, setFilteredFoods] = useState(availableFoods)

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm)

        const filteredFoods = availableFoods.filter((food) =>
            food.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredFoods(filteredFoods)
    }

    return (
        <Box textAlign="center">
            <TextField
                sx={{ mb: 2 }}
                label="Search for a food"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
            />
            {filteredFoods.map((food) => (
                <Typography key={food} onClick={() => onFoodSelect(food)}>
                    {food}
                </Typography>
            ))}
        </Box>
    )
}

export default FoodSearcher
