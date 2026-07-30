import ReviewCarousel from "./ReviewCarousel";

function Reviews() {
       return (
              <section
                     id="reviews"
                     className="bg-gray-50 py-24"
              >
                     <div className="mx-auto max-w-7xl px-6">

                            <div className="text-center">

                                   <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                                          CUSTOMER REVIEWS
                                   </span>

                                   <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                                          Loved by Thousands of Customers
                                   </h2>

                                   <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
                                          See why homeowners across Guwahati trust Buzzrr for fast,
                                          reliable and professional home services.
                                   </p>

                            </div>

                            <ReviewCarousel />

                     </div>
              </section>
       );
}

export default Reviews;