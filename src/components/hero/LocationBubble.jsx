import { FaCheckDouble, FaMapMarkerAlt } from "react-icons/fa";

function LocationBubble({ time }) {
       return (
              <div className="flex w-full justify-end">
                     <div className="w-[78%] overflow-hidden rounded-2xl rounded-br-md bg-green-500 shadow-sm">

                            {/* MAP PREVIEW */}
                            <div className="relative h-22 w-full overflow-hidden bg-gradient-to-br from-green-100 via-blue-100 to-green-200">

                                   {/* Fake roads */}
                                   <div className="absolute left-0 top-10 h-2 w-full rotate-6 bg-white/80" />
                                   <div className="absolute left-12 top-0 h-full w-2 rotate-12 bg-white/80" />
                                   <div className="absolute bottom-2 left-0 h-1.5 w-full -rotate-6 bg-white/70" />

                                   {/* Location Pin */}
                                   <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 shadow-lg">
                                          <FaMapMarkerAlt className="text-lg text-white" />
                                   </div>

                                   {/* Small location dot */}
                                   <div className="absolute right-5 top-4 h-3 w-3 rounded-full bg-blue-500" />
                                   <div className="absolute left-5 bottom-5 h-3 w-3 rounded-full bg-blue-400" />

                            </div>

                            {/* LOCATION INFO */}
                            <div className="px-3 py-2 text-white">
                                   <p className="text-xs font-semibold">
                                          📍 Location
                                   </p>

                                   <p className="mt-0.5 text-[10px] text-green-100">
                                          Shared location
                                   </p>

                                   {/* TIME + DOUBLE TICK */}
                                   <div className="mt-1 flex items-center justify-end gap-1 text-[8px] text-green-100">
                                          <span>{time}</span>
                                          <FaCheckDouble className="text-[9px] text-blue-100" />
                                   </div>
                            </div>

                     </div>
              </div>
       );
}

export default LocationBubble;