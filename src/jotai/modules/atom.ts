import { atom } from "jotai";

export const count = atom(0);

export const readOnlyCount = atom((get) => get(count));

export const increaseCount = atom(
  (get) => get(count),
  (get, set) => set(count, get(count) + 1)
);

export const decreaseCount = atom(
  (get) => get(count),
  (get, set) => set(count, get(count) - 1)
);

export const increaseCountBy = atom(
  (get) => get(count),
  (get, set, amount: number) => set(count, get(count) + amount)
);
