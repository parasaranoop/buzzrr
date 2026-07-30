import { FaStar } from "react-icons/fa";

function RatingStars({ rating }) {
       return (
              <div className="flex gap-1">
                     {[...Array(rating)].map((_, index) => (
                            <FaStar
                                   key={index}
                                   className="text-yellow-400"
                            />
                     ))}
              </div>
       );
}

export default RatingStars;