import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './actions/counter'

function App() {
  const counter = useSelector((state) => {
    return state.counter.counter;
  });

  const dispatcher = useDispatch();

  const handleIncrement = () => {
    dispatcher(increment());
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => {dispatcher(decrement())}}>-</button>
    </div>
  );
}

export default App;
