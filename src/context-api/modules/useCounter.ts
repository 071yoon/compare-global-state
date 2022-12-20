import { useContext } from "react";
import { CountStateContext, CountDispatchContext } from "./counter";

export function useCountState() {
  const state = useContext(CountStateContext);
  if (!state) throw new Error("CountStateProvider not found");
  return state;
}

export function useCountDispatch() {
  const dispatch = useContext(CountDispatchContext);
  if (!dispatch) throw new Error("CountDispatchProvider not found");
  return dispatch;
}
