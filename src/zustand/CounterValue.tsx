import counter from "./counter";

export default function CounterValue() {
  const { count } = counter();

  return <h1>{count}</h1>;
}
