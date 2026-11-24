import { Link } from "react-router"

export default function NotFound() {
  return (
    <section className="h-dvh flex place-content-center">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-9xl">404</h1>
          <h3 className="text-neutral-800 pt-3 pb-6 text-2xl">Axtardığın burda yoxdur.</h3>
        </div>
        <div className="mt-3">
          <Link to={"/"}>
            <button className="rounded-lg bg-[#4F5B2A] px-4 py-2 text-white cursor-pointer active:scale-97 transition-all ease-out">Əsas səhifə</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
