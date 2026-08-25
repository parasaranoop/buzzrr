// // 


// import { useMemo, useState } from "react";
// import stores from "../../data/stores";
// import SearchBar from "./SearchBar";
// import StoreCard from "./StoreCard";

// function ExploreStores() {
//        const [search, setSearch] = useState("");

//        const filteredStores = useMemo(() => {
//               return stores.filter((store) =>
//                      store.area
//                             .toLowerCase()
//                             .includes(search.toLowerCase())
//               );
//        }, [search]);

//        return (
//               <section
//                      id="stores"
//                      className="bg-gray-50 py-12 sm:py-16"
//               >
//                      <div className="mx-auto max-w-7xl px-4 sm:px-6">

//                             {/* Heading */}
//                             <h2 className="text-center text-3xl font-bold sm:text-4xl">
//                                    Explore Nearby Stores
//                             </h2>

//                             {/* Description */}
//                             <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-500 sm:mt-4 sm:text-base">
//                                    Find trusted local service providers in your area.
//                             </p>

//                             {/* Search */}
//                             <SearchBar
//                                    value={search}
//                                    onChange={setSearch}
//                             />

//                             {/* Stores */}
//                             <div
//                                    className="
//                                           mt-8
//                                           grid
//                                           grid-cols-1
//                                           gap-5
//                                           sm:mt-10
//                                           sm:grid-cols-2
//                                           sm:gap-6
//                                           lg:grid-cols-4
//                                    "
//                             >
//                                    {filteredStores.map((store) => (
//                                           <StoreCard
//                                                  key={store.id}
//                                                  {...store}
//                                           />
//                                    ))}
//                             </div>

//                             {/* No Results */}
//                             {filteredStores.length === 0 && (
//                                    <div className="mt-10 text-center">
//                                           <p className="text-gray-500">
//                                                  No stores found in this area.
//                                           </p>
//                                    </div>
//                             )}

//                      </div>
//               </section>
//        );
// }

// export default ExploreStores;



import { useMemo, useState } from "react";
import stores from "../../data/stores";
import SearchBar from "./SearchBar";
import StoreCard from "./StoreCard";

function ExploreStores() {
       const [search, setSearch] = useState("");

       const filteredStores = useMemo(() => {
              return stores.filter((store) =>
                     store.area
                            .toLowerCase()
                            .includes(search.toLowerCase())
              );
       }, [search]);

       return (
              <section
                     id="stores"
                     className="bg-gray-50 py-12 sm:py-16"
              >
                     <div className="mx-auto max-w-7xl px-4 sm:px-6">

                            {/* Heading */}
                            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                                   Explore Nearby Stores
                            </h2>

                            {/* Description */}
                            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-500 sm:mt-4 sm:text-base">
                                   Find trusted local service providers in your area.
                            </p>

                            {/* Search */}
                            <SearchBar
                                   value={search}
                                   onChange={setSearch}
                            />

                            {/* Stores */}
                            <div
                                   className="
                                          mt-8
                                          grid
                                          grid-cols-2
                                          gap-4
                                          sm:mt-10
                                          sm:gap-6
                                          md:grid-cols-2
                                          lg:grid-cols-4
                                   "
                            >
                                   {filteredStores.map((store) => (
                                          <StoreCard
                                                 key={store.id}
                                                 {...store}
                                          />
                                   ))}
                            </div>

                            {/* No Results */}
                            {filteredStores.length === 0 && (
                                   <div className="mt-10 text-center">
                                          <p className="text-gray-500">
                                                 No stores found in this area.
                                          </p>
                                   </div>
                            )}

                     </div>
              </section>
       );
}

export default ExploreStores;

