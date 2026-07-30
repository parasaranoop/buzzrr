
import {
       FaMapMarkerAlt,
       FaPhoneAlt,
       FaEnvelope,
       FaWhatsapp,
       FaFacebook,
       FaInstagram,
} from "react-icons/fa";

function ContactInfo() {
       return (
              <div className="bg-blue-600 text-white rounded-2xl p-8">

                     <h2 className="text-3xl font-bold mb-8">
                            Contact Information
                     </h2>

                     <div className="space-y-6">

                            <div className="flex items-start gap-4">
                                   <FaMapMarkerAlt className="text-blue-400 text-xl mt-1" />
                                   <div>
                                          <h3 className="font-semibold">Address</h3>
                                          <p>Guwahati, Assam, India</p>
                                   </div>
                            </div>

                            <div className="flex items-start gap-4">
                                   <FaPhoneAlt className="text-blue-400 text-xl mt-1" />
                                   <div>
                                          <h3 className="font-semibold">Phone</h3>
                                          <p>+91 9108857313</p>
                                   </div>
                            </div>

                            <div className="flex items-start gap-4">
                                   <FaEnvelope className="text-blue-400 text-xl mt-1" />
                                   <div>
                                          <h3 className="font-semibold">Email</h3>
                                          <p>support@buzzrr.in</p>
                                   </div>
                            </div>

                     </div>

                     <a
                            href="https://wa.me/919108857313?text=Hi,%20I%20need%20help."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-3 bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition"
                     >
                            <FaWhatsapp />
                            Chat on WhatsApp
                     </a>

                     <div className="mt-10">
                            <h3 className="font-semibold mb-4">
                                   Follow Us
                            </h3>

                            <div className="flex gap-5 text-2xl">
                                   <a
                                          href="https://www.facebook.com/share/1crrmfPX9B/"
                                          target="_blank"
                                          rel="noopener noreferrer">
                                          <FaFacebook className="text-2xl text-green-600 hover:text-blue-500 cursor-pointer" />

                                   </a>
                                   <a
                                          href="https://www.instagram.com/bzzrrindia?igsh=MWZjaTVpYWV0NDNnZg=="
                                          target="_blank"
                                          rel="noopener noreferrer">
                                          <FaInstagram className="text-2xl text-green-600 hover:text-pink-700 cursor-pointer" />

                                   </a>
                                   <a href="https://wa.me/919108857313?text=Hi,%20I%20want%20to%20book%20a%20service."
                                          target="_blank"
                                          rel="noopener noreferrer">
                                          <FaWhatsapp className="text-2xl text-green-600 hover:text-green-700 cursor-pointer" />
                                   </a>


                            </div>
                     </div>

              </div>
       );
}

export default ContactInfo;