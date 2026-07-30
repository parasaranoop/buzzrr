import { FaMapMarkerAlt, FaStar, FaWhatsapp } from "react-icons/fa";
import { openWhatsapp } from "../../hooks/useWhatsapp";

function StoreCard({
       name,
       area,
       rating,
       image,
       services,
       open,
}) {
       return (
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

                     <img
                            src={image}
                            alt={name}
                            className="h-52 w-full object-cover"
                     />

                     <div className="p-6">

                            <div className="flex items-center justify-between">

                                   <h3 className="text-xl font-semibold">
                                          {name}
                                   </h3>

                                   <span
                                          className={`rounded-full px-3 py-1 text-xs font-medium ${open
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-red-100 text-red-600"
                                                 }`}
                                   >
                                          {open ? "Open" : "Closed"}
                                   </span>

                            </div>

                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                                   <FaMapMarkerAlt />
                                   {area}
                            </div>

                            <div className="mt-2 flex items-center gap-2 text-sm text-yellow-500">
                                   <FaStar />
                                   {rating}
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                   {services.map((service) => (
                                          <span
                                                 key={service}
                                                 className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600"
                                          >
                                                 {service}
                                          </span>
                                   ))}
                            </div>

                            <button
                                   onClick={() =>
                                          openWhatsapp(`${services[0]} from ${name}`)
                                   }
                                   className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-green-500 py-3 text-white hover:bg-green-600"
                            >
                                   <FaWhatsapp />
                                   Book on WhatsApp
                            </button>

                     </div>
              </div>
       );
}

export default StoreCard;