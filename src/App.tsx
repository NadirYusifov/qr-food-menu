import Card from "./components/card";
import { data } from "./data/foods";

export default function App() {
    return (
        <>
            <section className="flex justify-center">
                <div className="contianer mx-auto px-4 flex flex-col justify-center">
                        <h1 className=""><a>Kateqoriyası</a></h1>
                    <div className="grid grid-cols-2 gap-4">
                        {data.map((item, id) => (
                            <Card food={item} key={id} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
