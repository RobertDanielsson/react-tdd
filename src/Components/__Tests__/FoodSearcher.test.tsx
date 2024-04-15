import { fireEvent, render, screen } from '@testing-library/react'
import FoodSearcher from '../FoodSearcher'

const availableFoods = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry']

describe('FoodSearcher', () => {
    it('should render search field', () => {
        render(
            <FoodSearcher
                availableFoods={availableFoods}
                onFoodSelect={jest.fn()}
            />
        )

        screen.getByLabelText(/search for a food/i)
    })

    it('should render all available foods', () => {
        render(
            <FoodSearcher
                availableFoods={availableFoods}
                onFoodSelect={jest.fn()}
            />
        )

        availableFoods.forEach((food) => {
            screen.getByText(food)
        })
    })

    it('should filter out foods when searching', () => {
        // TODO: Implement this test
    })
})
