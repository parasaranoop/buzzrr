import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
       return (
              <div className="bg-white p-8 rounded-2xl shadow">

                     <h2 className="text-2xl font-bold mb-6">
                            Send us a Message
                     </h2>

                     <form className="space-y-5">

                            <input
                                   type="text"
                                   placeholder="Your Name"
                                   className="w-full border rounded-lg p-3"
                            />

                            <input
                                   type="email"
                                   placeholder="Email"
                                   className="w-full border rounded-lg p-3"
                            />

                            <input
                                   type="tel"
                                   placeholder="Phone Number"
                                   className="w-full border rounded-lg p-3"
                            />

                            <select className="w-full border rounded-lg p-3">
                                   <option>Select Service</option>
                                   <option>Electrician</option>
                                   <option>Plumbing</option>
                                   <option>AC Repair</option>
                                   <option>Cleaning</option>
                            </select>

                            <textarea
                                   rows="5"
                                   placeholder="Message"
                                   className="w-full border rounded-lg p-3"
                            ></textarea>

                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                                   <FaPaperPlane />
                                   Send Message
                            </button>

                     </form>

              </div>
       );
}

export default ContactForm;