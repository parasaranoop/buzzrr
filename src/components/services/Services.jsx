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


//import services from "../../data/services";
//import ServiceCard from "./ServiceCard";

// function Services() {
//        return (
//               <section
//                      id="services"
//                      className="bg-white py-12 sm:py-16"
//               >
//                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//                             {/* Heading */}
//                             <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
//                                    Popular Services
//                             </h2>

//                             {/* Description */}
//                             <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-gray-500 sm:mt-4 sm:text-base">
//                                    Book trusted home services in seconds through WhatsApp.
//                             </p>

//                             {/* Services Grid */}
//                             <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:mt-14 lg:grid-cols-3">
//                                    {services.map((service) => (
//                                           <ServiceCard
//                                                  key={service.name}
//                                                  {...service}
//                                           />
//                                    ))}
//                             </div>

//                      </div>
//               </section>
//        );
// }

// export default Services;



//new one





import services from "../../data/services";
import ServiceCard from "./ServiceCard";

function Service() {
       return (
              <section
                     id="services"
                     className="bg-white py-12 sm:py-16 lg:py-20"
              >
                     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                            {/* Heading */}
                            <div className="mb-8 text-center sm:mb-10 lg:mb-12">
                                   <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                                          What’s wrong{" "}
                                          <span className="text-blue-600">
                                                 at home?
                                          </span>
                                   </h1>

                                   <p className="mt-3 text-base text-gray-600 sm:text-lg">
                                          Tell us. We’ll take it from here.
                                   </p>
                            </div>

                            {/* Trust Features */}
                            <div className="mb-8 flex flex-wrap justify-center gap-4 sm:mb-10 sm:gap-8 lg:mb-12">
                                   <div className="flex items-center gap-2">
                                          <span className="text-xl text-blue-600">
                                                 ⚡
                                          </span>
                                          <span className="text-sm font-medium text-gray-700">
                                                 Verified Experts
                                          </span>
                                   </div>

                                   <div className="flex items-center gap-2">
                                          <span className="text-xl text-blue-600">
                                                 🛡️
                                          </span>
                                          <span className="text-sm font-medium text-gray-700">
                                                 Transparent Pricing
                                          </span>
                                   </div>

                                   <div className="flex items-center gap-2">
                                          <span className="text-xl text-blue-600">
                                                 ◷
                                          </span>
                                          <span className="text-sm font-medium text-gray-700">
                                                 On-Time Service
                                          </span>
                                   </div>
                            </div>

                            {/* Service Cards */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-2 lg:gap-6">
                                   {services.map((service) => (
                                          <ServiceCard
                                                 key={service.id}
                                                 {...service}
                                          />
                                   ))}
                            </div>

                     </div>
              </section>
       );
}

export default Service;