import { FaBolt, FaWhatsapp } from "react-icons/fa";
import { openWhatsapp } from "../../hooks/useWhatsapp";

function CTA() {
       return (
              <section className="py-12">
                     <div className="mx-auto max-w-7xl px-6">

                            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-blue-600 px-8 py-6 shadow-xl lg:flex-row">

                                   {/* Left */}

                                   <div className="flex items-center gap-5">

                                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400">
                                                 <FaBolt className="text-3xl text-blue-700" />
                                          </div>

                                          <div>
                                                 <h2 className="text-2xl font-bold text-white">
                                                        Need a Technician Today?
                                                 </h2>

                                                 <p className="mt-1 text-blue-100">
                                                        Book instantly on WhatsApp. Fast, easy & reliable.
                                                 </p>
                                          </div>

                                   </div>

                                   {/* Right */}

                                   <button
                                          onClick={openWhatsapp}
                                          className="flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
                                   >
                                          <FaWhatsapp />
                                          Book on WhatsApp
                                   </button>

                            </div>

                     </div>
              </section>
       );
}

export default CTA;