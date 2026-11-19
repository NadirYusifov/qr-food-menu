import type { ReactNode } from "react";

export interface Props {
    food: Foods
}

export interface Foods {
  category: string,
  ingedrients: ReactNode,
  name: string,
}