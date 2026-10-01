
// import { FaMapMarkerAlt, FaStar, FaWhatsapp } from "react-icons/fa";
// import { openWhatsapp } from "../../hooks/useWhatsapp";
// //import tags from "../../data/tags";

// function StoreCard({
//        name,
//        area,
//        rating,
//        image,
//        services,
//        tags,
//        open,
// }) {
//        return (
//               <div
//                      className="
//                             group
//                             overflow-hidden
//                             rounded-2xl
//                             bg-white
//                             shadow-sm
//                             transition-all
//                             duration-300
//                             hover:-translate-y-1
//                             hover:shadow-xl
//                             sm:rounded-3xl
//                             md:hover:-translate-y-2
//                      "
//               >
//                      {/* Image */}
//                      <img
//                             src={image}
//                             alt={name}
//                             className="
//                                    h-28
//                                    w-full
//                                    object-cover
//                                    sm:h-40
//                                    md:h-52
//                             "
//                      />

//                      <div className="p-3 sm:p-5 md:p-6">

//                             {/* Name + Status */}
//                             <div className="flex items-start justify-between gap-2">

//                                    <h3
//                                           className="
//                                                  min-w-0
//                                                  text-sm
//                                                  font-semibold
//                                                  leading-5
//                                                  text-gray-900
//                                                  sm:text-lg
//                                                  md:text-xl
//                                           "
//                                    >
//                                           {name}
//                                    </h3>

//                                    <span
//                                           className={`
//                                                  shrink-0
//                                                  rounded-full
//                                                  px-2
//                                                  py-1
//                                                  text-[9px]
//                                                  font-medium
//                                                  sm:px-2.5
//                                                  sm:text-xs
//                                                  ${open
//                                                         ? "bg-green-100 text-green-600"
//                                                         : "bg-red-100 text-red-600"
//                                                  }
//                                           `}
//                                    >
//                                           {open ? "Open" : "Closed"}
//                                    </span>

//                             </div>

//                             {/* Area */}
//                             <div
//                                    className="
//                                           mt-2
//                                           flex
//                                           items-center
//                                           gap-1.5
//                                           text-[11px]
//                                           text-gray-500
//                                           sm:mt-3
//                                           sm:gap-2
//                                           sm:text-sm
//                                    "
//                             >
//                                    <FaMapMarkerAlt className="shrink-0" />
//                                    <span className="truncate">
//                                           {area}
//                                    </span>
//                             </div>

//                             {/* Rating */}
//                             <div
//                                    className="
//                                           mt-1.5
//                                           flex
//                                           items-center
//                                           gap-1.5
//                                           text-[11px]
//                                           text-yellow-500
//                                           sm:mt-2
//                                           sm:gap-2
//                                           sm:text-sm
//                                    "
//                             >
//                                    <FaStar />
//                                    <span>{rating}</span>
//                             </div>

//                             {/* Services */}
//                             <div
//                                    className="
//                                           mt-3
//                                           flex
//                                           flex-wrap
//                                           gap-1.5
//                                           sm:mt-4
//                                           sm:gap-2
//                                    "
//                             >
//                                    {services.map((service) => (
//                                           <span
//                                                  key={service}
//                                                  className="
//                                                         rounded-full
//                                                         bg-blue-50
//                                                         px-2
//                                                         py-1
//                                                         text-[9px]
//                                                         text-blue-600
//                                                         sm:px-3
//                                                         sm:text-xs
//                                                  "
//                                           >
//                                                  {service}
//                                           </span>
//                                    ))}
//                             </div>
//                             {/*Tags */}

//                             <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
//                                    {tags.map((tag) => (
//                                           <span
//                                                  key={tag}
//                                                  className="rounded-full bg-blue-50 px-2 py-1 text-[9px] text-blue-600 sm:px-3 sm:text-xs">
//                                                  {tag}
//                                           </span>

//                                    ))}
//                             </div>

//                             {/* WhatsApp Button */}
//                             <button
//                                    onClick={() =>
//                                           openWhatsapp(
//                                                  `${services[0]} from ${name}`
//                                           )
//                                    }
//                                    className="
//                                           mt-4
//                                           flex
//                                           w-full
//                                           items-center
//                                           justify-center
//                                           gap-1.5
//                                           rounded-full
//                                           bg-green-500
//                                           px-2
//                                           py-2
//                                           text-[10px]
//                                           font-medium
//                                           text-white
//                                           transition
//                                           hover:bg-green-600
//                                           sm:mt-5
//                                           sm:gap-2
//                                           sm:py-2.5
//                                           sm:text-xs
//                                           md:mt-6
//                                           md:py-3
//                                           md:text-sm
//                                    "
//                             >
//                                    <FaWhatsapp />
//                                    <span>Book on WhatsApp</span>
//                             </button>

//                      </div>
//               </div>
//        );
// }

// export default StoreCard;


//main
// import { FaMapMarkerAlt, FaStar, FaWhatsapp } from "react-icons/fa";
// import { openWhatsapp } from "../../hooks/useWhatsapp";

