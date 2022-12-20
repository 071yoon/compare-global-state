import { useCountState } from "./modules/useCounter";

export default function CounterValue() {
  const { count } = useCountState();

  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}
