import GoBack from "../atom/GoBack";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";

export default function Zustand() {
  return (
    <div className="App-body">
      <GoBack />
      <h1>I am zustand</h1>
      <CounterValue />
      <CounterButtons />
    </div>
  );
}
