import { useMemo, useState } from "react";
import stores from "../../data/stores";
import SearchBar from "./SearchBar";
import StoreCard from "./StoreCard";

function ExploreStores() {
       const [search, setSearch] = useState("");

       const filteredStores = useMemo(() => {
              return stores.filter((store) =>
                     store.area.toLowerCase().includes(search.toLowerCase())
              );
       }, [search]);

       return (
              <section id="stores" className="bg-gray-50 py-16">

                     <div className="mx-auto max-w-7xl px-6">

                            <h2 className="text-center text-4xl font-bold">
                                   Explore Nearby Stores
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
                                   Find trusted local service providers in your area.
                            </p>

                            <SearchBar
                                   value={search}
                                   onChange={setSearch}
                            />

                            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                   {filteredStores.map((store) => (
                                          <StoreCard
                                                 key={store.id}
                                                 {...store}
                                          />
                                   ))}
                            </div>

                     </div>

              </section>
       );
}

export default ExploreStores;