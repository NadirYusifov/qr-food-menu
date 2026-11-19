import Cart from "./pages/cart";
import Home from "./pages/home";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Referances from "./pages/referances";
import { Route, Routes } from "react-router";

export default function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="referances" element={<Referances />} />
            </Routes>
            <Footer />
        </>
    )
}
