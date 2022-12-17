import create from "zustand";

interface Counter {
  count: number;
  increase: () => void;
  decrease: () => void;
  increaseBy: (num: number) => void;
}

const counter = create<Counter>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  increaseBy: (by: number) => set((state) => ({ count: state.count + by })),
}));

export default counter;
