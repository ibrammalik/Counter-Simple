import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const decrementCount = () => {
    if (count === 0) {
      alert("sudah habis pacarmu");
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>count</h1>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
