import { FaWhatsapp, FaMapMarkerAlt, FaUserCog, FaCheckCircle } from "react-icons/fa"

const bookingSteps = [
       {

              id: 1,
              title: "WhatsApp",
              description: "Tell us what you need",
              icon: FaWhatsapp,
              color: "text-green-500",
              bg: "bg-green-100",
       },
       {
              id: 2,
              title: "Share Location",
              description: "Share your exact location",
              icon: FaMapMarkerAlt,
              color: "text-red-500",
              bg: "bg-red-100",
       },
       {
              id: 3,
              title: "Technician Assigned",
              description: "We assign the best technician",
              icon: FaUserCog,
              color: "text-blue-500",
              bg: "bg-blue-100",
       },
       {
              id: 4,
              title: "Problem Solved",
              description: "Pay after the work",
              icon: FaCheckCircle,
              color: "text-green-500",
              bg: "bg-green-100",
       },
]
export default bookingSteps