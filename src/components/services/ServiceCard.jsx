// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";
// import { openWhatsapp } from "../../hooks/useWhatsapp";

// function ServiceCard({ name, price, icon: Icon }) {
//        return (
//               <motion.div
//                      initial={{ opacity: 0, y: 40 }}
//                      whileInView={{ opacity: 1, y: 0 }}
//                      viewport={{ once: true }}
//                      transition={{ duration: 0.5 }}
//                      whileHover={{ y: -8 }}
//                      onClick={() => openWhatsapp(name)}
//                      className="
//         group
//         cursor-pointer
//         rounded-[28px]
//         border
//         border-gray-100
//         bg-white
//         p-7
//         shadow-sm
//         transition-all
//         duration-300
//         hover:shadow-2xl
//       "
//               >
//                      {/* Icon */}
//                      <div
//                             className="
//           flex
//           h-16
//           w-16
//           items-center
//           justify-center
//           rounded-2xl
//           bg-blue-50
//           transition
//           duration-300
//           group-hover:bg-blue-600
//         "
//                      >
//                             <Icon
//                                    className="
//             text-3xl
//             text-blue-600
//             transition
//             duration-300
//             group-hover:text-white
//           "
//                             />
//                      </div>

//                      {/* Service Name */}
//                      <h3 className="mt-6 text-2xl font-semibold text-gray-900">
//                             {name}
//                      </h3>

//                      {/* Price */}
//                      <p className="mt-2 text-gray-500">
//                             {price}
//                      </p>

//                      {/* Book Button */}
//                      <button
//                             onClick={(e) => {
//                                    e.stopPropagation();
//                                    openWhatsapp(name);
//                             }}
//                             className="
//           mt-8
//           flex
//           items-center
//           gap-2
//           rounded-full
//           bg-green-500
//           px-6
//           py-3
//           font-medium
//           text-white
//           transition
//           duration-300
//           hover:bg-green-600
//         "
//                      >
//                             Book Now
//                             <FaArrowRight className="text-sm" />
//                      </button>
//               </motion.div>
//        );
// }

// export default ServiceCard;


//import { motion } from "framer-motion";
//import { FaArrowRight } from "react-icons/fa";
//import { openWhatsapp } from "../../hooks/useWhatsapp";

// function ServiceCard({ name, price, icon: Icon }) {
//        return (
//               <motion.div
//                      initial={{ opacity: 0, y: 40 }}
//                      whileInView={{ opacity: 1, y: 0 }}
//                      viewport={{ once: true }}
//                      transition={{ duration: 0.5 }}
//                      whileHover={{ y: -8 }}
//                      onClick={() => openWhatsapp(name)}
//                      className="
//                             group
//                             h-full
//                             cursor-pointer
//                             rounded-2xl
//                             border
//                             border-gray-100
//                             bg-white
//                             p-4
//                             shadow-sm
//                             transition-all
//                             duration-300
//                             hover:shadow-2xl
//                             sm:rounded-3xl
//                             sm:p-7
//                      "
//               >
//                      {/* Icon */}
//                      <div
//                             className="
//                                    flex
//                                    h-12
//                                    w-12
//                                    items-center
//                                    justify-center
//                                    rounded-xl
//                                    bg-blue-50
//                                    transition
//                                    duration-300
//                                    group-hover:bg-blue-600
//                                    sm:h-16
//                                    sm:w-16
//                                    sm:rounded-2xl
//                             "
//                      >
//                             <Icon
//                                    className="
//                                           text-2xl
//                                           text-blue-600
//                                           transition
//                                           duration-300
//                                           group-hover:text-white
//                                           sm:text-3xl
//                                    "
//                             />
//                      </div>

//                      {/* Service Name */}
//                      <h3
//                             className="
//                                    mt-4
//                                    text-base
//                                    font-semibold
//                                    leading-5
//                                    text-gray-900
//                                    sm:mt-6
//                                    sm:text-2xl
//                                    sm:leading-7
//                             "
//                      >
//                             {name}
//                      </h3>

//                      {/* Price */}
//                      <p
//                             className="
//                                    mt-2
//                                    text-xs
//                                    leading-5
//                                    text-gray-500
//                                    sm:text-base
//                                    sm:leading-6
//                             "
//                      >
//                             {price}
//                      </p>

