import { useReducer } from "react";
import {
  reducer,
  CountDispatchContext,
  CountStateContext,
} from "./modules/counter";
import GoBack from "../atom/GoBack";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";

export default function ContextAPI() {
  const [count, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <CountDispatchContext.Provider value={dispatch}>
      <CountStateContext.Provider value={count}>
        <div className="App-body">
          <GoBack />
          <h1>I am context-api</h1>
          <CounterValue />
          <CounterButtons />
        </div>
      </CountStateContext.Provider>
    </CountDispatchContext.Provider>
  );
}
