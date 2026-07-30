function ChatBubble({
       message,
       sender = "bot",
}) {
       const isUser = sender === "user";

       return (
              <div
                     className={`flex ${isUser ? "justify-end" : "justify-start"
                            }`}
              >
                     <div
                            className={`
          max-w-[180px]
          rounded-2xl
          px-4
          py-3
          text-sm
          shadow-sm
          ${isUser
                                          ? "bg-green-500 text-white"
                                          : "bg-gray-100 text-gray-700"
                                   }
        `}
                     >
                            {message}
                     </div>
              </div>
       );
}

export default ChatBubble;