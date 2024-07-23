import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <>
      <main>
        <section>
          <h1>Counter App</h1>
          <h3>{count}</h3>
          <section>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
