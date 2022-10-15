# Redux

- Global state manager, where we can store data and consume within the application.

## Install

```bash
yarn add redux react-redux @reduxjs/toolkit
```

## Store, reducers, actions

- Actions: Trigger events that send information to the reducers.
  - Something that happened in the application.

```ts
// Action creator that returns the action object
const addTodo = text => {
  return {
    type: 'todos/todoAdded', //domain/eventName
    payload: text, // additional information for what happened (buy milk)
  };
};
```

- Reducers: Event listener that distribute information to the components.

```ts
// Event listener which handles evenets based on the received action type
// Similar to the Array.reduce() callback argument
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}
```

- Store: Centralized store for states.

```ts
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: counterReducer });

console.log(store.getState()); // { value: 0 }
```

### Dispatch

- The only way to update the state
- Pass in an action object

```ts
// Call action creators
const increment = () => {
  return {
    type: 'counter/increment',
  };
};
store.dispatch(increment());

console.log(store.getState()); // { value: 1 }
```

### Selectors

- Extract specific pieces of information

```ts
const selectCounterValue = state => state.value;

const currentValue = selectCounterValue(store.getState());

console.log(currentValue); // 1
```
