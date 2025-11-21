import { create } from "zustand";

interface MyState {
  bears: number;
  addBear: (by: number) => void;
}

const useBearStore = create<MyState>((set) => ({
  bears: 0,
  addBear: (by) => set((state) => ({ bears: state.bears + by })),
}));

export default useBearStore;
