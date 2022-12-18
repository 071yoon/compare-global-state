import { RecoilRoot } from "recoil";
import GoBack from "../atom/GoBack";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";

function Recoil() {
  return (
    <RecoilRoot>
      <div className="App-body">
        <GoBack />
        <h1>I am recoil</h1>
        <CounterValue />
        <CounterButtons />
      </div>
    </RecoilRoot>
  );
}

export default Recoil;
