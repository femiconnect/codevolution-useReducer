import React, { useReducer } from 'react';

//define initial state
const initialState = {
   firstCounter: 0,
   secondCounter: 3,
};

//define reducer function - accepts 2 values (currentState & action) and returns one value, a new state; action transition the current state to a new state. We can percive the action as a set of instructions to the reducer function carries out on the current state
const reducer = (state, action) => {
   switch (action.type) {
      case 'increment':
         return { ...state, firstCounter: state.firstCounter + action.value };
      case 'decrement':
         return { ...state, firstCounter: state.firstCounter - action.value };
      case 'increment2':
         return { ...state, secondCounter: state.secondCounter + action.value };
      case 'decrement2':
         return { ...state, secondCounter: state.secondCounter - action.value };
      case 'reset':
         return initialState;
      default:
         return state;
   }
};

function Counter() {
   const [count, dispatch] = useReducer(reducer, initialState);

   //count contains the current value of the state

   //dispatch method allows us to execute a code corresponding to a particular action - specify the action that should be performed

   return (
      <div>
         <div className='count'> Counter One - {count.firstCounter}</div>
         <div className='count'> Counter Two - {count.secondCounter}</div>
         <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
            Increment
         </button>
         <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
            Decrement
         </button>
         <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
            Increment by 5
         </button>
         <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
            Decrement by 5
         </button>
         <div>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
               Increment2
            </button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
               Decrement2
            </button>
         </div>
         <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
   );
}

export default Counter;

/**
 Advantage of obect pattern when using useReducer
   1. we can pass additional data to the reducer function thereby allowing a robust action.
   2. we can maintain as many state properties as we want.
*/
