// function FeatureCard({
//        title,
//        description,
//        icon: Icon,
//        color,
//        text,
// }) {
//        return (
//               <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
//                      <div
//                             className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}
//                      >
//                             {Icon ? (
//                                    <Icon className={`text-3xl ${text}`} />
//                             ) : (
//                                    <span className="text-2xl">⭐</span>
//                             )}
//                      </div>

//                      <h3 className="mt-6 text-xl font-semibold text-gray-900">
//                             {title}
//                      </h3>

//                      <p className="mt-3 text-gray-500 leading-7">
//                             {description}
//                      </p>
//               </div>
//        );
// }

// export default FeatureCard;


function FeatureCard({
       title,
       description,
       icon: Icon,
       color,
       text,
}) {
       return (
              <div
                     className="
                            group
                            rounded-2xl
                            bg-white
                            p-4
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-xl
                            sm:rounded-3xl
                            sm:p-6
                            md:p-8
                            lg:hover:-translate-y-2
                     "
              >
                     {/* Icon */}
                     <div
                            className={`
                                   flex
                                   h-12
                                   w-12
                                   items-center
                                   justify-center
                                   rounded-xl
                                   ${color}
                                   sm:h-14
                                   sm:w-14
                                   sm:rounded-2xl
                                   md:h-16
                                   md:w-16
                            `}
                     >
                            {Icon ? (
                                   <Icon
                                          className={`
                                                 text-2xl
                                                 ${text}
                                                 sm:text-3xl
                                          `}
                                   />
                            ) : (
                                   <span className="text-xl sm:text-2xl">
                                          ⭐
                                   </span>
                            )}
                     </div>

                     {/* Title */}
                     <h3
                            className="
                                   mt-4
                                   text-base
                                   font-semibold
                                   leading-5
                                   text-gray-900
                                   sm:mt-5
                                   sm:text-lg
                                   sm:leading-6
                                   md:mt-6
                                   md:text-xl
                            "
                     >
                            {title}
                     </h3>

                     {/* Description */}
                     <p
                            className="
                                   mt-2
                                   text-xs
                                   leading-5
                                   text-gray-500
                                   sm:mt-3
                                   sm:text-sm
                                   sm:leading-6
                                   md:text-base
                                   md:leading-7
                            "
                     >
                            {description}
                     </p>
              </div>
       );
}

export default FeatureCard;