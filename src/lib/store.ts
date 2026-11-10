import { create } from "zustand";
import type { MouseEvent } from "react";

// [https://stackoverflow.com/questions/63172748/typescript-type-for-onclick-event-considering-it-could-be-triggered-from-the-key] ‒ TypeScript type for onClick event considering it could be triggered from the keyboard (Asked: Evanss) - Stack Overflow
interface BearState {
  bears: number
  increase: (state: number | MouseEvent<HTMLButtonElement>) => void
  decrease: (state: number) => void
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  decrease: (newBears) => set({bears: newBears})
}))
