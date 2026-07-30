import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import services from "../../data/services";
import { openWhatsapp } from "../../hooks/useWhatsapp";
import HeroPhone from "./HeroPhone";
import Timeline from "./Timeline";

function Hero() {
       return (
              <section id="home" className="bg-gradient-to-b from-blue-50 to-white pt-32 pb-10">
                     <div className="mx-auto max-w-7xl px-6">
                            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr_0.65fr]">

                                   {/* LEFT SIDE */}
                                   <div className="max-w-2xl">
                                          {/* Badge */}
                                          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
                                                 VERIFIED SERVICES & TRUSTED STORES
                                          </div>

                                          {/* Heading */}
                                          <h1 className="mt-6 text-5xl font-bold leading-[1.08] lg:text-[64px]">
                                                 Help in
                                                 <span className="text-blue-600"> 1 Hour.</span>
                                                 <br />
                                                 Book on
                                                 <span className="text-green-500"> WhatsApp.</span>
                                          </h1>

                                          {/* Subtitle */}
                                          <p className="mt-5 text-lg leading-8 text-gray-600">
                                                 Trusted technicians for all your home needs.
                                                 <br />
                                                 <span className="font-medium text-blue-600">
                                                        No app.
                                                 </span>{" "}
                                                 <span className="font-medium text-blue-600">
                                                        No calls.
                                                 </span>{" "}
                                                 Just WhatsApp.
                                          </p>

                                          {/* Services */}
                                          <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-4">
                                                 {services.map((service) => (
                                                        <div
                                                               key={service.name}
                                                               className="flex items-center gap-3"
                                                        >
                                                               <FaCheckCircle className="text-blue-600" />
                                                               <span className="font-medium text-gray-700">
                                                                      {service.name}
                                                               </span>
                                                        </div>
                                                 ))}
                                          </div>

                                          {/* Buttons */}
                                          <div className="mt-8 flex flex-wrap gap-4">
                                                 <button
                                                        onClick={() => openWhatsapp()}
                                                        className="flex items-center gap-3 rounded-full bg-green-500 px-7 py-4 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-600"
                                                 >
                                                        <FaWhatsapp />
                                                        Book on WhatsApp
                                                 </button>

                                                 <button className="rounded-full border border-gray-300 bg-white px-7 py-4 font-medium transition hover:bg-gray-50">
                                                        View Services
                                                 </button>
                                          </div>

                                          {/* Customers */}
                                          <div className="mt-8 flex items-center gap-4">
                                                 <div className="flex -space-x-3">
                                                        <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-300" />
                                                        <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-400" />
                                                        <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-500" />
                                                 </div>

                                                 <p className="text-gray-600">
                                                        <span className="font-semibold text-gray-900">
                                                               10,000+
                                                        </span>{" "}
                                                        happy customers in Guwahati
                                                 </p>
                                          </div>
                                   </div>

                                   {/* PHONE */}
                                   <div className="flex justify-center">
                                          <HeroPhone />
                                   </div>

                                   {/* TIMELINE */}
                                   <div className="hidden lg:block">
                                          <Timeline />
                                   </div>
                            </div>
                     </div>
              </section>
       );
}



export default Hero;