import { FaMapMarkerAlt } from "react-icons/fa";

function LocationBubble() {
       return (
              <div className="flex justify-end">
                     <div className="max-w-[230px] overflow-hidden rounded-2xl rounded-tr-sm bg-[#d9fdd3] shadow-sm">

                            {/* Map Preview */}
                            <div className="relative h-32 w-full overflow-hidden bg-gray-200">

                                   {/* Fake map background */}
                                   <div className="absolute inset-0 bg-[#e5e7eb]">

                                          {/* Roads */}
                                          <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 rotate-12 bg-white" />

                                          <div className="absolute left-0 top-1/2 h-7 w-full -translate-y-1/2 -rotate-6 bg-white" />

                                          <div className="absolute left-10 top-0 h-full w-3 rotate-45 bg-gray-300" />

                                          <div className="absolute right-8 top-0 h-full w-4 -rotate-12 bg-gray-300" />

                                          {/* Green areas */}
                                          <div className="absolute left-2 top-3 h-10 w-16 rounded-full bg-green-200" />

                                          <div className="absolute bottom-2 right-3 h-12 w-20 rounded-full bg-green-200" />

                                          {/* Blue water */}
                                          <div className="absolute bottom-0 left-0 h-8 w-full bg-blue-200" />

                                   </div>

                                   {/* Location Pin */}
                                   <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

                                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white shadow-lg">
                                                 <FaMapMarkerAlt className="text-lg" />
                                          </div>

                                          <div className="h-2 w-2 rounded-full bg-red-500" />

                                   </div>

                            </div>

                            {/* Location Information */}
                            <div className="px-3 py-2.5">

                                   <p className="text-sm font-medium text-gray-800">
                                          Current Location
                                   </p>

                                   <p className="mt-0.5 text-xs text-gray-500">
                                          Location shared
                                   </p>

                            </div>

                            {/* Time */}
                            <div className="px-3 pb-2 text-right">
                                   <span className="text-[10px] text-gray-500">
                                          10:42 AM ✓✓
                                   </span>
                            </div>

                     </div>
              </div>
       );
}

export default LocationBubble;