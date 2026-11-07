import type { Foods } from "../data/foods"
interface props {
    food: Foods
}

export default function Card({ food }: props) {
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
            </div>
        </>
    )
}
