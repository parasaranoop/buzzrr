
// //2 nd one


// import {

//        FaCheckCircle,
//        FaBullseye,
//        FaEye,
//        FaUsers,
//        FaTools,
//        FaHandshake,
// } from "react-icons/fa";

// const features = [
//        {
//               title: "Verified Professionals",
//               desc: "Every technician is verified to ensure safe, reliable, and high-quality service.",
//        },
//        {
//               title: "Fast Booking",
//               desc: "Book a trusted expert within minutes using our quick and simple process.",
//        },
//        {
//               title: "Affordable Pricing",
//               desc: "Transparent pricing with no hidden charges, so you know exactly what to expect.",
//        },
//        {
//               title: "Trusted Local Stores",
//               desc: "We partner with reliable local businesses to provide genuine products and services.",
//        },
//        {
//               title: "Quick Support",
//               desc: "Our support team is always available to help you before and after your booking.",
//        },
//        {
//               title: "Quality Guaranteed",
//               desc: "We focus on customer satisfaction by delivering dependable and professional services.",
//        },
// ];

// function About() {
//        return (
//               <section className="bg-gray-50">

//                      {/* Hero */}
//                      <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white py-24">
//                             <div className="max-w-7xl mx-auto px-6 text-center">

//                                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
//                                           About Bzzrr
//                                    </h1>

//                                    <p className="mt-6 text-xl leading-8 max-w-3xl mx-auto text-blue-100">
//                                           Making home services simple, fast, and trustworthy.
//                                           Bzzrr connects customers with verified professionals
//                                           and trusted local businesses for a seamless service experience.
//                                    </p>

//                             </div>
//                      </div>

//                      {/* About Section */}
//                      <div className="max-w-7xl mx-auto px-6 py-24">

//                             <div className="grid lg:grid-cols-2 gap-16 items-center">

//                                    <div>

//                                           <h2 className="text-4xl font-bold text-slate-900 mb-6">
//                                                  Who We Are
//                                           </h2>

//                                           <p className="text-lg leading-6 text-gray-600">
//                                                  Bzzrr is a technology-driven platform designed to make booking
//                                                  trusted home services easier than ever. Whether you need an
//                                                  electrician, plumber, AC technician, cleaner, painter, or
//                                                  appliance repair expert, Buzzrr connects you with verified
//                                                  professionals in just a few clicks.
//                                           </p>

//                                           <p className="text-lg leading-6 text-gray-600 mt-2">
//                                                  Our mission is to remove the stress of finding reliable service
//                                                  providers by offering a simple booking experience, transparent
//                                                  pricing, and dedicated customer support.
//                                           </p>

//                                    </div>

//                                    <div>

//                                           {/* <img
//                                                  src="/about.png"
//                                                  alt="Bzzrr"
//                                                  className="rounded-3xl shadow-2xl"
//                                           /> */}

//                                           <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-3xl p-10 text-white shadow-2xl">

//                                                  <h3 className="text-3xl font-bold mb-4">
//                                                         Why Choose Bzzrr?
//                                                  </h3>

//                                                  <p className="text-blue-100 leading-7 mb-8">
//                                                         We connect homeowners with trusted, verified professionals for
//                                                         fast, reliable, and affordable home services.
//                                                  </p>

//                                                  <div className="space-y-5">

//                                                         <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition">
//                                                                <FaCheckCircle className="text-green-300 text-2xl" />
//                                                                <div>
//                                                                       <h4 className="font-semibold text-lg">Verified Professionals</h4>
//                                                                       <p className="text-blue-100 text-sm">
//                                                                              Skilled and background-verified technicians.
//                                                                       </p>
//                                                                </div>
//                                                         </div>

//                                                         <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition">
//                                                                <FaCheckCircle className="text-green-300 text-2xl" />
//                                                                <div>
//                                                                       <h4 className="font-semibold text-lg">Fast Booking</h4>
//                                                                       <p className="text-blue-100 text-sm">
//                                                                              Book trusted services in just a few clicks.
//                                                                       </p>
//                                                                </div>
//                                                         </div>

//                                                         <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition">
//                                                                <FaCheckCircle className="text-green-300 text-2xl" />
//                                                                <div>
//                                                                       <h4 className="font-semibold text-lg">Affordable Pricing</h4>
//                                                                       <p className="text-blue-100 text-sm">
//                                                                              Transparent pricing with no hidden charges.
//                                                                       </p>
//                                                                </div>
//                                                         </div>

