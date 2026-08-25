// import { motion } from "framer-motion";

// function FlowCard({
//        title,
//        description,
//        icon: Icon,
//        color,
//        bg,
//        id,
// }) {
//        return (
//               <motion.div
//                      initial={{
//                             opacity: 0,
//                             y: 50,
//                      }}
//                      whileInView={{
//                             opacity: 1,
//                             y: 0,
//                      }}
//                      transition={{
//                             duration: 0.5,
//                      }}
//                      viewport={{ once: true }}
//                      className="
//         relative
//         rounded-3xl
//         border
//         border-gray-100
//         bg-white
//         p-7
//         shadow-sm
//         transition
//         hover:-translate-y-2
//         hover:shadow-xl
//       "
//               >
//                      {/* Number Badge */}
//                      <div
//                             className="
//           absolute
//           right-5
//           top-5
//           flex
//           h-8
//           w-8
//           items-center
//           justify-center
//           rounded-full
//           bg-blue-600
//           text-sm
//           font-semibold
//           text-white
//         "
//                      >
//                             {id}
//                      </div>

//                      {/* Icon */}
//                      <div
//                             className={`
//           flex
//           h-16
//           w-16
//           items-center
//           justify-center
//           rounded-2xl
//           ${bg}
//         `}
//                      >
//                             <Icon className={`text-3xl ${color}`} />
//                      </div>

//                      {/* Content */}
//                      <h3 className="mt-6 text-xl font-semibold">
//                             {title}
//                      </h3>

//                      <p className="mt-3 text-gray-500">
//                             {description}
//                      </p>
//               </motion.div>
//        );
// }

// export default FlowCard;


//2nd

import { motion } from "framer-motion";

function FlowCard({
       title,
       description,
       icon: Icon,
       color,
       bg,
       id,
}) {
       return (
              <motion.div
                     initial={{
                            opacity: 0,
                            y: 30,
                     }}
                     whileInView={{
                            opacity: 1,
                            y: 0,
                     }}
                     transition={{
                            duration: 0.5,
                     }}
                     viewport={{ once: true }}
                     className="
                            relative
                            h-full
                            rounded-2xl
                            border
                            border-gray-100
                            bg-white
                            p-4
                            shadow-sm
                            transition
                            hover:-translate-y-2
                            hover:shadow-xl
                            sm:rounded-3xl
                            sm:p-7
                     "
              >
                     {/* Number Badge */}
                     <div
                            className="
                                   absolute
                                   right-3
                                   top-3
                                   flex
                                   h-7
                                   w-7
                                   items-center
                                   justify-center
                                   rounded-full
                                   bg-blue-600
                                   text-xs
                                   font-semibold
                                   text-white
                                   sm:right-5
                                   sm:top-5
                                   sm:h-8
                                   sm:w-8
                                   sm:text-sm
                            "
                     >
                            {id}
                     </div>

                     {/* Icon */}
                     <div
                            className={`
                                   flex
                                   h-12
                                   w-12
                                   items-center
                                   justify-center
                                   rounded-xl
                                   ${bg}
                                   sm:h-16
                                   sm:w-16
                                   sm:rounded-2xl
                            `}
                     >
                            <Icon
                                   className={`
                                          text-2xl
                                          ${color}
                                          sm:text-3xl
                                   `}
                            />
                     </div>

                     {/* Content */}
                     <h3
                            className="
                                   mt-4
                                   text-base
                                   font-semibold
                                   leading-5
                                   text-slate-900
                                   sm:mt-6
                                   sm:text-xl
                                   sm:leading-7
                            "
                     >
                            {title}
                     </h3>

                     <p
                            className="
                                   mt-2
                                   text-xs
                                   leading-5
                                   text-gray-500
                                   sm:mt-3
                                   sm:text-base
                                   sm:leading-7
                            "
                     >
                            {description}
                     </p>
              </motion.div>
       );
}

export default FlowCard;
