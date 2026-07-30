import { FaWhatsapp } from "react-icons/fa";
import { openWhatsapp } from "../../hooks/useWhatsapp";

function BookingCard() {
       return (
              <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-200">

                     <h2 className="text-3xl font-bold leading-tight">
                            Booking on WhatsApp
                            <br />
                            is that simple.
                     </h2>

                     <div className="mt-8 rounded-2xl bg-[#f5f7fb] p-5">

                            <div className="flex flex-col gap-4">

                                   <div className="self-end rounded-2xl bg-green-500 px-4 py-3 text-white shadow max-w-[220px]">
                                          Need AC Service
                                          <p className="mt-1 text-right text-xs">
                                                 10:30 AM ✓✓
                                          </p>
                                   </div>

                                   <div className="self-start rounded-2xl bg-white px-4 py-3 shadow max-w-[240px]">
                                          Our team will reach in 1 hour
                                          <p className="mt-1 text-right text-xs text-gray-500">
                                                 10:31 AM
                                          </p>
                                   </div>

                                   <div className="self-end rounded-2xl bg-green-500 px-4 py-3 text-white shadow max-w-[220px]">
                                          Thank You 😊
                                          <p className="mt-1 text-right text-xs">
                                                 10:32 AM ✓✓
                                          </p>
                                   </div>

                            </div>

                     </div>

                     <button
                            onClick={openWhatsapp}
                            className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-green-500 py-4 font-semibold text-white transition hover:bg-green-600"
                     >
                            <FaWhatsapp />
                            Chat on WhatsApp
                     </button>

              </div>
       );
}

export default BookingCard;