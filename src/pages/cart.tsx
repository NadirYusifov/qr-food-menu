import { Trash } from "lucide-react";
import { useCartStore } from "../lib/store";

export default function Cart() {
    const cart = useCartStore((state) => state.items)

    return (
        <section>
            <div className="container px-4 mx-auto">
                <div className="flex place-content-between items-center mt-10 py-3">
                    <h1 className="text-xl">Səbət</h1>
                    <button className="bg-red-700 flex gap-2 rounded-lg px-4 py-2 text-white active:scale-97 transition-all ease-out"><Trash /> Səbəti təmizlə</button>
                </div>
                {/* {cart && <h1>Yoxdur</h1>} */}
                {cart.map((item) => (
                    <>
                        <div className="border border-neutral-300 bg-white rounded-lg flex place-content-between px-4 py-4 mb-4">
                            <div className="flex flex-col justify-between">
                                <article>
                                    <h1>{item.name}</h1>
                                    <p>{item.category}</p>
                                    <p>{item.ingedrients?.toString().replaceAll(",", ", ")}</p>
                                </article>
                                <div className="bg-[#4F5B2A] rounded-lg flex w-30 justify-between px-4 py-2">
                                    <button className="rounded-lg flex items-center justify-center text-white">-</button>
                                    <span className="text-center text-white">{item.quantity}</span>
                                    <button className="rounded-lg flex items-center justify-center text-white">+</button>
                                </div>
                            </div>
                            <div>
                                <div className="bg-green-500 w-35 h-35 rounded-lg">
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}
