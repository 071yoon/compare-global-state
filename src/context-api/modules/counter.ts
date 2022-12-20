import { createContext, Dispatch, useContext } from "react";

type State = {
  count: number;
};

type Action =
  | { type: "INCREASE_COUNT" }
  | { type: "DECREASE_COUNT" }
  | { type: "SET_COUNT"; add: number };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREASE_COUNT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "SET_COUNT":
      return {
        ...state,
        count: state.count + action.add,
      };
    default:
      throw new Error("Unhandled action");
  }
};

type CountDispatch = Dispatch<Action>;

export const CountStateContext = createContext<State | null>(null);
export const CountDispatchContext = createContext<CountDispatch | null>(null);
