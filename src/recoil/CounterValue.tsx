import { useRecoilValue } from "recoil";
import getCountState from "./selector";

export default function CounterValue() {
  const count = useRecoilValue(getCountState);

  return <h1>{count}</h1>;
}
