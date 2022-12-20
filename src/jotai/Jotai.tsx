import { Provider } from "jotai";
import GoBack from "../atom/GoBack";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";

export default function Jotai() {
  return (
    <Provider>
      <div className="App-body">
        <GoBack />
        <h1>I am jotai</h1>
        <CounterValue />
        <CounterButtons />
      </div>
    </Provider>
  );
}
