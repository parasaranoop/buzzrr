// import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
// import services from "../../data/services.js";
// import { openWhatsapp } from "../../hooks/useWhatsapp";
// import { openCall } from "../../hooks/useCall"
// import HeroPhone from "./HeroPhone";
// import Timeline from "./Timeline";

// //1 St time
// function Hero() {
//        return (
//               <section id="home" className="bg-gradient-to-b from-blue-50 to-white pt-32 pb-10">
//                      <div className="mx-auto max-w-7xl px-6">
//                             <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr_0.65fr]">

//                                    {/* LEFT SIDE */}
//                                    <div className="max-w-2xl">
//                                           {/* Badge */}
//                                           <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
//                                                  VERIFIED SERVICES & TRUSTED STORES
//                                           </div>

//                                           {/* Heading */}
//                                           <h1 className="mt-6 text-5xl font-bold leading-[1.08] lg:text-[64px]">
//                                                  Help in
//                                                  <span className="text-blue-600"> 1 Hour.</span>
//                                                  <br />
//                                                  Book on
//                                                  <span className="text-green-500"> WhatsApp.</span>
//                                           </h1>

//                                           {/* Subtitle */}
//                                           <p className="mt-5 text-lg leading-8 text-gray-600">
//                                                  Trusted technicians for all your home needs.
//                                                  <br />
//                                                  <span className="font-medium text-blue-600">
//                                                         No app.
//                                                  </span>{" "}
//                                                  <span className="font-medium text-blue-600">
//                                                         No calls.
//                                                  </span>{" "}
//                                                  Just WhatsApp.
//                                           </p>

//                                           Services
//                                           <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-4">
//                                                  {services.map((service) => (
//                                                         <div
//                                                                key={service.name}
//                                                                className="flex items-center gap-3"
//                                                         >
//                                                                <FaCheckCircle className="text-blue-600" />
//                                                                <span className="font-medium text-gray-700">
//                                                                       {service.name}
//                                                                </span>
//                                                         </div>
//                                                  ))}
//                                           </div>

//                                           {/* <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-4">
//                                                  {services.map((service) => (
//                                                         <div
//                                                                key={service.name}
//                                                                className="flex items-center gap-3">
//                                                                <FaCheckCircle className="text-blue-600" />
//                                                                <span className="font-medium text-gray-700">
//                                                                       {service.name}
//                                                                </span>
//                                                         </div>

//                                                  ))}
//                                           </div> */}

//                                           {/* Buttons */}
//                                           <div className="mt-8 flex flex-wrap gap-4">
//                                                  <button
//                                                         onClick={() => openWhatsapp()}
//                                                         className="flex items-center gap-3 rounded-full bg-green-500 px-7 py-4 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-600"
//                                                  >
//                                                         <FaWhatsapp />
//                                                         Book on WhatsApp
//                                                  </button>

//                                                  <button
//                                                         onClick={openCall}
//                                                         className="flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700">
//                                                         <FaPhoneAlt />
//                                                         Call Us
//                                                  </button>


//                                                  {/* <button className="rounded-full border border-gray-300 bg-white px-7 py-4 font-medium transition hover:bg-gray-50">

//                                                         <p className="flex gap-3">
//                                                                <FaPhoneAlt />
//                                                                +91 9108857313
//                                                         </p>

//                                                  </button> */}

//                                           </div>

//                                           {/* Customers */}
//                                           <div className="mt-8 flex items-center gap-4">
//                                                  <div className="flex -space-x-3">
//                                                         <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-300" />
//                                                         <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-400" />
//                                                         <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-500" />
//                                                  </div>

//                                                  <p className="text-gray-600">
//                                                         <span className="font-semibold text-gray-900">
//                                                                10,000+
//                                                         </span>{" "}
//                                                         happy customers in Guwahati
//                                                  </p>
//                                           </div>
//                                    </div>

//                                    {/* PHONE */}
//                                    <div className="flex justify-center">
//                                           <HeroPhone />
//                                    </div>

//                                    {/* TIMELINE */}
//                                    <div className="hidden lg:block">
//                                           <Timeline />
//                                    </div>
//                             </div>
//                      </div>
//               </section>
//        );
// }



// export default Hero;




//2nd one 

import { FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import services from "../../data/services.js";
import { openWhatsapp } from "../../hooks/useWhatsapp";
import { openCall } from "../../hooks/useCall";
import HeroPhone from "./HeroPhone";
import Timeline from "./Timeline";
import { useEffect, useState } from "react";

function Hero() {
       //logic for customer 1 to 30k
       const [customerCount, setCustomerCount] = useState(1)
       useEffect(() => {
              const target = 30000;
              const duration = 2000;
              const incrementTime = 2;
              const totalSteps = duration / incrementTime;
              const increment = target / totalSteps;

              const timer = setInterval(() => {
                     setCustomerCount((previousCount) => {
                            const nextCount = Math.ceil(previousCount + increment);

                            if (nextCount >= target) {
                                   clearInterval(timer)
                                   return target;
                            }
                            return nextCount;
                     }, incrementTime);
                     return () => clearInterval(timer);
              })
       }, []);
       return (
              <section
                     id="home"
                     className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-12 sm:pt-28 lg:pt-32 lg:pb-10"
              >
                     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                            <div
                                   className="
                                          grid
                                          items-center
                                          gap-10
                                          sm:gap-12
                                          lg:grid-cols-[1.15fr_0.85fr_0.65fr]
                                          lg:gap-10
                                   "
                            >

                                   {/* ================= LEFT SIDE ================= */}
                                   <div
                                          className="
                                                 w-full
                                                 max-w-2xl
                                                 mx-auto
                                                 text-center
                                                 lg:mx-0
                                                 lg:text-left
                                          "
                                   >

                                          {/* Badge */}
                                          {/* <div
                                                 className="
                                                        inline-flex
                                                        rounded-full
                                                        bg-blue-100
                                                        px-4
                                                        py-2
                                                        text-xs
                                                        font-medium
                                                        text-blue-600
                                                        sm:text-sm
                                                 "
                                          >
                                                 VERIFIED SERVICES & TRUSTED STORES
                                          </div>*/}
                                          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-left text-xs font-medium text-blue-600 sm:text-sm">
                                                 VERIFIED SERVICES & TRUSTED STORES
                                          </div>



                                          {/* Heading */}
                                          {/* <h1
                                                 className="
                                                        mt-6
                                                        text-4xl
                                                        font-bold
                                                        leading-[1.08]
                                                        tracking-tight
                                                        text-gray-900
                                                        sm:text-5xl
                                                        lg:text-[64px]
                                                 "
                                          >
                                                 Help in
                                                 <span className="text-blue-600 ">
                                                        {" "}1 Hour.
                                                 </span>

                                                 <br />

                                                 Book on
                                                 <span className="text-green-500">
                                                        {" "}WhatsApp.
                                                 </span>
                                          </h1> */}
                                          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-[64px]" >
                                                 <span className="block">
                                                        Help in{""}
                                                        <span className="text-blue-600">{" "}1 Hour.</span>
                                                 </span>
                                                 <span className="mt-2 block">
                                                        Book on{" "}
                                                        <span className="text-green-600">WhatsApp.</span>
                                                 </span>
                                          </h1>



                                          {/* Subtitle */}
                                          {/* <p
                                                 className="
                                                        mx-auto
                                                        mt-3
                                                        max-w-xl
                                                        text-base
                                                        leading-5
                                                        text-gray-600
                                                        sm:text-lg
                                                        sm:leading-4
                                                        lg:mx-0
                                                 "
                                          >
                                                 Trusted technicians for all your home needs.

                                                  <br className="hidden sm:block" /> 

                                                 <span className="font-medium text-blue-600">
                                                        No app.
                                                 </span>{" "}

                                                 <span className="font-medium text-blue-600">
                                                        No calls.
                                                 </span>{" "}

                                                 Just WhatsApp.
                                          </p> */}

                                          <p
                                                 className="
    mx-auto
    mt-4
    max-w-xl
    text-base
    leading-6
    text-gray-600
    sm:text-lg
    lg:mx-0
  "
                                          >
                                                 Trusted technicians for all your home needs.

                                                 <br />

                                                 <span className="whitespace-nowrap">
                                                        <span className="font-medium text-blue-600">
                                                               No app,
                                                        </span>{" "}

                                                        <span className="font-medium text-blue-600">
                                                               No calls
                                                        </span>{" "}

                                                        Just WhatsApp.
                                                 </span>
                                          </p>

                                          {/* <p className="mt-5 text-lg leading-7 text-gray-600">
                                                 Trusted technicians for all your home needs.
                                                 <br />
                                                 <span className="font-medium text-blue-600 ">No app.</span>{" "}
                                                 <span className="font-medium text-blue-600">No calls.</span>{" "}
                                                 Just WhatsApp.
                                          </p> */}


                                          {/* ================= SERVICES ================= */}
                                          {/* <div
                                                 className="
                                                        mt-8
                                                        grid
                                                        grid-cols-2
                                                        gap-y-3
                                                        text-left
                                                        sm:grid-cols-2
                                                        sm:gap-x-8
                                                        sm:gap-y-4
                                                 "
                                          >
                                                 {/* {services.map((service) => (
                                                        <div
                                                               key={service.name}
                                                               className="
                                                                      flex
                                                                      items-center
                                                                      gap-3
                                                                      text-sm
                                                                      sm:text-base
                                                               "
                                                        >
                                                               <FaCheckCircle
                                                                      className="shrink-0 text-blue-600"
                                                               />

                                                               <span className="font-medium text-gray-700">
                                                                      {service.name}
                                                               </span>
                                                        </div>
                                                 ))} */}


                                          {/*Services*/}

                                          {/* Services */}
                                          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                                                 {services.map((service) => (
                                                        <div
                                                               key={service.name}
                                                               className="flex items-center gap-2"
                                                        >
                                                               <FaCheckCircle className="shrink-0 text-blue-600" />

                                                               <span className="font-medium text-gray-700">
                                                                      {service.name}
                                                               </span>
                                                        </div>
                                                 ))}
                                          </div>




                                          {/* ================= BUTTONS ================= */}
                                          <div className="mt-8 flex flex-row gap-3 sm:justify-center lg:jsutify-start">
                                                 {/*Whatsapp button */}
                                                 <button onClick={openWhatsapp}
                                                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-500 px-3 py-3 text-sm font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-600 sm:flex-none sm:px-7 sm:py-4 sm:text-base">
                                                        <FaWhatsapp className="text-lg sm:text-xl" />
                                                        Book on WhatsApp
                                                 </button>
                                                 {/*Call button */}
                                                 <button
                                                        onClick={openCall}
                                                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-3 py-3 text-sm font-medium text-white shadow-lg transition duration-300 hover:translate-y-1 hover:bg-blue-700 sm:flex-none sm:px-7 sm:py-4 sm:text-base">
                                                        <FaPhoneAlt className="text-lg sm:text-xl" />
                                                        Call Us
                                                 </button>
                                          </div>



                                          {/* ================= CUSTOMERS ================= */}
                                          <div
                                                 className="
                                                        mt-8
                                                        flex
                                                        flex-col
                                                        items-center
                                                        gap-3
                                                        sm:flex-row
                                                        sm:justify-center
                                                        lg:justify-start
                                                 "
                                          >

                                                 {/* Customer avatars */}
                                                 {/* <div className="flex -space-x-3">

                                                        <div
                                                               className="
                                                                      h-9
                                                                      w-9
                                                                      rounded-full
                                                                      border-2
                                                                      border-white
                                                                      bg-gray-300
                                                                      sm:h-10
                                                                      sm:w-10
                                                               "
                                                        />

                                                        <div
                                                               className="
                                                                      h-9
                                                                      w-9
                                                                      rounded-full
                                                                      border-2
                                                                      border-white
                                                                      bg-gray-400
                                                                      sm:h-10
                                                                      sm:w-10
                                                               "
                                                        />

                                                        <div
                                                               className="
                                                                      h-9
                                                                      w-9
                                                                      rounded-full
                                                                      border-2
                                                                      border-white
                                                                      bg-gray-500
                                                                      sm:h-10
                                                                      sm:w-10
                                                               "
                                                        />

                                                 </div> */}

                                                 {/*Replace empty div with image tag */}
                                                 <div className="flex flex-row items-center -space-x-0.5">
                                                        <img
                                                               src="https://randomuser.me/api/portraits/men/32.jpg"
                                                               alt="Customer avatar"
                                                               // className="h-9 w-9 rounded-full border-2 border-white bg-gray-300 sm:h-10 sm:w-10
                                                               className="relative z-30 h-9 w-9 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"


                                                        />
                                                        <img
                                                               src="https://randomuser.me/api/portraits/women/44.jpg"
                                                               alt="Customer avatar"
                                                               //className="h-9 w-9 rounded-full border-2 border-white bg-gray-400 sm:h-10 sm:w-10
                                                               className="-ml-3 relative z-20 h-9 w-9 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"

                                                        />
                                                        <img
                                                               src="https://randomuser.me/api/portraits/men/75.jpg"
                                                               alt="Customer avatar"
                                                               className="-ml-3 relative z-10 h-9 w-9 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"
                                                        //className="h-9 w-9 rounded-full border-2 border-white bg-gray-400 sm:h-10 sm:w-10

                                                        />
                                                 </div>


                                                 {/* <p
                                                        className="
                                                               text-center
                                                               text-sm
                                                               text-gray-600
                                                               sm:text-left
                                                        "
                                                 >
                                                        <span className="font-semibold text-gray-900">
                                                               30,000+
                                                        </span>{" "}
                                                        happy customers in Guwahati
                                                 </p> */}
                                                 <p className="text-center text-sm text-gray-600 sm:text-left">
                                                        <span className="font-semibold text-gary-900">
                                                               {customerCount.toLocaleString()}+
                                                        </span>{""}
                                                        happy customers in Guwahati
                                                 </p>

                                          </div>

                                   </div>


                                   {/* ================= PHONE ================= */}
                                   <div
                                          className="
                                                 flex
                                                 w-full
                                                 justify-center
                                                 lg:justify-center
                                          "
                                   >
                                          <div
                                                 className="
                                                        w-full
                                                        max-w-[250px]
                                                        sm:max-w-[290px]
                                                        md:max-w-[320px]
                                                        lg:max-w-none
                                                 "
                                          >
                                                 <HeroPhone />
                                          </div>
                                   </div>


                                   {/* ================= TIMELINE ================= */}
                                   <div className="hidden lg:block">
                                          <Timeline />
                                   </div>

                            </div>

                     </div>
              </section>
       );
}

export default Hero;
