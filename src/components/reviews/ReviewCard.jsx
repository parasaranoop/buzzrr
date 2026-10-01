// import { FaCheckCircle } from "react-icons/fa";
// import RatingStars from "./RatingStars";

// function ReviewCard({
//        name,
//        area,
//        service,
//        rating,
//        review,
//        image,
//        verified,
//        date,
// }) {
//        return (
//               <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

//                      <div className="flex items-center gap-4">

//                             <img
//                                    src={image}
//                                    alt={name}
//                                    className="h-16 w-16 rounded-full object-cover"
//                             />

//                             <div>

//                                    <div className="flex items-center gap-2">

//                                           <h3 className="font-semibold text-lg">
//                                                  {name}
//                                           </h3>

//                                           {verified && (
//                                                  <FaCheckCircle className="text-blue-600" />
//                                           )}

//                                    </div>

//                                    <p className="text-sm text-gray-500">
//                                           {area} • {service}
//                                    </p>

//                                    <div className="mt-2">
//                                           <RatingStars rating={rating} />
//                                    </div>

//                             </div>

//                      </div>

//                      <p className="mt-6 leading-5 text-gray-500">
//                             "{review}"
//                      </p>

//                      <p className="mt-4 text-sm text-gray-400">
//                             {date}
//                      </p>

//               </div>
//        );
// }

// export default ReviewCard;/

//2 nd one

import { FaCheckCircle } from "react-icons/fa";
import RatingStars from "./RatingStars";

function ReviewCard({
       name,
       area,
       service,
       rating,
       review,
       image,
       verified,
       date,
}) {
       return (
              <div
                     className="
                            group
                            relative
                            rounded-3xl
                            bg-white
                            p-6
                            shadow-[0_15px_40px_rgba(0,0,0,0.10)]
                            transition-all
                            duration-500
                            hover:-translate-y-4
                            hover:shadow-[0_25px_55px_rgba(0,0,0,0.15)]
                            animate-[reviewFloat_5s_ease-in-out_infinite]
                     "
              >
                     {/* User */}
                     <div className="flex items-center gap-4">

                            <img
                                   src={image}
                                   alt={name}
                                   className="
                                          h-14
                                          w-14
                                          shrink-0
                                          rounded-full
                                          object-cover
                                          ring-4
                                          ring-blue-50
                                   "
                            />

                            <div className="min-w-0">

                                   <div className="flex items-center gap-2">

                                          <h3 className="truncate text-lg font-semibold text-gray-900">
                                                 {name}
                                          </h3>

                                          {verified && (
                                                 <FaCheckCircle
                                                        className="
                                                               shrink-0
                                                               text-blue-600
                                                        "
                                                 />
                                          )}

                                   </div>

                                   <p className="mt-1 text-sm text-gray-500">
                                          {area} • {service}
                                   </p>

                                   <div className="mt-2">
                                          <RatingStars rating={rating} />
                                   </div>

                            </div>

                     </div>

                     {/* Review */}
                     <p className="mt-5 text-sm leading-6 text-gray-600 sm:text-base">
                            "{review}"
                     </p>

                     {/* Date */}
                     <p className="mt-4 text-xs text-gray-400">
                            {date}
                     </p>

                     {/* Floating shadow */}
                     <div
                            className="
                                   pointer-events-none
                                   absolute
                                   -bottom-4
                                   left-1/2
                                   -z-10
                                   h-8
                                   w-3/4
                                   -translate-x-1/2
                                   rounded-full
                                   bg-blue-200/30
                                   blur-xl
                            "
                     />

              </div>
       );
}

export default ReviewCard;



