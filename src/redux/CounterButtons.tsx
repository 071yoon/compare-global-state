import { useDispatch } from "react-redux";
import { increase, decrease, increaseBy } from "./counter";

export default function CounterButtons() {
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <div className="counter-buttons">
      <button className="counter-button" onClick={onIncrease}>
        +1
      </button>
      <button className="counter-button" onClick={onDecrease}>
        -1
      </button>
      <button className="counter-button" onClick={() => onIncreaseBy(5)}>
        +5
      </button>
    </div>
  );
}
