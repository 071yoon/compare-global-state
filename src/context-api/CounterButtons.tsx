import { useCountDispatch } from "./modules/useCounter";

export default function CounterButtons() {
  const dispatch = useCountDispatch();

  return (
    <div className="counter-buttons">
      <button
        className="counter-button"
        onClick={() => dispatch({ type: "INCREASE_COUNT" })}
      >
        +1
      </button>
      <button
        className="counter-button"
        onClick={() => dispatch({ type: "DECREASE_COUNT" })}
      >
        -1
      </button>
      <button
        className="counter-button"
        onClick={() => dispatch({ type: "SET_COUNT", add: 5 })}
      >
        +5
      </button>
    </div>
  );
}
