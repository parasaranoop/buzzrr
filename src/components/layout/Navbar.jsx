// import { FaWhatsapp } from "react-icons/fa";
// import { openWhatsapp } from "../../hooks/useWhatsapp";
// function Navbar() {
//        return (
//               <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 backdrop-blur-md">
//                      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
//                             <h1 className="text-3xl font-bold text-blue-600">Buzzrr</h1>
//                             <nav className="hidden items-center gap-10 md:flex">
//                                    <a href="#home" className="font-medium">
//                                           Home
//                                    </a>
//                                    <a href="#services" className="font-medium">
//                                           Services
//                                    </a>
//                                    <a href="stores" className="font-medium hover:text-blue-600">
//                                           Stores
//                                    </a>
//                                    <a href="why-buzzrr" className="font-medium">
//                                           Why Buzzrr
//                                    </a>
//                                    <a href="#" className="font-medium">
//                                           Contact
//                                    </a>
//                             </nav>
//                             <button
//                                    onClick={() => openWhatsapp()}
//                                    className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-medium text-white transition hover:bg-green-600">
//                                    <FaWhatsapp />
//                                    <span>Book on WhatsApp</span>
//                             </button>
//                      </div>
//               </header>
//        )
// }
// export default Navbar;

import { useState } from "react";
import { Link } from "react-scroll";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { openWhatsapp } from "../../hooks/useWhatsapp";
//import logo from "../../assets/BUZZRR.jpeg";

function Navbar() {
       const [menuOpen, setMenuOpen] = useState(false);

       const navItems = [
              { name: "Home", to: "home" },
              { name: "Services", to: "services" },
              { name: "Stores", to: "stores" },
              { name: "Why Bzzrr", to: "why" },
              //{ name: "Partners", to: "Partners" },
              { name: "About", to: "about" },
              { name: "Contact", to: "contact" },

       ];

       return (
              <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl">
                     <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                            {/* Logo */}
                            {/* <img src={logo} alt="Buzzrr Logo" className="h-18 w-auto cursor-pointer" /> */}

                            <h1 className="cursor-pointer text-3xl font-bold text-blue-600">
                                   Bzzrr
                            </h1>

                            {/* Desktop Menu */}
                            <nav className="hidden items-center gap-10 lg:flex">
                                   {navItems.map((item) => (
                                          <Link
                                                 key={item.to}
                                                 to={item.to}
                                                 spy={true}
                                                 smooth={true}
                                                 offset={-80}
                                                 duration={500}
                                                 activeClass="text-blue-600"
                                                 className="cursor-pointer font-medium text-gray-700 transition hover:text-blue-600"
                                          >
                                                 {item.name}
                                          </Link>
                                   ))}
                            </nav>

                            {/* WhatsApp Button */}
                            <button
                                   onClick={() => openWhatsapp()}
                                   className="hidden items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-medium text-white transition hover:bg-green-600 lg:flex"
                            >
                                   <FaWhatsapp />
                                   Book on WhatsApp
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                   onClick={() => setMenuOpen(!menuOpen)}
                                   className="text-2xl lg:hidden"
                            >
                                   {menuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                     </div>

                     {/* Mobile Menu */}
                     {menuOpen && (
                            <div className="border-t bg-white lg:hidden">
                                   {navItems.map((item) => (
                                          <Link
                                                 key={item.to}
                                                 to={item.to}
                                                 smooth={true}
                                                 offset={-80}
                                                 duration={500}
                                                 onClick={() => setMenuOpen(false)}
                                                 className="block cursor-pointer px-6 py-4 hover:bg-gray-50"
                                          >
                                                 {item.name}
                                          </Link>
                                   ))}

                                   <div className="p-6">
                                          <button
                                                 onClick={() => openWhatsapp()}
                                                 className="w-full rounded-full bg-green-500 py-3 text-white"
                                          >
                                                 Book on WhatsApp
                                          </button>
                                   </div>
                            </div>
                     )}
              </header>
       );
}

export default Navbar;