import ChatBubble from "./ChatBubble";

function HeroPhone() {
       return (
              <div className="flex justify-center">
                     <div
                            className="
          relative
          h-[560px]
          w-[270px]
          rounded-[38px]
          border-[8px]
          border-black
          bg-white
          px-4
          py-5
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
        "
                     >
                            {/* Speaker */}
                            <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-gray-800" />

                            {/* Header */}
                            <div className="mt-4 mb-6 flex items-center gap-3">
                                   <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                          B
                                   </div>

                                   <div>
                                          <h3 className="text-sm font-semibold text-gray-900">
                                                 Bzzrr
                                          </h3>

                                          <p className="text-xs text-green-500">
                                                 Online
                                          </p>
                                   </div>
                            </div>

                            {/* Chat Area */}
                            <div className="space-y-4">
                                   <ChatBubble
                                          message="Hi! How can we help?"
                                   />

                                   <ChatBubble
                                          message="Need AC Service"
                                          sender="user"
                                   />

                                   <ChatBubble
                                          message="Please share your location"
                                   />

                                   <ChatBubble
                                          message="Technician assigned"
                                   />

                                   <ChatBubble
                                          message="On the way • ETA 15 mins"
                                          sender="user"
                                   />

                                   <ChatBubble
                                          message="Problem Solved! 🎉"
                                   />
                            </div>
                     </div>
              </div>
       );
}

export default HeroPhone;