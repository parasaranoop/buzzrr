import services from "../../data/services";
import ServiceCard from "./ServiceCard"

function Services() {
       return (
              <section id="services" className="py-16">
                     <div className="mx-auto max-w-7xl px-6">
                            <h2 className="text-center text-4xl font-bold">
                                   Popular Services
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-center text-gray-500">
                                   Booked trusted home services in second throug WhatsApp.
                            </p>
                            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                   {services.map((service) => (
                                          <ServiceCard
                                                 key={service.name}
                                                 {...service}
                                          />
                                   ))}
                            </div>
                     </div>
              </section>
       )
}

export default Services;