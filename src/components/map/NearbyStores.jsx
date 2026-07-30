const stores = [
       {
              name: "Sharma Electronics",
              area: "Ganeshguri",
              status: "Open Today",
       },
       {
              name: "Smart Electricals",
              area: "Beltola",
              status: "Open Today",
       },
       {
              name: "Paint Bazaar",
              area: "Zoo Road",
              status: "Open Today",
       },
];

function NearbyStores() {

       return (

              <div className="mt-16">

                     <h2 className="text-3xl font-bold">
                            Nearby Stores
                     </h2>

                     <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                            {stores.map((store) => (

                                   <div
                                          key={store.name}
                                          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
                                   >

                                          <div className="h-36 rounded-xl bg-gray-200" />

                                          <h3 className="mt-4 text-xl font-semibold">
                                                 {store.name}
                                          </h3>

                                          <p className="mt-2 text-gray-500">
                                                 {store.area}
                                          </p>

                                          <p className="mt-3 text-green-600 font-medium">
                                                 {store.status}
                                          </p>

                                   </div>

                            ))}

                     </div>

              </div>

       );

}

export default NearbyStores;