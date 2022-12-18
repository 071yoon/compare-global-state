import { selector } from "recoil";
import countState from "./atom";

const getCountState = selector({
  key: "getCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const count = get(countState);
    return count;
  },
});

export default getCountState;
