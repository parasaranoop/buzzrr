import bookingSteps from "../../data/bookingSteps";
import FlowCard from "./FlowCard";

function BookingFlow() {
       return (
              <section id="booking" className="bg-gray-50 py-16">
                     <div className="mx-auto max-w-7xl px-6">
                            <h2 className="text-center text-4xl font-bold">
                                   Our Simple 4-Step Flow
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
                                   Book trusted home services instantly on WhatsApp.
                            </p>

                            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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