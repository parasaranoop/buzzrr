import ChatBubble from "./ChatBubble";
//import logo from "../../assets/logo.png";
import logo from "../../../public/bzzrr-favicon.png"
import LocationBubble from "./LocationBubble";
import { FaCheck } from "react-icons/fa";

function HeroPhone() {
       return (
              <div className="flex justify-center">
                     <div className="relative h-[560px] w-[270px] overflow-hidden rounded-[38px] border-[8px] border-black bg-white px-3 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">

                            {/* SPEAKER */}
                            <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-gray-800" />

                            {/* HEADER */}
                            <div className="mt-5 mb-3 flex items-center gap-3 px-1">
                                   <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-100">
                                          <img
                                                 src={logo}
                                                 alt="Bzzrr Logo"
                                                 className="h-full w-full object-contain p-1"
                                          />
                                   </div>

                                   <div>
                                          {/* <h3 className="text-sm font-semibold text-gray-900">
                                                 Bzzrr
                                          </h3> */}

                                          <div className="flex items-center gap-1">
                                                 <span className="font-semibold">Bzzrr</span>
                                                 <span
                                                        className="
              flex
              h-[17px]
              w-[17px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#1684FF]
       "
                                                 >
                                                        <svg
                                                               viewBox="0 0 16 16"
                                                               className="h-[11px] w-[11px]"
                                                               fill="none"
                                                        >
                                                               <path
                                                                      d="M3.5 8.2L6.5 11L12.5 4.8"
                                                                      stroke="white"
                                                                      strokeWidth="2.2"
                                                                      strokeLinecap="round"
                                                                      strokeLinejoin="round"
                                                               />
                                                        </svg>
                                                 </span>

                                          </div>


                                          <p className="text-xs text-green-500">
                                                 Online
                                          </p>
                                   </div>
                            </div>

                            {/* CHAT */}
                            <div className="space-y-2.5 px-1">

                                   <ChatBubble
                                          message="Hi! How can we help?"
                                          sender="bot"
                                          time="10:30 AM"
                                   />

                                   <ChatBubble
                                          message="Need AC Service"
                                          sender="user"
                                          time="10:30 AM"
                                   />

                                   <ChatBubble
                                          message="Please share your location"
                                          sender="bot"
                                          time="10:30 AM"
                                   />

                                   {/* REALISTIC LOCATION */}
                                   <LocationBubble time="10:30 AM" />

                                   <ChatBubble
                                          message="Technician assigned. On the way. ETA 15 mins"
                                          sender="bot"
                                          time="10:30 AM"
                                   />

                                   <ChatBubble
                                          message="Problem Solved! 🎉"
                                          sender="user"
                                          time="11:20 AM"
                                   />

                            </div>
                     </div>
              </div>
       );
}

export default HeroPhone;