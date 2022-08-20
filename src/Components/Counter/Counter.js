import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count === 0 ? setCount(0) : setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter</h1>
      <div class="card mt-2">
        <div class="card-body bd-example">
          <h2 id="count-value">{count}</h2>
          <button
            id="increment-btn"
            className="btn btn-primary"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            id="decrement-btn"
            className="btn btn-warning"
            onClick={handleDecrement}
          >
            Decrement
          </button>
          <button
            id="reset-btn"
            className="btn btn-danger"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
