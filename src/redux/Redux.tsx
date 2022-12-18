import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./modules";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";
import GoBack from "../atom/GoBack";

export default function Redux() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <div className="App-body">
        <GoBack />
        <h1>I am Redux</h1>
        <CounterValue />
        <CounterButtons />
      </div>
    </Provider>
  );
}
