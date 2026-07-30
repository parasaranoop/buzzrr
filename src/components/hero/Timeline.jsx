import {
       FaWhatsapp,
       FaMapMarkerAlt,
       FaUserCog,
       FaCheckCircle,
} from "react-icons/fa";

function Timeline() {
       const steps = [
              {
                     title: "whatsapp",
                     desc: "Chat instantly on WhatsApp",
                     icon: FaWhatsapp,
                     bg: "bg-green-500",
              },
              {
                     title: "Share Location",
                     desc: "Share your exact location",
                     icon: FaMapMarkerAlt,
                     bg: "bg-blue-500",
              },
              {
                     title: "Technician Assigned",
                     desc: "We assign the best technician",
                     icon: FaUserCog,
                     bg: "bg-blue-600",
              },
              {
                     title: "Problem Solved",
                     desc: "Pay after service with warranty",
                     icon: FaCheckCircle,
                     bg: "bg-green-500",
              },
       ];

       return (
              <div className="relative flex flex-col gap-10">
                     {/* Vertical Line */}
                     <div className="absolute left-6 top-6 h-[300px] w-[2px] bg-gray-200" />

                     {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                   <div
                                          key={step.title}
                                          className="relative flex items-start gap-5"
                                   >
                                          {/* Icon */}
                                          <div
                                                 className={`
                relative z-10
                flex h-12 w-12 items-center justify-center
                rounded-full text-white shadow-lg
                ${step.bg}
              `}
                                          >
                                                 <Icon className="text-xl" />
                                          </div>

                                          {/* Content */}
                                          <div>
                                                 <h4 className="font-semibold text-gray-900">
                                                        {step.title}
                                                 </h4>

                                                 <p className="mt-1 text-sm leading-6 text-gray-500">
                                                        {step.desc}
                                                 </p>
                                          </div>
                                   </div>
                            );
                     })}
              </div>
       );
}

export default Timeline;