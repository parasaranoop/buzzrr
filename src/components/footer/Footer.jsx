import {
       FaFacebook,
       FaInstagram,
       FaWhatsapp,
       FaMapMarkerAlt,
       FaPhoneAlt,
       FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll";
//import Home from "../../pages/Home.jsx";

function Footer() {
       return (
              <footer className="bg-slate-900 text-white">
                     <div className="mx-auto max-w-7xl px-6 py-16">

                            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                                   {/* Company */}
                                   <div>
                                          <h2 className="text-3xl font-bold text-blue-400">
                                                 Bzzrr
                                          </h2>

                                          <p className="mt-4 text-gray-400 leading-7">
                                                 Bzzrr connects customers with verified technicians
                                                 and trusted local stores across Guwahati.
                                          </p>

                                          <div className="mt-6 flex gap-4 text-2xl">

                                                 {/* <FaFacebook className="cursor-pointer hover:text-blue-500" /> */}

                                                 <a
                                                        href="https://www.facebook.com/share/1crrmfPX9B/"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <FaFacebook className="text-2xl text-green-600 hover:text-blue-500 cursor-pointer" />

                                                 </a>

                                                 {/* <FaInstagram className="cursor-pointer hover:text-pink-500" /> */}
                                                 <a
                                                        href="https://www.instagram.com/bzzrrindia?igsh=MWZjaTVpYWV0NDNnZg=="
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <FaInstagram className="text-2xl text-green-600 hover:text-pink-700 cursor-pointer" />

                                                 </a>

                                                 {/* <FaWhatsapp className="cursor-pointer hover:text-green-500" /> */}
                                                 <a href="https://wa.me/919108857313?text=Hi,%20I%20want%20to%20book%20a%20service."
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <FaWhatsapp className="text-2xl text-green-600 hover:text-green-700 cursor-pointer" />
                                                 </a>

                                          </div>
                                   </div>

                                   {/* Quick Links */}

                                   <div>

                                          <h3 className="text-xl font-semibold">
                                                 Quick Links
                                          </h3>

                                          <ul className="mt-5 space-y-3 text-gray-400">

                                                 <li>
                                                        <Link
                                                               to="home"
                                                               smooth={true}
                                                               duration={500}
                                                               className="cursor-pointer hover:text-blue-500">
                                                               Home
                                                        </Link>
                                                 </li>
                                                 <li>
                                                        <Link to="services"
                                                               smooth={true}
                                                               duration={500}
                                                               className="cursor-pointer hover:text-blue-500">
                                                               Services
                                                        </Link>
                                                 </li>
                                                 <li>
                                                        <Link to="stores"
                                                               smooth={true}
                                                               duration={500}
                                                               className="cursor-pointer hover:text-blue-500">
                                                               Stores
                                                        </Link>

                                                 </li>
                                                 <li>
                                                        <Link to="whybuzzrr"
                                                               smooth={true}
                                                               duration={500}
                                                               className="cursor-pointer hover:text-blue-500">
                                                               Why Bzzrr
                                                        </Link>
                                                 </li>
                                                 <li>
                                                        <Link to="MapSection"
                                                               smooth={true}
                                                               duration={500}
                                                               className="cursor-pointer hover:text-blue-500">
                                                               MapSection
                                                        </Link>
                                                 </li>


                                          </ul>

                                   </div>

                                   {/* Services */}

                                   <div>

                                          <h3 className="text-xl font-semibold">
                                                 Services
                                          </h3>

                                          <ul className="mt-5 space-y-3 text-gray-400">

                                                 <li>Electrician</li>

                                                 <li>Plumbing</li>

                                                 <li>AC Repair</li>

                                                 <li>Cleaning</li>

                                                 <li>Painting</li>

                                          </ul>

                                   </div>

                                   {/* Contact */}

                                   <div>

                                          <h3 className="text-xl font-semibold">
                                                 Contact
                                          </h3>

                                          <div className="mt-5 space-y-4 text-gray-400">

                                                 <p className="flex gap-3">
                                                        <FaMapMarkerAlt />
                                                        Guwahati, Assam
                                                 </p>

                                                 <p className="flex gap-3">
                                                        <FaPhoneAlt />
                                                        +91 9108857313
                                                 </p>

                                                 <p className="flex gap-3">
                                                        <FaEnvelope />
                                                        support@buzzrr.in
                                                 </p>

                                          </div>

                                   </div>

                            </div>

                            <div className="mt-12 border-t border-slate-700 pt-6 text-center text-gray-500">

                                   © {new Date().getFullYear()} Buzzrr. All rights reserved.

                            </div>

                     </div>
              </footer>
       );
}

export default Footer;