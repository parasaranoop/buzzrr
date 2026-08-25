// import services from "../../data/services";
// import ServiceCard from "./ServiceCard"

// function Services() {
//        return (
//               <section id="services" className="py-16">
//                      <div className="mx-auto max-w-7xl px-6">
//                             <h2 className="text-center text-4xl font-bold">
//                                    Popular Services
//                             </h2>
//                             <p className="mx-auto mt-4 max-w-xl text-center text-gray-500">
//                                    Booked trusted home services in second throug WhatsApp.
//                             </p>
//                             <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                                    {services.map((service) => (
//                                           <ServiceCard
//                                                  key={service.name}
//                                                  {...service}
//                                           />
//                                    ))}
//                             </div>
//                      </div>
//               </section>
//        )
// }

// export default Services;


import services from "../../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
       return (
              <section
                     id="services"
                     className="bg-white py-12 sm:py-16"
              >
                     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                            {/* Heading */}
                            <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
                                   Popular Services
                            </h2>

                            {/* Description */}
                            <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-gray-500 sm:mt-4 sm:text-base">
                                   Book trusted home services in seconds through WhatsApp.
                            </p>

                            {/* Services Grid */}
                            <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:mt-14 lg:grid-cols-3">
                                   {services.map((service) => (
                                          <ServiceCard
                                                 key={service.name}
                                                 {...service}
                                          />
                                   ))}
                            </div>

                     </div>
              </section>
       );
}

export default Services;