//                      {/* Book Button */}
//                      <button
//                             type="button"
//                             onClick={(e) => {
//                                    e.stopPropagation();
//                                    openWhatsapp(name);
//                             }}
//                             className="
//                                    mt-5
//                                    flex
//                                    items-center
//                                    gap-2
//                                    rounded-full
//                                    bg-green-500
//                                    px-4
//                                    py-2.5
//                                    text-xs
//                                    font-medium
//                                    text-white
//                                    transition
//                                    duration-300
//                                    hover:bg-green-600
//                                    sm:mt-8
//                                    sm:px-6
//                                    sm:py-3
//                                    sm:text-base
//                             "
//                      >
//                             Book Now
//                             <FaArrowRight className="text-xs sm:text-sm" />
//                      </button>
//               </motion.div>
//        );
// }

// export default ServiceCard;





//new one

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { openWhatsapp } from "../../hooks/useWhatsapp";
function ServiceCard({
       icon: Icon,
       title,
       question,
       description,
       price,
       image,
       color,
       iconColor,
       onClick,
}) {
       return (
              <div
                     onClick={onClick}
                     className="
                            group
                            relative
                            min-w-0
                            overflow-hidden
                            rounded-2xl
                            bg-white
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-xl
                            sm:rounded-3xl
                     "
              >
                     {/* Image */}
                     <img
                            src={image}
                            alt={title}
                            className="
                                   absolute
                                   right-0
                                   top-0
                                   h-full
                                   w-[42%]
                                   object-cover
                                   object-center

                                   sm:w-[43%]
                            "
                     />

                     {/* Content background */}
                     <div
                            className="
                                   absolute
                                   inset-0
                                   bg-gradient-to-r
                                   from-white
                                   via-white
                                   to-transparent
                            "
                     />

                     {/* Content */}
                     <div
                            className="
                                   relative
                                   z-10
                                   flex
                                   min-h-[210px]
                                   flex-col
                                   p-3
                                   pr-[43%]

                                   sm:min-h-[260px]
                                   sm:p-6
                                   sm:pr-[45%]
                            "
                     >
                            {/* Badge */}
                            <div
                                   className={`
                                          flex
                                          w-fit
                                          items-center
                                          gap-1.5
                                          rounded-full
                                          px-2.5
                                          py-1.5
                                          text-[9px]
                                          font-medium
                                          ${color}

                                          sm:gap-2
                                          sm:px-4
                                          sm:py-2
                                          sm:text-sm
                                   `}
                            >
                                   {Icon && (
                                          <Icon
                                                 className={`
                                                        text-sm
                                                        ${iconColor}
                                                        sm:text-lg
                                                 `}
                                          />
                                   )}

                                   <span>{title}</span>
                            </div>

                            {/* Question */}
                            <h3
                                   className="
                                          mt-4
                                          text-base
                                          font-bold
                                          leading-[1.15]
                                          text-slate-900

                                          sm:mt-7
                                          sm:text-2xl
                                          lg:text-3xl
                                   "
                            >
                                   {question}
                            </h3>

                            {/* Description */}
                            <p
                                   className="
                                          mt-2
                                          text-[10px]
                                          leading-4
                                          text-gray-600

                                          sm:mt-3
                                          sm:text-sm
                                          sm:leading-6
                                   "
                            >
                                   {description}
                            </p>

                            {/* Bottom */}
                            <div
                                   className="
                                          mt-auto
                                          flex
                                          items-end
                                          justify-between
                                          gap-2
                                          pt-4

                                          sm:pt-7
                                   "
                            >
                                   <div>
                                          <p
                                                 className="
                                                        text-[9px]
                                                        text-gray-500
                                                        sm:text-sm
                                                 "
                                          >
                                                 From
                                          </p>

                                          <p
                                                 className="
                                                        text-lg
                                                        font-bold
                                                        text-blue-600
                                                        sm:text-3xl
                                                 "
                                          >
                                                 ₹{price}
                                          </p>
                                   </div>

                                   {/* Arrow */}
                                   <div
                                          className="
                                                 flex
                                                 h-8
                                                 w-8
                                                 shrink-0
                                                 items-center
                                                 justify-center
                                                 rounded-full
                                                 bg-blue-600
                                                 text-white
                                                 transition-transform
                                                 duration-300
                                                 group-hover:translate-x-1

                                                 sm:h-12
                                                 sm:w-12
                                          "
                                   >
                                          →
                                   </div>
                            </div>
                     </div>
              </div>
       );
}



export default ServiceCard;