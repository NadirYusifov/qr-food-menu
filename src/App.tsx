import { data } from "./data/foods";
import Card from "./components/card";
import Tabs from "./components/tabs";
import Footer from "./layout/footer";
import Header from "./layout/header";

export default function App() {
    const group = Object.groupBy(data, ({ category }) => category)

    return (
        <>
            <Header />
            <section className="flex flex-col place-items-center w-full">
                <div className="flex items-center gap-4 overflow-y-scroll w-full lg:w-1/2 mt-10 px-4">
                    {Object.entries(group).map(([category]) => (
                        <Tabs key={category} link={`#${category.replaceAll(" ", "").toLowerCase()}`}>
                            <button className="rounded-lg bg-[#B8892D] text-[#F5EFE3] px-4 py-2 text-nowrap snap-x cursor-pointer active:scale-97">
                                {category}
                            </button>
                        </Tabs>
                    ))}
                </div>
                <div className="contianer mx-auto px-4 w-full lg:w-1/2">
                    <div>
                        {/* 
                        [https://medium.com/@artemkhrenov/javascript-grouping-methods-object-groupby-and-map-groupby-5bcb0e2134bf] ‒ JavaScript Grouping Methods: Object.groupBy() and Map.groupBy() - Artem Khrienov
                        [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries] Object.entries - MDN
                        */}
                        {Object.entries(group).map(([category, foods]) => (
                            <div key={category}>
                                <article className="scroll-mt-25" id={category.replaceAll(" ", "").toLowerCase()}>
                                    <h1 className="text-2xl mt-20 pb-3">{category}</h1>
                                </article>
                                <div className="grid grid-cols-2 gap-4">
                                    <>
                                        {foods?.map((item, id) => (
                                            <Card key={id} food={item} />
                                        ))}
                                    </>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20">
                        <p className="text-lg">*Menular Sİ (süni intellekt) və bəziləri isə manual, yəni əl ilə yazılıb. Tərkiblərin bəzilərinə əlavələr və çıxatmalar olub. Bundan əlavə yeməklərin özləri və tərkibləri yanlış ola bilər.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
