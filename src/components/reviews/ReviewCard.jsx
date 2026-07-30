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
              <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                     <div className="flex items-center gap-4">

                            <img
                                   src={image}
                                   alt={name}
                                   className="h-16 w-16 rounded-full object-cover"
                            />

                            <div>

                                   <div className="flex items-center gap-2">

                                          <h3 className="font-semibold text-lg">
                                                 {name}
                                          </h3>

                                          {verified && (
                                                 <FaCheckCircle className="text-blue-600" />
                                          )}

                                   </div>

                                   <p className="text-sm text-gray-500">
                                          {area} • {service}
                                   </p>

                                   <div className="mt-2">
                                          <RatingStars rating={rating} />
                                   </div>

                            </div>

                     </div>

                     <p className="mt-6 leading-7 text-gray-600">
                            "{review}"
                     </p>

                     <p className="mt-6 text-sm text-gray-400">
                            {date}
                     </p>

              </div>
       );
}

export default ReviewCard;