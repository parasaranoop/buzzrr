// //import Navbar from "../components/layout/Navbar";
// //import Footer from "../components/footer/Footer";
// import { FaCheckCircle, FaBullseye, FaEye, FaUsers } from "react-icons/fa";

// function About() {
//        return (
//               <>


//                      <section className="bg-gray-50 py-20">
//                             <div className="max-w-7xl mx-auto px-6">

//                                    {/* Heading */}
//                                    <div className="text-center mb-16">
//                                           <h1 className="text-5xl font-bold text-slate-900">
//                                                  About Bzzrr
//                                           </h1>

//                                           <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
//                                                  Bzzrr connects customers with trusted home service professionals
//                                                  and verified local stores, making booking simple, fast, and
//                                                  reliable.
//                                           </p>
//                                    </div>

//                                    {/* About */}
//                                    <div className="grid lg:grid-cols-2 gap-12 items-center">

//                                           <div>
//                                                  <h2 className="text-3xl font-bold mb-5">
//                                                         Who We Are
//                                                  </h2>

//                                                  <p className="text-gray-600 leading-8">
//                                                         Buzzrr is a technology platform designed to make finding
//                                                         electricians, plumbers, AC technicians, cleaners, painters, and
//                                                         appliance repair professionals easier than ever.
//                                                  </p>

//                                                  <p className="text-gray-600 leading-8 mt-5">
//                                                         Our mission is to connect customers with verified service
//                                                         providers through a simple and trusted booking experience.
//                                                  </p>
//                                           </div>

//                                           <div>
//                                                  <img
//                                                         src="/about.png"
//                                                         alt="About Buzzrr"
//                                                         className="rounded-3xl shadow-xl"
//                                                  />
//                                           </div>

//                                    </div>

//                                    {/* Mission & Vision */}
//                                    <div className="grid md:grid-cols-2 gap-8 mt-20">

//                                           <div className="bg-white p-8 rounded-2xl shadow">
//                                                  <FaBullseye className="text-4xl text-blue-600 mb-4" />

//                                                  <h3 className="text-2xl font-bold mb-3">
//                                                         Our Mission
//                                                  </h3>

//                                                  <p className="text-gray-600">
//                                                         To simplify home service booking with trusted professionals,
//                                                         transparent pricing, and fast support.
//                                                  </p>
//                                           </div>

//                                           <div className="bg-white p-8 rounded-2xl shadow">
//                                                  <FaEye className="text-4xl text-blue-600 mb-4" />

//                                                  <h3 className="text-2xl font-bold mb-3">
//                                                         Our Vision
//                                                  </h3>

//                                                  <p className="text-gray-600">
//                                                         To become India's most trusted platform for home services and
//                                                         local businesses.
//                                                  </p>
//                                           </div>

//                                    </div>

//                                    {/* Why Buzzrr */}
//                                    <div className="mt-20">

//                                           <h2 className="text-4xl font-bold text-center mb-12">
//                                                  Why Choose Bzzrr?
//                                           </h2>

//                                           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//                                                  {[
//                                                         "Verified Professionals",
//                                                         "Fast Booking",
//                                                         "Affordable Pricing",
//                                                         "Quick Support",
//                                                         "Trusted Local Stores",
//                                                         "Secure Service"
//                                                  ].map((item) => (
//                                                         <div
//                                                                key={item}
//                                                                className="bg-white rounded-xl p-6 shadow"
//                                                         >
//                                                                <FaCheckCircle className="text-green-500 text-3xl mb-4" />

//                                                                <h3 className="font-semibold text-lg">
//                                                                       {item}
//                                                                </h3>
//                                                         </div>
//                                                  ))}

//                                           </div>

//                                    </div>

//                                    {/* Stats */}
//                                    <div className="mt-24 bg-blue-600 rounded-3xl p-10 text-white">

//                                           <div className="grid md:grid-cols-3 text-center gap-10">

//                                                  <div>
//                                                         <FaUsers className="text-5xl mx-auto mb-4" />
//                                                         <h2 className="text-4xl font-bold">1000+</h2>
//                                                         <p>Happy Customers</p>
//                                                  </div>

//                                                  <div>
//                                                         <h2 className="text-4xl font-bold">500+</h2>
//                                                         <p>Verified Technicians</p>
//                                                  </div>

