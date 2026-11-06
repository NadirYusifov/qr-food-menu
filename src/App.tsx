import Card from "./components/card";
import Tabs from "./components/tabs";
import { data } from "./data/foods";

export default function App() {
    // const categories = ["Milli yeməklər", "Salatlar", "Şorbalar", "İçkilər", "Fast food"];

    const group = Object.groupBy(data, ({ category }) => category)

    return (
        <>
            <section className="flex flex-col place-items-center w-full">
                <div className="flex items-center gap-4 overflow-y-scroll w-1/2 mt-10">
                    {Object.entries(group).map(([category, id]) => (
                        <Tabs className="text-nowrap text-lg bg-yellow-300 rounded-lg px-10 py-2" link={`#${category.replaceAll(" ", "").toLowerCase()}`}>{category}</Tabs>
                    ))}
                </div>
                <div className="contianer mx-auto px-4">
                    <div>
                        {/* 
                        [https://medium.com/@artemkhrenov/javascript-grouping-methods-object-groupby-and-map-groupby-5bcb0e2134bf] ‒ JavaScript Grouping Methods: Object.groupBy() and Map.groupBy() - Artem Khrienov
                        [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries Object.entries - MDN]
                        */}
                        {Object.entries(group).map(([category, foods]) => (
                            <>
                                <article id={category.replaceAll(" ", "").toLowerCase()}>
                                    <h1 className="text-2xl mt-20 pb-3">{category}</h1>
                                </article>
                                <div className="grid grid-cols-2">
                                    <>
                                        {foods?.map((item) => (
                                            <Card food={item} />
                                        ))}
                                    </>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