//                                                         <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition">
//                                                                <FaCheckCircle className="text-green-300 text-2xl" />
//                                                                <div>
//                                                                       <h4 className="font-semibold text-lg">24×7 Customer Support</h4>
//                                                                       <p className="text-blue-100 text-sm">
//                                                                              We're always here to help whenever you need us.
//                                                                       </p>
//                                                                </div>
//                                                         </div>

//                                                  </div>

//                                           </div>

//                                    </div>

//                             </div>

//                             {/* Mission & Vision */}

//                             <div className="grid md:grid-cols-2 gap-10 mt-12">

//                                    <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition duration-300">

//                                           <FaBullseye className="text-blue-600 text-5xl mb-6" />

//                                           <h3 className="text-3xl font-bold mb-4">
//                                                  Our Mission
//                                           </h3>

//                                           <p className="text-gray-600 leading-8">
//                                                  To simplify home service booking by connecting customers with
//                                                  reliable professionals while maintaining transparency,
//                                                  affordability, and exceptional customer satisfaction.
//                                           </p>

//                                    </div>

//                                    <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition duration-300">

//                                           <FaEye className="text-blue-600 text-5xl mb-6" />

//                                           <h3 className="text-3xl font-bold mb-4">
//                                                  Our Vision
//                                           </h3>

//                                           <p className="text-gray-600 leading-8">
//                                                  To become India's most trusted platform for home services by
//                                                  empowering local businesses and delivering outstanding customer
//                                                  experiences through technology.
//                                           </p>

//                                    </div>

//                             </div>

//                             {/* Why Choose */}

//                             {/* <div className="mt-28">

//                                    <h2 className="text-4xl font-bold text-center text-slate-900">
//                                           Why Choose Bzzrr?
//                                    </h2>

//                                    <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
//                                           We combine technology, trust, and quality service to create the
//                                           best home service experience for every customer.
//                                    </p>

//                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

//                                           {features.map((feature) => (

//                                                  <div
//                                                         key={feature.title}
//                                                         className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
//                                                  >

//                                                         <FaCheckCircle className="text-green-500 text-4xl mb-5" />

//                                                         <h3 className="text-xl font-bold mb-3">
//                                                                {feature.title}
//                                                         </h3>

//                                                         <p className="text-gray-600 leading-7">
//                                                                {feature.desc}
//                                                         </p>

//                                                  </div>

//                                           ))}

//                                    </div>

//                             </div> */}

//                             {/* Values */}

//                             <div className="mt-28">

//                                    <h2 className="text-4xl font-bold text-center">
//                                           Our Core Values
//                                    </h2>

//                                    <div className="grid md:grid-cols-2 gap-10 mt-14">

//                                           <div className="bg-white rounded-3xl p-10 shadow">

//                                                  <FaHandshake className="text-blue-600 text-5xl mb-5" />

//                                                  <h3 className="text-2xl font-bold mb-4">
//                                                         Trust & Transparency
//                                                  </h3>

//                                                  <p className="text-gray-600 leading-8">
//                                                         We believe strong customer relationships are built through
//                                                         honesty, transparent pricing, and dependable service.
//                                                  </p>

//                                           </div>

//                                           <div className="bg-white rounded-3xl p-10 shadow">

//                                                  <FaTools className="text-blue-600 text-5xl mb-5" />

//                                                  <h3 className="text-2xl font-bold mb-4">
//                                                         Quality Service
//                                                  </h3>

//                                                  <p className="text-gray-600 leading-8">
//                                                         Every service provider on Buzzrr is selected with quality,
//                                                         professionalism, and customer satisfaction in mind.
//                                                  </p>

//                                           </div>

//                                    </div>

//                             </div>

//                             {/* Stats */}

//                             <div className="mt-14 bg-blue-600 rounded-3xl text-white p-14">

//                                    <div className="grid md:grid-cols-3 gap-10 text-center">

//                                           <div>

//                                                  <FaUsers className="text-5xl mx-auto mb-5" />

//                                                  <h2 className="text-5xl font-bold">
//                                                         10000+
//                                                  </h2>

//                                                  <p className="mt-2 text-blue-100">
//                                                         Happy Customers
//                                                  </p>

//                                           </div>

