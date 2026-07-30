import { motion } from "framer-motion";

function FlowCard({
       title,
       description,
       icon: Icon,
       color,
       bg,
       id,
}) {
       return (
              <motion.div
                     initial={{
                            opacity: 0,
                            y: 50,
                     }}
                     whileInView={{
                            opacity: 1,
                            y: 0,
                     }}
                     transition={{
                            duration: 0.5,
                     }}
                     viewport={{ once: true }}
                     className="
        relative
        rounded-3xl
        border
        border-gray-100
        bg-white
        p-7
        shadow-sm
        transition
        hover:-translate-y-2
        hover:shadow-xl
      "
              >
                     {/* Number Badge */}
                     <div
                            className="
          absolute
          right-5
          top-5
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-sm
          font-semibold
          text-white
        "
                     >
                            {id}
                     </div>

                     {/* Icon */}
                     <div
                            className={`
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          ${bg}
        `}
                     >
                            <Icon className={`text-3xl ${color}`} />
                     </div>

                     {/* Content */}
                     <h3 className="mt-6 text-xl font-semibold">
                            {title}
                     </h3>

                     <p className="mt-3 text-gray-500">
                            {description}
                     </p>
              </motion.div>
       );
}

export default FlowCard;