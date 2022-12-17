import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from ".";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";

export default function Redux() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <>
        I am Redux
        <CounterValue />
        <CounterButtons />
      </>
    </Provider>
  );
}
