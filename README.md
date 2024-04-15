# React TDD Practice Application

This application is a simple React and TypeScript project designed to help students practice Test-Driven Development (TDD).

## Features

-   A Todo List component ([TodoList.tsx](src/Components/TodoList.tsx))

    -   An empty React component with tests already written, write the code for the component and watch the tests start to pass
    -   Try to implement the code one test at a time

-   A Food Searcher component ([FoodSearcher.tsx](src/Components/FoodSearcher.tsx))

    -   This component allows users to search for foods from a list and select one. It has a search field that filters the list of available foods based on the user's input.
    -   Expand the test suite, consider what features should be tested.

-   An Email Handler utility ([EmailHandler.ts](src/Utils/EmailHandler.ts))

    -   A utility file for handling emails. Finish this up and add additional tests/logic.

-   A Complaint Form component ([ComplaintForm.tsx](src/Components/ComplaintForm.tsx))
    -   This component has some logic built in to it along with a couple of tests.
    -   Try and fix the failing tests and add more as needed.

### Each of these features has corresponding tests in the `__Tests__` directories.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`

## Running Tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/).

## Contributing

This project is intended for educational purposes. Feel free to fork and make changes for your own learning.

## License

This project is open source, under the [MIT License](https://opensource.org/licenses/MIT).
