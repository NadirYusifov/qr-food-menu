import { ShoppingCart } from "lucide-react";
import { useBearStore } from "../lib/store";

export default function Header() {
    const bears = useBearStore((state) => state.bears)
    
    return (
        <header className="bg-white shadow-md py-5 sticky top-0 z-10">
            <div className="container px-4 mx-auto">
                <nav className="flex justify-between items-center">
                    <h1 className="text-lg">QR Food Menu</h1>
                    <button className="text-white flex items-center gap-2 bg-[#4F5B2A] rounded-lg px-4 py-2 active:scale-97"><ShoppingCart /> Səbətdə {bears} yemək var</button>
                </nav>
            </div>
        </header>
    )
}
