import { combineReducers } from "redux";
import counter from "./counter";

// root reducer for all reducers
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
