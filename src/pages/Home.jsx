import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import BookingFlow from "../components/flow/BookingFlow";
import Services from "../components/services/Services";
import ExploreStores from "../components/stores/ExploreStores";
import WhyBuzzrr from "../components/features/WhyBuzzrr";
import Reviews from "../components/reviews/Reviews";
import MapSection from "../components/map/MapSection";
import CTA from "../components/cta/CTA";
import Footer from "../components/footer/Footer";
import Conatct from "../components/contact/Conatct";
import About from "../components/about/About";

function Home() {
       return (
              <>
                     <Navbar />

                     <section id="home">
                            <Hero />
                     </section>

                     <section id="booking">
                            <BookingFlow />
                     </section>

                     <section id="services">
                            <Services />
                     </section>
                     {/*no need now*/}

                     <section id="stores">
                            <ExploreStores />
                     </section>

                     <section id="whybuzzrr">
                            <WhyBuzzrr />
                     </section>

                     <section id="reviews">
                            <Reviews />
                     </section>

                     <section id="MapSection">
                            <MapSection />
                     </section>
                     <section id="about">
                            <About />
                     </section>

                     <section id="contact">
                            <Conatct />
                     </section>

                     <section id="cta">
                            <CTA />
                     </section>



                     <Footer />
              </>
       );
}

export default Home;