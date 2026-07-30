import features from "../../data/features";
import FeatureCard from "./featureCard";

function WhyBuzzrr() {
       return (
              <section id="why" className="bg-gray-50 py-20">
                     <div className="mx-auto max-w-7xl px-6">

                            {/* Heading */}
                            <div className="text-center">
                                   <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                                          WHY CHOOSE BZZRR
                                   </span>

                                   <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                                          Why Bzzrr?
                                   </h2>

                                   <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                                          Book trusted home services in minutes through WhatsApp.
                                          Fast response, verified technicians and transparent pricing.
                                   </p>
                            </div>

                            {/* Cards */}
                            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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