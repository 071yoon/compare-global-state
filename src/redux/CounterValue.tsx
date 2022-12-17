import { useSelector } from "react-redux";
import { RootState } from "./index";

export default function CounterValue() {
  const count = useSelector((state: RootState) => state.counter.count);

  return <h1>{count}</h1>;
}
