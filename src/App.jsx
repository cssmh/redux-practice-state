import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center h-screen flex justify-center flex-col">
      <div className="flex items-center justify-center gap-5">
        <button
          className="bg-green-500 px-2 py-1 rounded-md"
          onClick={() => setCount((count) => count + 1)}
        >
          Increase
        </button>
        <p>Count is {count}</p>
        <button
          className="bg-red-500 px-2 py-1 rounded-md"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
