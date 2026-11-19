import { create } from "zustand";
import type { Foods } from "../types";

interface CartItems extends Foods {
    quantity: number
}

interface CartState {
    count: number
    items: CartItems[]
    addToCart?: (food: Foods) => void
}

export const useCartStore = create<CartState>((set) => ({
    count: 0,
    items: []
}))
