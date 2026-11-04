import { data, type Foods } from "../data/foods";

interface props {
    food: Foods
}
export default function Card({food}: props) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src=""
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{food?.Ad}</h2>
                    <p>{food?.Tərkibi?.toString()}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Ətraflı</button>
                    </div>
                </div>
            </div>
        </>
    )
}
