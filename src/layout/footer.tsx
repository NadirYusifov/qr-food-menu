import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#D8C9A8] py-10 mt-10">
      <div className="container px-4 mx-auto">
        <article>
          <h1 className="text-3xl">QR Food Menu</h1>
        </article>
        <article className="text-center pt-10">
          <Link to={"https://github.com/NadirYusifov/qr-food-menu"} className="text-lg">GitHub</Link>
        </article>
      </div>
    </footer>
  )
}
