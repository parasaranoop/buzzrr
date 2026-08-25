// import { FaMapMarkerAlt, FaStar, FaWhatsapp } from "react-icons/fa";
// import { openWhatsapp } from "../../hooks/useWhatsapp";

// function StoreCard({
//        name,
//        area,
//        rating,
//        image,
//        services,
//        open,
// }) {
//        return (
//               <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

//                      <img
//                             src={image}
//                             alt={name}
//                             className="h-52 w-full object-cover"
//                      />

//                      <div className="p-6">

//                             <div className="flex items-center justify-between">

//                                    <h3 className="text-xl font-semibold">
//                                           {name}
//                                    </h3>

//                                    <span
//                                           className={`rounded-full px-3 py-1 text-xs font-medium ${open
//                                                  ? "bg-green-100 text-green-600"
//                                                  : "bg-red-100 text-red-600"
//                                                  }`}
//                                    >
//                                           {open ? "Open" : "Closed"}
//                                    </span>

//                             </div>

//                             <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
//                                    <FaMapMarkerAlt />
//                                    {area}
//                             </div>

//                             <div className="mt-2 flex items-center gap-2 text-sm text-yellow-500">
//                                    <FaStar />
//                                    {rating}
//                             </div>

//                             <div className="mt-4 flex flex-wrap gap-2">
//                                    {services.map((service) => (
//                                           <span
//                                                  key={service}
//                                                  className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600"
//                                           >
//                                                  {service}
//                                           </span>
//                                    ))}
//                             </div>

//                             <button
//                                    onClick={() =>
//                                           openWhatsapp(`${services[0]} from ${name}`)
//                                    }
//                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-green-500 py-3 text-white hover:bg-green-600"
//                             >
//                                    <FaWhatsapp />
//                                    Book on WhatsApp
//                             </button>

//                      </div>
//               </div>
//        );
// }

// export default StoreCard;


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
              <div
                     className="
                            group
                            overflow-hidden
                            rounded-2xl
                            bg-white
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-xl
                            sm:rounded-3xl
                            md:hover:-translate-y-2
                     "
              >
                     {/* Image */}
                     <img
                            src={image}
                            alt={name}
                            className="
                                   h-28
                                   w-full
                                   object-cover
                                   sm:h-40
                                   md:h-52
                            "
                     />

                     <div className="p-3 sm:p-5 md:p-6">

                            {/* Name + Status */}
                            <div className="flex items-start justify-between gap-2">

                                   <h3
                                          className="
                                                 min-w-0
                                                 text-sm
                                                 font-semibold
                                                 leading-5
                                                 text-gray-900
                                                 sm:text-lg
                                                 md:text-xl
                                          "
                                   >
                                          {name}
                                   </h3>

                                   <span
                                          className={`
                                                 shrink-0
                                                 rounded-full
                                                 px-2
                                                 py-1
                                                 text-[9px]
                                                 font-medium
                                                 sm:px-2.5
                                                 sm:text-xs
                                                 ${open
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-red-100 text-red-600"
                                                 }
                                          `}
                                   >
                                          {open ? "Open" : "Closed"}
                                   </span>

                            </div>

                            {/* Area */}
                            <div
                                   className="
                                          mt-2
                                          flex
                                          items-center
                                          gap-1.5
                                          text-[11px]
                                          text-gray-500
                                          sm:mt-3
                                          sm:gap-2
                                          sm:text-sm
                                   "
                            >
                                   <FaMapMarkerAlt className="shrink-0" />
                                   <span className="truncate">
                                          {area}
                                   </span>
                            </div>

                            {/* Rating */}
                            <div
                                   className="
                                          mt-1.5
                                          flex
                                          items-center
                                          gap-1.5
                                          text-[11px]
                                          text-yellow-500
                                          sm:mt-2
                                          sm:gap-2
                                          sm:text-sm
                                   "
                            >
                                   <FaStar />
                                   <span>{rating}</span>
                            </div>

                            {/* Services */}
                            <div
                                   className="
                                          mt-3
                                          flex
                                          flex-wrap
                                          gap-1.5
                                          sm:mt-4
                                          sm:gap-2
                                   "
                            >
                                   {services.map((service) => (
                                          <span
                                                 key={service}
                                                 className="
                                                        rounded-full
                                                        bg-blue-50
                                                        px-2
                                                        py-1
                                                        text-[9px]
                                                        text-blue-600
                                                        sm:px-3
                                                        sm:text-xs
                                                 "
                                          >
                                                 {service}
                                          </span>
                                   ))}
                            </div>

                            {/* WhatsApp Button */}
                            <button
                                   onClick={() =>
                                          openWhatsapp(
                                                 `${services[0]} from ${name}`
                                          )
                                   }
                                   className="
                                          mt-4
                                          flex
                                          w-full
                                          items-center
                                          justify-center
                                          gap-1.5
                                          rounded-full
                                          bg-green-500
                                          px-2
                                          py-2
                                          text-[10px]
                                          font-medium
                                          text-white
                                          transition
                                          hover:bg-green-600
                                          sm:mt-5
                                          sm:gap-2
                                          sm:py-2.5
                                          sm:text-xs
                                          md:mt-6
                                          md:py-3
                                          md:text-sm
                                   "
                            >
                                   <FaWhatsapp />
                                   <span>Book on WhatsApp</span>
                            </button>

                     </div>
              </div>
       );
}

export default StoreCard;