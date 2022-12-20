import { useAtom } from "jotai";
import { increaseCount, decreaseCount, increaseCountBy } from "./modules/atom";

export default function CounterButtons() {
  const [, onIncrease] = useAtom(increaseCount);
  const [, onDecrease] = useAtom(decreaseCount);
  const [, onIncreaseBy] = useAtom(increaseCountBy);

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
