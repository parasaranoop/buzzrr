import { FaCheckDouble } from "react-icons/fa";

function ChatBubble({ message, sender, time }) {
       const isUser = sender === "user";

       return (
              <div
                     className={`flex w-full ${isUser ? "justify-end" : "justify-start"
                            }`}
              >
                     <div
                            className={`max-w-[76%] rounded-2xl px-3 py-1.5 text-xs shadow-sm sm:text-sm ${isUser
                                   ? "rounded-br-md bg-green-500 text-white"
                                   : "rounded-bl-md bg-gray-100 text-gray-800"
                                   }`}
                     >
                            <p className="leading-4">
                                   {message}
                            </p>

                            {/* TIME + DOUBLE TICK */}
                            {time && (
                                   <div
                                          className={`mt-1 flex items-center justify-end gap-1 text-[8px] ${isUser
                                                 ? "text-white/80"
                                                 : "text-gray-400"
                                                 }`}
                                   >
                                          <span>{time}</span>

                                          {isUser && (
                                                 <FaCheckDouble className="text-[9px] text-blue-400" />
                                          )}
                                   </div>
                            )}
                     </div>
              </div>
       );
}

export default ChatBubble;