//                                           <div>

//                                                  <h2 className="text-5xl font-bold">
//                                                         500+
//                                                  </h2>

//                                                  <p className="mt-2 text-blue-100">
//                                                         Verified Professionals
//                                                  </p>

//                                           </div>

//                                           <div>

//                                                  <h2 className="text-5xl font-bold">
//                                                         24×7
//                                                  </h2>

//                                                  <p className="mt-2 text-blue-100">
//                                                         Customer Support
//                                                  </p>

//                                           </div>

//                                    </div>

//                             </div>

//                             {/* CTA */}



//                      </div>

//               </section>
//        );
// }

// export default About;




import {
       FaCheckCircle,
       FaBullseye,
       FaEye,
       FaUsers,
       FaTools,
       FaHandshake,
} from "react-icons/fa";

function About() {
       return (
              <section className="bg-gray-50">

                     {/* ================= HERO ================= */}
                     <div className="bg-gradient-to-r from-blue-600 to-sky-500 py-16 text-white sm:py-20 lg:py-24">
                            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">

                                   <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                                          About Bzzrr
                                   </h1>

                                   <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-blue-100 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
                                          Making home services simple, fast, and trustworthy.
                                          Bzzrr connects customers with verified professionals
                                          and trusted local businesses for a seamless service
                                          experience.
                                   </p>

                            </div>
                     </div>


                     {/* ================= MAIN CONTENT ================= */}
                     <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">


                            {/* ================= WHO WE ARE ================= */}
                            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">

                                   {/* LEFT */}
                                   <div>

                                          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                                                 Who We Are
                                          </h2>

                                          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                                                 Bzzrr is a technology-driven platform designed
                                                 to make booking trusted home services easier
                                                 than ever. Whether you need an electrician,
                                                 plumber, AC technician, cleaner, painter, or
                                                 appliance repair expert, Bzzrr connects you
                                                 with verified professionals in just a few
                                                 clicks.
                                          </p>

                                          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
                                                 Our mission is to remove the stress of finding
                                                 reliable service providers by offering a
                                                 simple booking experience, transparent pricing,
                                                 and dedicated customer support.
                                          </p>

                                   </div>


                                   {/* RIGHT - WHY BZZRR */}
                                   <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 p-6 text-white shadow-xl sm:p-8 lg:p-10">

                                          <h3 className="text-2xl font-bold sm:text-3xl">
                                                 Why Choose Bzzrr?
                                          </h3>

                                          <p className="mt-3 text-sm leading-6 text-blue-100 sm:mt-4 sm:text-base sm:leading-7">
                                                 We connect homeowners with trusted,
                                                 verified professionals for fast, reliable,
                                                 and affordable home services.
                                          </p>


                                          <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">

                                                 {/* Item 1 */}
                                                 <div className="flex items-start gap-3 rounded-xl bg-white/10 p-3 transition hover:bg-white/20 sm:gap-4 sm:p-4">

                                                        <FaCheckCircle className="mt-1 shrink-0 text-xl text-green-300 sm:text-2xl" />

                                                        <div>
                                                               <h4 className="text-base font-semibold sm:text-lg">
                                                                      Verified Professionals
                                                               </h4>

                                                               <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">
                                                                      Skilled and verified technicians.
                                                               </p>
                                                        </div>

                                                 </div>


                                                 {/* Item 2 */}
                                                 <div className="flex items-start gap-3 rounded-xl bg-white/10 p-3 transition hover:bg-white/20 sm:gap-4 sm:p-4">

                                                        <FaCheckCircle className="mt-1 shrink-0 text-xl text-green-300 sm:text-2xl" />

                                                        <div>
                                                               <h4 className="text-base font-semibold sm:text-lg">
                                                                      Fast Booking
                                                               </h4>

                                                               <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">
                                                                      Book trusted services quickly.
                                                               </p>
                                                        </div>

                                                 </div>


                                                 {/* Item 3 */}
                                                 <div className="flex items-start gap-3 rounded-xl bg-white/10 p-3 transition hover:bg-white/20 sm:gap-4 sm:p-4">

                                                        <FaCheckCircle className="mt-1 shrink-0 text-xl text-green-300 sm:text-2xl" />

                                                        <div>
                                                               <h4 className="text-base font-semibold sm:text-lg">
                                                                      Affordable Pricing
                                                               </h4>

                                                               <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">
                                                                      Transparent pricing with no hidden charges.
                                                               </p>
                                                        </div>

                                                 </div>


                                                 {/* Item 4 */}
                                                 <div className="flex items-start gap-3 rounded-xl bg-white/10 p-3 transition hover:bg-white/20 sm:gap-4 sm:p-4">

                                                        <FaCheckCircle className="mt-1 shrink-0 text-xl text-green-300 sm:text-2xl" />

                                                        <div>
                                                               <h4 className="text-base font-semibold sm:text-lg">
                                                                      24×7 Customer Support
                                                               </h4>

                                                               <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">
                                                                      We're always here to help.
                                                               </p>
                                                        </div>

                                                 </div>

                                          </div>

                                   </div>

                            </div>


                            {/* ================= MISSION & VISION ================= */}
                            <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 sm:gap-8 lg:grid-cols-2 lg:gap-10">


                                   {/* Mission */}
                                   <div className="rounded-3xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 lg:p-10">

                                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 sm:h-16 sm:w-16">

                                                 <FaBullseye className="text-2xl text-blue-600 sm:text-3xl" />

                                          </div>

                                          <h3 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
                                                 Our Mission
                                          </h3>

                                          <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                                                 To simplify home service booking by connecting
                                                 customers with reliable professionals while
                                                 maintaining transparency, affordability, and
                                                 exceptional customer satisfaction.
                                          </p>

                                   </div>


                                   {/* Vision */}
                                   <div className="rounded-3xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 lg:p-10">

                                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 sm:h-16 sm:w-16">

                                                 <FaEye className="text-2xl text-blue-600 sm:text-3xl" />

                                          </div>

                                          <h3 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
                                                 Our Vision
                                          </h3>

                                          <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                                                 To become India's most trusted platform for
                                                 home services by empowering local businesses
                                                 and delivering outstanding customer experiences
                                                 through technology.
                                          </p>

                                   </div>

                            </div>


                            {/* ================= CORE VALUES ================= */}
                            <div className="mt-16 sm:mt-24">

                                   <div className="text-center">

                                          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                                                 Our Core Values
                                          </h2>

                                          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                                                 The principles that guide the way we build
                                                 Bzzrr and serve our customers.
                                          </p>

                                   </div>


                                   <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 sm:gap-8">


                                          {/* Trust */}
                                          <div className="rounded-3xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 lg:p-10">

                                                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">

                                                        <FaHandshake className="text-2xl text-blue-600 sm:text-3xl" />

                                                 </div>

                                                 <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                                                        Trust & Transparency
                                                 </h3>

                                                 <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                                                        We believe strong customer relationships
                                                        are built through honesty, transparent
                                                        pricing, and dependable service.
                                                 </p>

                                          </div>


                                          {/* Quality */}
                                          <div className="rounded-3xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 lg:p-10">

                                                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">

                                                        <FaTools className="text-2xl text-blue-600 sm:text-3xl" />

                                                 </div>

                                                 <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                                                        Quality Service
                                                 </h3>

                                                 <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                                                        Every service provider on Bzzrr is
                                                        selected with quality, professionalism,
                                                        and customer satisfaction in mind.
                                                 </p>

                                          </div>

                                   </div>

                            </div>


                            {/* ================= STATS ================= */}
                            <div className="mt-14 rounded-3xl bg-blue-600 p-7 text-white sm:mt-20 sm:p-10 lg:p-14">

                                   <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-6">


                                          {/* Customers */}
                                          <div>

                                                 <FaUsers className="mx-auto text-4xl sm:text-5xl" />

                                                 <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                                                        10000+
                                                 </h2>

                                                 <p className="mt-1 text-sm text-blue-100 sm:text-base">
                                                        Happy Customers
                                                 </p>

                                          </div>


                                          {/* Professionals */}
                                          <div>

                                                 <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                                                        500+
                                                 </h2>

                                                 <p className="mt-1 text-sm text-blue-100 sm:text-base">
                                                        Verified Professionals
                                                 </p>

                                          </div>


                                          {/* Support */}
                                          <div>

                                                 <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                                                        24×7
                                                 </h2>

                                                 <p className="mt-1 text-sm text-blue-100 sm:text-base">
                                                        Customer Support
                                                 </p>

                                          </div>

                                   </div>

                            </div>

                     </div>

              </section>
       );
}

export default About;