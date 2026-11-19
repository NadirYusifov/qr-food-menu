import { Trash } from "lucide-react";
import type { Foods } from "../types/index";

interface Props {
    items: Foods
}

export default function Cart({ items }: Props) {
    return (
        <section>
            <div className="container px-4 mx-auto">
                <div className="flex place-content-between items-center mt-10 py-3">
                    <h1 className="text-xl">Səbət</h1>
                    <button className="bg-red-700 flex gap-2 rounded-lg px-4 py-2 text-white active:scale-97 transition-all ease-out"><Trash /> Səbəti təmizlə</button>
                </div>
                <div>
                    <div className="border border-neutral-300 bg-white rounded-lg flex place-content-between px-4 py-4">
                        <div className="flex flex-col justify-between">
                            <article>
                                <h1>Plov</h1>
                                <p>Milli yemeklər</p>
                                <p>Düyü, ət, kişmiş</p>
                            </article>
                            <div className="bg-[#4F5B2A] flex place-content-between place-items-center rounded-lg">
                                <button className="rounded-lg w-8 h-8 px-4 py-4 flex items-center justify-center text-white">-</button>
                                <span className="w-full text-center text-white">0</span>
                                <button className="w-8 h-8 px-4 py-4 rounded-lg flex items-center justify-center text-white">+</button>
                            </div>
                        </div>
                        <div>
                            <div className="bg-green-500 w-35 h-35 rounded-lg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
