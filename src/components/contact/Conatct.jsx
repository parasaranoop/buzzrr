//import ContactForm from "./ConatctForm";
import ContactInfo from "./ContactInfo";

function Conatct() {
       return (
              <section id="conatct " className="bg-gary-50 py-20">
                     <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-12">
                                   <h2 className="text-4xl font-bold ">Conatct Us</h2>
                                   <p className="mt-3 text-gray-600">
                                          We'd love to hear from you.
                                   </p>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-10">

                                   <ContactInfo />
                            </div>
                     </div>
              </section>
       )
}

export default Conatct;