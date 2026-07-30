import {
       FaPhoneAlt,
       FaWhatsapp,
       FaMapMarkerAlt,
} from "react-icons/fa";

function NearbyStoreCard() {
       return (
              <div className="rounded-3xl bg-white p-5 shadow-sm transition hover:shadow-lg">

                     <h3 className="text-xl font-semibold">
                            Smart Electronics
                     </h3>

                     <p className="mt-2 text-gray-500">
                            Ganeshguri
                     </p>

                     <p className="mt-2 text-green-600">
                            ⭐ 4.8 • Open Today
                     </p>

                     <div className="mt-5 flex justify-between">

                            <button>
                                   <FaPhoneAlt />
                            </button>

                            <button>
                                   <FaMapMarkerAlt />
                            </button>

                            <button>
                                   <FaWhatsapp className="text-green-500" />
                            </button>

                     </div>

              </div>
       );
}

export default NearbyStoreCard;