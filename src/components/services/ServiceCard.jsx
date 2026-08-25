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


import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { openWhatsapp } from "../../hooks/useWhatsapp";

function ServiceCard({ name, price, icon: Icon }) {
       return (
              <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                     whileHover={{ y: -8 }}
                     onClick={() => openWhatsapp(name)}
                     className="
                            group
                            h-full
                            cursor-pointer
                            rounded-2xl
                            border
                            border-gray-100
                            bg-white
                            p-4
                            shadow-sm
                            transition-all
                            duration-300
                            hover:shadow-2xl
                            sm:rounded-3xl
                            sm:p-7
                     "
              >
                     {/* Icon */}
                     <div
                            className="
                                   flex
                                   h-12
                                   w-12
                                   items-center
                                   justify-center
                                   rounded-xl
                                   bg-blue-50
                                   transition
                                   duration-300
                                   group-hover:bg-blue-600
                                   sm:h-16
                                   sm:w-16
                                   sm:rounded-2xl
                            "
                     >
                            <Icon
                                   className="
                                          text-2xl
                                          text-blue-600
                                          transition
                                          duration-300
                                          group-hover:text-white
                                          sm:text-3xl
                                   "
                            />
                     </div>

                     {/* Service Name */}
                     <h3
                            className="
                                   mt-4
                                   text-base
                                   font-semibold
                                   leading-5
                                   text-gray-900
                                   sm:mt-6
                                   sm:text-2xl
                                   sm:leading-7
                            "
                     >
                            {name}
                     </h3>

                     {/* Price */}
                     <p
                            className="
                                   mt-2
                                   text-xs
                                   leading-5
                                   text-gray-500
                                   sm:text-base
                                   sm:leading-6
                            "
                     >
                            {price}
                     </p>

                     {/* Book Button */}
                     <button
                            type="button"
                            onClick={(e) => {
                                   e.stopPropagation();
                                   openWhatsapp(name);
                            }}
                            className="
                                   mt-5
                                   flex
                                   items-center
                                   gap-2
                                   rounded-full
                                   bg-green-500
                                   px-4
                                   py-2.5
                                   text-xs
                                   font-medium
                                   text-white
                                   transition
                                   duration-300
                                   hover:bg-green-600
                                   sm:mt-8
                                   sm:px-6
                                   sm:py-3
                                   sm:text-base
                            "
                     >
                            Book Now
                            <FaArrowRight className="text-xs sm:text-sm" />
                     </button>
              </motion.div>
       );
}

export default ServiceCard;