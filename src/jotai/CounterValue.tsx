import { useAtom } from "jotai";
import { readOnlyCount } from "./modules/atom";

export default function CounterValue() {
  const [num] = useAtom(readOnlyCount);

  return (
    <div>
      <h2>{num}</h2>
    </div>
  );
}
