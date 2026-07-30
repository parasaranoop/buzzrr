import { FaSearch } from "react-icons/fa";

import BookingCard from "./BookingCard";
import GoogleMapSection from "./GoogleMap";
import NearbyStores from "./NearbyStores";

function MapSection() {

       return (

              <section
                     id="stores"
                     className="bg-white py-20"
              >

                     <div className="mx-auto max-w-7xl px-6">

                            <h2 className="text-center text-4xl font-bold">
                                   Serving Guwahati
                            </h2>

                            <p className="mt-3 text-center text-gray-500">
                                   Find trusted stores and technicians near you.
                            </p>

                            {/* Search */}

                            <div className="mx-auto mt-10 max-w-3xl">

                                   <div className="flex items-center rounded-full border border-gray-300 bg-white px-6 py-4 shadow">

                                          <FaSearch className="text-gray-400" />

                                          <input
                                                 type="text"
                                                 placeholder="Search your area..."
                                                 className="ml-4 w-full outline-none"
                                          />

                                   </div>

                            </div>

                            {/* Booking + Map */}

                            <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

                                   <BookingCard />

                                   <GoogleMapSection />

                            </div>



                     </div>

              </section>

       );

}

export default MapSection;