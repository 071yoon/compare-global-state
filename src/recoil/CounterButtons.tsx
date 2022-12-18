import countState from "./atom";
import { useRecoilState } from "recoil";

export default function CounterButtons() {
  const [count, setCount] = useRecoilState(countState);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  const onIncreaseBy = (amount: number) => {
    setCount(count + amount);
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
