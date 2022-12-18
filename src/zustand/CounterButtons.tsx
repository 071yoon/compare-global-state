import counter from "./modules/counter";

export default function CounterButtons() {
  const { increase, decrease, increaseBy } = counter();

  const onIncrease = () => {
    increase();
  };

  const onDecrease = () => {
    decrease();
  };

  const onIncreaseBy = (num: number) => {
    increaseBy(5);
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
