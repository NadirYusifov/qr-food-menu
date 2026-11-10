import { ShoppingCartPlus } from "lucide-react"
import type { Foods } from "../data/foods"
import { useBearStore } from "../lib/store"
interface props {
    food: Foods
}

export default function Card({ food }: props) {
    let increasePopulation = useBearStore((state) => state.increase)

    return (
        <>
            <div className="bg-[#F5EFE3] rounded-lg shadow-md px-4 py-2 hover:scale-102 transition-all ease-out">
                <div className="flex items-center justify-center h-50 text-center bg-neutral-100 rounded-lg">
                    <span className="text-3xl font-bold">Şəkil yoxdur</span>
                </div>
                <div className="pt-5">
                    <h1 className="text-xl font-medium">{food.name}</h1>
                    <p className="text-neutral-800 pt-1.5">{food.ingedrients?.toString().replaceAll(",", ", ")}</p>
                </div>
                <button onClick={increasePopulation} className="text-white flex place-content-center gap-2 w-full px-4 py-2 bg-[#4F5B2A] rounded-lg active:scale-97 mt-5 transition-all ease-out"><ShoppingCartPlus /> Səbətə əlavə et</button>
            </div>
        </>
    )
}