//                                                  <div>
//                                                         <h2 className="text-4xl font-bold">24×7</h2>
//                                                         <p>Customer Support</p>
//                                                  </div>

//                                           </div>

//                                    </div>

//                             </div>
//                      </section>


//               </>
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

const features = [
       {
              title: "Verified Professionals",
              desc: "Every technician is verified to ensure safe, reliable, and high-quality service.",
       },
       {
              title: "Fast Booking",
              desc: "Book a trusted expert within minutes using our quick and simple process.",
       },
       {
              title: "Affordable Pricing",
              desc: "Transparent pricing with no hidden charges, so you know exactly what to expect.",
       },
       {
              title: "Trusted Local Stores",
              desc: "We partner with reliable local businesses to provide genuine products and services.",
       },
       {
              title: "Quick Support",
              desc: "Our support team is always available to help you before and after your booking.",
       },
       {
              title: "Quality Guaranteed",
              desc: "We focus on customer satisfaction by delivering dependable and professional services.",
       },
];

function About() {
       return (
              <section className="bg-gray-50">

                     {/* Hero */}
                     <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white py-24">
                            <div className="max-w-7xl mx-auto px-6 text-center">

                                   <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                                          About Bzzrr
                                   </h1>

                                   <p className="mt-6 text-xl leading-8 max-w-3xl mx-auto text-blue-100">
                                          Making home services simple, fast, and trustworthy.
                                          Bzzrr connects customers with verified professionals
                                          and trusted local businesses for a seamless service experience.
                                   </p>

                            </div>
                     </div>

                     {/* About Section */}
                     <div className="max-w-7xl mx-auto px-6 py-24">

                            <div className="grid lg:grid-cols-2 gap-16 items-center">

                                   <div>

                                          <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                                 Who We Are
                                          </h2>

                                          <p className="text-lg leading-8 text-gray-600">
                                                 Bzzrr is a technology-driven platform designed to make booking
                                                 trusted home services easier than ever. Whether you need an
                                                 electrician, plumber, AC technician, cleaner, painter, or
                                                 appliance repair expert, Buzzrr connects you with verified
                                                 professionals in just a few clicks.
                                          </p>

                                          <p className="text-lg leading-8 text-gray-600 mt-6">
                                                 Our mission is to remove the stress of finding reliable service
                                                 providers by offering a simple booking experience, transparent
                                                 pricing, and dedicated customer support.
                                          </p>

                                   </div>

                                   <div>

                                          {/* <img
                                                 src="/about.png"
                                                 alt="Bzzrr"
                                                 className="rounded-3xl shadow-2xl"
                                          /> */}

                                          <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-3xl p-10 text-white shadow-2xl">

                                                 <h3 className="text-3xl font-bold mb-4">
                                                        Why Choose Bzzrr?
                                                 </h3>

                                                 <p className="text-blue-100 leading-7 mb-8">
                                                        We connect homeowners with trusted, verified professionals for
                                                        fast, reliable, and affordable home services.
                                                 </p>

                                                 <div className="space-y-5">

                                                        <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition">
                                                               <FaCheckCircle className="text-green-300 text-2xl" />
                                                               <div>
                                                                      <h4 className="font-semibold text-lg">Verified Professionals</h4>
                                                                      <p className="text-blue-100 text-sm">
                                                                             Skilled and background-verified technicians.
                                                                      </p>
                                                               </div>
                                                        </div>

                                                        <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition">
                                                               <FaCheckCircle className="text-green-300 text-2xl" />
                                                               <div>
                                                                      <h4 className="font-semibold text-lg">Fast Booking</h4>
                                                                      <p className="text-blue-100 text-sm">
                                                                             Book trusted services in just a few clicks.
                                                                      </p>
                                                               </div>
                                                        </div>

                                                        <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition">
                                                               <FaCheckCircle className="text-green-300 text-2xl" />
                                                               <div>
                                                                      <h4 className="font-semibold text-lg">Affordable Pricing</h4>
                                                                      <p className="text-blue-100 text-sm">
                                                                             Transparent pricing with no hidden charges.
                                                                      </p>
                                                               </div>
                                                        </div>

                                                        <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition">
                                                               <FaCheckCircle className="text-green-300 text-2xl" />
                                                               <div>
                                                                      <h4 className="font-semibold text-lg">24×7 Customer Support</h4>
                                                                      <p className="text-blue-100 text-sm">
                                                                             We're always here to help whenever you need us.
                                                                      </p>
                                                               </div>
                                                        </div>

                                                 </div>

                                          </div>

                                   </div>

                            </div>

                            {/* Mission & Vision */}

                            <div className="grid md:grid-cols-2 gap-10 mt-24">

                                   <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition duration-300">

                                          <FaBullseye className="text-blue-600 text-5xl mb-6" />

                                          <h3 className="text-3xl font-bold mb-4">
                                                 Our Mission
                                          </h3>

                                          <p className="text-gray-600 leading-8">
                                                 To simplify home service booking by connecting customers with
                                                 reliable professionals while maintaining transparency,
                                                 affordability, and exceptional customer satisfaction.
                                          </p>

                                   </div>

                                   <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition duration-300">

                                          <FaEye className="text-blue-600 text-5xl mb-6" />

                                          <h3 className="text-3xl font-bold mb-4">
                                                 Our Vision
                                          </h3>

                                          <p className="text-gray-600 leading-8">
                                                 To become India's most trusted platform for home services by
                                                 empowering local businesses and delivering outstanding customer
                                                 experiences through technology.
                                          </p>

                                   </div>

                            </div>

                            {/* Why Choose */}

                            <div className="mt-28">

                                   <h2 className="text-4xl font-bold text-center text-slate-900">
                                          Why Choose Bzzrr?
                                   </h2>

                                   <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                                          We combine technology, trust, and quality service to create the
                                          best home service experience for every customer.
                                   </p>

                                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                                          {features.map((feature) => (

                                                 <div
                                                        key={feature.title}
                                                        className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
                                                 >

                                                        <FaCheckCircle className="text-green-500 text-4xl mb-5" />

                                                        <h3 className="text-xl font-bold mb-3">
                                                               {feature.title}
                                                        </h3>

                                                        <p className="text-gray-600 leading-7">
                                                               {feature.desc}
                                                        </p>

                                                 </div>

                                          ))}

                                   </div>

                            </div>

                            {/* Values */}

                            <div className="mt-28">

                                   <h2 className="text-4xl font-bold text-center">
                                          Our Core Values
                                   </h2>

                                   <div className="grid md:grid-cols-2 gap-10 mt-14">

                                          <div className="bg-white rounded-3xl p-10 shadow">

                                                 <FaHandshake className="text-blue-600 text-5xl mb-5" />

                                                 <h3 className="text-2xl font-bold mb-4">
                                                        Trust & Transparency
                                                 </h3>

                                                 <p className="text-gray-600 leading-8">
                                                        We believe strong customer relationships are built through
                                                        honesty, transparent pricing, and dependable service.
                                                 </p>

                                          </div>

                                          <div className="bg-white rounded-3xl p-10 shadow">

                                                 <FaTools className="text-blue-600 text-5xl mb-5" />

                                                 <h3 className="text-2xl font-bold mb-4">
                                                        Quality Service
                                                 </h3>

                                                 <p className="text-gray-600 leading-8">
                                                        Every service provider on Buzzrr is selected with quality,
                                                        professionalism, and customer satisfaction in mind.
                                                 </p>

                                          </div>

                                   </div>

                            </div>

                            {/* Stats */}

                            <div className="mt-28 bg-blue-600 rounded-3xl text-white p-14">

                                   <div className="grid md:grid-cols-3 gap-10 text-center">

                                          <div>

                                                 <FaUsers className="text-5xl mx-auto mb-5" />

                                                 <h2 className="text-5xl font-bold">
                                                        1000+
                                                 </h2>

                                                 <p className="mt-2 text-blue-100">
                                                        Happy Customers
                                                 </p>

                                          </div>

                                          <div>

                                                 <h2 className="text-5xl font-bold">
                                                        500+
                                                 </h2>

                                                 <p className="mt-2 text-blue-100">
                                                        Verified Professionals
                                                 </p>

                                          </div>

                                          <div>

                                                 <h2 className="text-5xl font-bold">
                                                        24×7
                                                 </h2>

                                                 <p className="mt-2 text-blue-100">
                                                        Customer Support
                                                 </p>

                                          </div>

                                   </div>

                            </div>

                            {/* CTA */}



                     </div>

              </section>
       );
}

export default About;