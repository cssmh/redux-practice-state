import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center h-screen flex justify-center flex-col">
      <div className="flex items-center justify-center gap-5">
        <button
          className="bg-green-500 px-2 py-1 rounded-md"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increase
        </button>
        <p>Count is {count}</p>
        <button
          className="bg-red-500 px-2 py-1 rounded-md"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
