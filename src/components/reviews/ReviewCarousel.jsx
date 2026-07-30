import reviews from "../../data/reviews";
import ReviewCard from "./ReviewCard";

function ReviewCarousel() {
       return (
              <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                     {reviews.map((review) => (
                            <ReviewCard
                                   key={review.id}
                                   {...review}
                            />
                     ))}
              </div>
       );
}

export default ReviewCarousel;