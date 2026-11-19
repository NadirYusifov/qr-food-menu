import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

export default function Header() {

    return (
        <header className="bg-white shadow-md py-5 sticky top-0 z-10">
            <div className="container px-4 mx-auto">
                <nav className="flex justify-between items-center">
                    <Link to={"/"}><h1 className="text-2xl">QR Food Menu</h1></Link>
                    <Link to={"/cart"}>
                        <button className="text-white flex items-center gap-2 bg-[#4F5B2A] rounded-lg px-4 py-2 active:scale-97 transition-all ease-out"><ShoppingCart /> Səbətdə 0 yemək var</button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
