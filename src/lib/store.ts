import { create } from "zustand";

type BearState = {
  bears: number
  increase: (state: number) => void
  decrease: (state: number) => void
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  decrease: (newBears) => set({bears: newBears})
}))
