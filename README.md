## Features

### 1. Course Selection and Cart

Users can browse through the list of available courses and select one by clicking the "Select" button. The selected course's title, credit, and price are then displayed in the cart on the right-hand side. Users can only select one course at a time, and the cart shows the total credit hours and total price of the selected course(s).

### 2. Credit Hours Validation

As users select courses, the system tracks the total credit hours in the cart. If the total credit hours exceed the maximum limit (e.g., 20 hours), an error message is displayed.

### 3. Total Price Calculation

Calculate and display the total price of the selected courses in the cart. Whenever a course is selected or deselected, update the total price accordingly. Ensure that the user can see the cost of their selected courses at all times.

These features provide a basic but functional course registration system with validation




## State Management

In this React project, state management is at the core of my application's functionality. I've harnessed the power of React's built-in `useState` and `useEffect` hooks to expertly manage the state of my application.

### App Component State

In the `App` component, I've defined several state variables using the `useState` hook to manage different aspects of my application's state:

- `selectedCourse`: An array that holds the selected courses.
- `remaining`: The remaining credit hours available to the user.
- `totalCredit`: The total credit hours of the selected courses.
- `totalPrice`: The total price of the selected courses.

I update these state variables based on user actions, such as adding courses to the cart.

### `handleAddToCart` Function

The `handleAddToCart` function is used to add a course to the cart (i.e., the `selectedCourse` state array). Here's what it does:

- Checks if the selected course is already in the cart by searching for its `id` within the `selectedCourse` array. If it's already in the cart, it displays an error message using the `toast` library.

- If the course is not in the cart, I calculate the total credit hours and total price by iterating through the existing selected courses and add the new course to the `selectedCourse` array.

- I update the `remaining` state variable to keep track of the remaining credit hours.

- I check whether the user has exceeded the maximum credit limit (20 credits) and display a warning message if needed.

### Courses Component State

In the `Courses` component, I manage the `courses` state using the `useState` hook. This state variable stores the list of available courses fetched from an external JSON file. I use the `useEffect` hook to fetch the course data and update the `courses` state when the component mounts.

### Cart Component State

In the `Cart` component, I receive the `selectedCourse`, `remaining`, `totalCredit`, and `totalPrice` props. I use these props to display the selected courses in the cart and show information about the remaining credit hours and the total price.

### State Validation

Throughout my code, I perform validation on the state to ensure that it remains consistent and within the desired constraints. For example, I check if the total credit hours exceed the maximum limit and show a warning if necessary.

### PropTypes

I use `PropTypes` to define the expected prop types for each component. This helps in documenting the expected props and can also catch potential bugs during development.

Overall, my project effectively manages state using React's hooks and ensures that the UI updates reflect changes in the underlying data. The use of validation and error messages enhances the user experience and helps prevent unintended actions.
