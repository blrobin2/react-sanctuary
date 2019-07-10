# React + Sanctuary

A basic example of how to utilize Sanctuary (and Fluture) with React (in particular, with function components and React Hooks)

## Details
* The main component is a composition of a state function and a view function
  * The state function accepts the props and sets up the React Hooks for setting the status that we then inject into the rest of the application
  * We do this so that we can inject state management from the top and keep our code testable without having to do a ton of mocking
* The initial status comes in from a Future, which takes the mock return object and lifts it into the expected format
* After the load, three buttons provide a way to switch between the different states and renders the corresponding component

To go further with the React Hooks example, we could use `useReducer` to better handle how state is passed around, but that felt too complicated for this simple example

## Issues
I'm no Sanctuary expert, so if there's any way I could better utilize the library, I'll gladly hear it out