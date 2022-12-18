import { useRecoilValue } from "recoil";
import getCountState from "./modules/selector";

export default function CounterValue() {
  const count = useRecoilValue(getCountState);

  return <h1>{count}</h1>;
}
