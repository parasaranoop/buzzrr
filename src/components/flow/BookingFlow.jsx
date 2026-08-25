// import bookingSteps from "../../data/bookingSteps";
// import FlowCard from "./FlowCard";

// function BookingFlow() {
//        return (
//               <section id="booking" className="bg-gray-50 py-16">
//                      <div className="mx-auto max-w-7xl px-6">
//                             <h2 className="text-center text-4xl font-bold">
//                                    Our Simple 4-Step Flow
//                             </h2>

//                             <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
//                                    Book trusted home services instantly on WhatsApp.
//                             </p>

//                             <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//                                    {bookingSteps.map((step) => (
//                                           <FlowCard
//                                                  key={step.id}
//                                                  {...step}
//                                           />
//                                    ))}
//                             </div>
//                      </div>
//               </section>
//        );
// }

// export default BookingFlow;


//2nd
import bookingSteps from "../../data/bookingSteps";
import FlowCard from "./FlowCard";

function BookingFlow() {
       return (
              <section
                     id="booking"
                     className="bg-gray-50 py-12 sm:py-16 lg:py-20"
              >
                     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                            {/* Heading */}
                            <div className="text-center">
                                   <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                          Our Simple 4-Step Flow
                                   </h2>

                                   <p className="mx-auto mt-3 max-w-2xl text-sm leading-4 text-gray-500 sm:mt-4 sm:text-base sm:leading-7">
                                          Book trusted home services instantly on WhatsApp.
                                   </p>
                            </div>

                            {/* Steps */}

                            {/* <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4">
                                   {bookingSteps.map((step) => (
                                          <FlowCard
                                                 key={step.id}
                                                 {...step}
                                          />
                                   ))}
                            </div> */}

                            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                                   {bookingSteps.map((step) => (
                                          <FlowCard
                                                 key={step.id}
                                                 {...step}
                                          />
                                   ))}
                            </div>


                     </div>
              </section>
       );
}

export default BookingFlow;