// import features from "../../data/features";
// import FeatureCard from "./featureCard";

// function WhyBuzzrr() {
//        return (
//               <section id="why" className="bg-gray-50 py-20">
//                      <div className="mx-auto max-w-7xl px-6">

//                             {/* Heading */}
//                             <div className="text-center">
//                                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
//                                           WHY CHOOSE BZZRR
//                                    </span>

//                                    <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
//                                           Why Bzzrr?
//                                    </h2>

//                                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
//                                           Book trusted home services in minutes through WhatsApp.
//                                           Fast response, verified technicians and transparent pricing.
//                                    </p>
//                             </div>

//                             {/* Cards */}
//                             <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                                    {features.map((feature) => (
//                                           <FeatureCard
//                                                  key={feature.title}
//                                                  title={feature.title}
//                                                  description={feature.description}
//                                                  icon={feature.icon}
//                                                  color={feature.color}
//                                                  text={feature.text}
//                                           />
//                                    ))}
//                             </div>

//                      </div>
//               </section>
//        );
// }

// export default WhyBuzzrr;

import features from "../../data/features";
import FeatureCard from "./featureCard";

function WhyBuzzrr() {
       return (
              <section
                     id="why"
                     className="bg-gray-50 py-14 sm:py-16 md:py-20"
              >
                     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                            {/* Heading */}
                            <div className="text-center">

                                   <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold tracking-wide text-blue-600 sm:text-sm">
                                          WHY CHOOSE BZZRR
                                   </span>

                                   <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mt-6 md:text-5xl">
                                          Why Bzzrr?
                                   </h2>

                                   <p className="mx-auto mt-4 max-w-2xl px-2 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                                          Book trusted home services in minutes through WhatsApp.
                                          Fast response, verified technicians and transparent pricing.
                                   </p>

                            </div>

                            {/* Cards */}
                            <div
                                   className="
                                          mt-10
                                          grid
                                          grid-cols-2
                                          gap-4
                                          sm:mt-12
                                          sm:gap-6
                                          md:mt-14
                                          md:grid-cols-2
                                          md:gap-8
                                          lg:grid-cols-3
                                   "
                            >
                                   {features.map((feature) => (
                                          <FeatureCard
                                                 key={feature.title}
                                                 title={feature.title}
                                                 description={feature.description}
                                                 icon={feature.icon}
                                                 color={feature.color}
                                                 text={feature.text}
                                          />
                                   ))}
                            </div>

                     </div>
              </section>
       );
}

export default WhyBuzzrr;

