import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { openWhatsapp } from "../../hooks/useWhatsapp";

function ServiceCard({ name, price, icon: Icon }) {
       return (
              <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5 }}
                     whileHover={{ y: -8 }}
                     onClick={() => openWhatsapp(name)}
                     className="
        group
        cursor-pointer
        rounded-[28px]
        border
        border-gray-100
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:shadow-2xl
      "
              >
                     {/* Icon */}
                     <div
                            className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-blue-50
          transition
          duration-300
          group-hover:bg-blue-600
        "
                     >
                            <Icon
                                   className="
            text-3xl
            text-blue-600
            transition
            duration-300
            group-hover:text-white
          "
                            />
                     </div>

                     {/* Service Name */}
                     <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                            {name}
                     </h3>

                     {/* Price */}
                     <p className="mt-2 text-gray-500">
                            {price}
                     </p>

                     {/* Book Button */}
                     <button
                            onClick={(e) => {
                                   e.stopPropagation();
                                   openWhatsapp(name);
                            }}
                            className="
          mt-8
          flex
          items-center
          gap-2
          rounded-full
          bg-green-500
          px-6
          py-3
          font-medium
          text-white
          transition
          duration-300
          hover:bg-green-600
        "
                     >
                            Book Now
                            <FaArrowRight className="text-sm" />
                     </button>
              </motion.div>
       );
}

export default ServiceCard;