// function StoreCard({
//        name,
//        area,
//        rating,
//        image,
//        services = [],
//        tags = [],
//        open,
// }) {
//        const safeServices = Array.isArray(services) ? services : [];
//        const safeTags = Array.isArray(tags) ? tags : [];
//        return (
//               <div
//                      className="
//                             group
//                             overflow-hidden
//                             rounded-2xl
//                             bg-white
//                             shadow-sm
//                             transition-all
//                             duration-300
//                             hover:-translate-y-1
//                             hover:shadow-xl
//                             sm:rounded-3xl
//                             md:hover:-translate-y-2
//                      "
//               >
//                      {/* Image */}
//                      <img
//                             src={image}
//                             alt={name}
//                             className="
//                                    h-28
//                                    w-full
//                                    object-cover
//                                    sm:h-40
//                                    md:h-52
//                             "
//                      />

//                      <div className="p-3 sm:p-5 md:p-6">

//                             {/* Name + Status */}
//                             <div className="flex items-start justify-between gap-2">
//                                    <h3
//                                           className="
//                                                  min-w-0
//                                                  text-sm
//                                                  font-semibold
//                                                  leading-5
//                                                  text-gray-900
//                                                  sm:text-lg
//                                                  md:text-xl
//                                           "
//                                    >
//                                           {name}
//                                    </h3>

//                                    <span
//                                           className={`
//                                                  shrink-0
//                                                  rounded-full
//                                                  px-2
//                                                  py-1
//                                                  text-[9px]
//                                                  font-medium
//                                                  sm:px-2.5
//                                                  sm:text-xs
//                                                  ${open
//                                                         ? "bg-green-100 text-green-600"
//                                                         : "bg-red-100 text-red-600"
//                                                  }
//                                           `}
//                                    >
//                                           {open ? "Open" : "Closed"}
//                                    </span>
//                             </div>

//                             {/* Area */}
//                             <div
//                                    className="
//                                           mt-2
//                                           flex
//                                           items-center
//                                           gap-1.5
//                                           text-[11px]
//                                           text-gray-500
//                                           sm:mt-3
//                                           sm:gap-2
//                                           sm:text-sm
//                                    "
//                             >
//                                    <FaMapMarkerAlt className="shrink-0" />
//                                    <span className="truncate">{area}</span>
//                             </div>

//                             {/* Rating */}
//                             <div
//                                    className="
//                                           mt-1.5
//                                           flex
//                                           items-center
//                                           gap-1.5
//                                           text-[11px]
//                                           text-yellow-500
//                                           sm:mt-2
//                                           sm:gap-2
//                                           sm:text-sm
//                                    "
//                             >
//                                    <FaStar />
//                                    <span>{rating}</span>
//                             </div>

//                             {/* Services */}
//                             {services.length > 0 && (
//                                    <div
//                                           className="
//                                                  mt-3
//                                                  flex
//                                                  flex-wrap
//                                                  gap-1.5
//                                                  sm:mt-4
//                                                  sm:gap-2
//                                           "
//                                    >
//                                           {safeServices.map((service) => (
//                                                  <span
//                                                         key={service}
//                                                         className="
//                                                                rounded-full
//                                                                bg-blue-50
//                                                                px-2
//                                                                py-1
//                                                                text-[9px]
//                                                                text-blue-600
//                                                                sm:px-3
//                                                                sm:text-xs
//                                                         "
//                                                  >
//                                                         {service}
//                                                  </span>
//                                           ))}
//                                    </div>
//                             )}

//                             {/* Tags */}
//                             {tags.length > 0 && (
//                                    <div className="mt-1 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
//                                           {safeTags.map((tag) => (
//                                                  <span
//                                                         key={tag}
//                                                         className="
//                                                                rounded-full
//                                                                bg-purple-50
//                                                                px-2
//                                                                py-1
//                                                                text-[9px]
//                                                                text-purple-600
//                                                                sm:px-3
//                                                                sm:text-xs
//                                                         "
//                                                  >
//                                                         {tag}
//                                                  </span>
//                                           ))}
//                                    </div>
//                             )}

//                             {/* WhatsApp Button */}
//                             <button
//                                    onClick={() =>
//                                           openWhatsapp(
//                                                  `${services[0] || "home service"} from ${name}`
//                                           )
//                                    }
//                                    className="
//                                           mt-4
//                                           flex
//                                           w-full
//                                           items-center
//                                           justify-center
//                                           gap-1.5
//                                           rounded-full
//                                           bg-green-500
//                                           px-2
//                                           py-2
//                                           text-[10px]
//                                           font-medium
//                                           text-white
//                                           transition
//                                           hover:bg-green-600
//                                           sm:mt-5
//                                           sm:gap-2
//                                           sm:py-2.5
//                                           sm:text-xs
//                                           md:mt-6
//                                           md:py-3
//                                           md:text-sm
//                                    "
//                             >
//                                    <FaWhatsapp />
//                                    <span>Book on WhatsApp</span>
//                             </button>

//                      </div>
//               </div>
//        );
// }

// export default StoreCard;
