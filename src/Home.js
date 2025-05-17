import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [openFAQs, setOpenFAQs] = useState(Array(6).fill(false));

  const toggleFAQ = (index) => {
    setOpenFAQs((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="home">
      <div className="cont">
        <section className="transport" data-aos="fade-up">
          <h1>Transportation Services</h1>
          <p>
            At AMG Mobility Solutions, we specialize in reliable and comfortable
            transportation services for patients across Germany. Whether it’s
            getting to medical appointments, hospital visits, airport transfers,
            or long-term leasing solutions, our goal is to make every journey
            safe, punctual, and stress-free. With a fleet of well-maintained
            vehicles and a commitment to care, we support individuals and
            healthcare providers with dependable mobility solutions.
          </p>
          <div className="cards">
            <div className="card" data-aos="zoom-in">
              <div className="image">
                <img
                  src="/Media/Medical-transport.jpg"
                  alt="Medical Transportation"
                />
              </div>
              <div className="text">
                <h1>Medical Transportation</h1>
                <p>
                  We provide safe and comfortable rides to hospitals, clinics,
                  and rehabilitation centers. Our drivers are trained to assist
                  patients and ensure timely arrivals for medical appointments.
                </p>
              </div>
            </div>
            <div className="card" data-aos="zoom-in">
              <div className="image">
                <img
                  src="/Media/airport-transport.jpg"
                  alt="Airport Transfers"
                />
              </div>
              <div className="text">
                <h1>Airport Transfers</h1>
                <p>
                  Whether traveling for treatment or returning from a trip, our
                  airport transfer service offers reliable pick-up and drop-off
                  with assistance for those needing extra care.
                </p>
              </div>
            </div>
            <div className="card" data-aos="zoom-in">
              <div className="image">
                <img src="/Media/car-leasing.jpg" alt="Car Leasing" />
              </div>
              <div className="text">
                <h1>Car Leasing</h1>
                <p>
                  Flexible car leasing options tailored for healthcare
                  institutions, caretakers, and patients needing long-term
                  transportation. Choose from a variety of vehicles to meet your
                  needs.
                </p>
              </div>
            </div>
            <div className="card" data-aos="zoom-in">
              <div className="image">
                <img src="/Media/door-to-door.jpg" alt="Door-to-Door" />
              </div>
              <div className="text">
                <h1>Door-to-Door Service</h1>
                <p>
                  We come directly to your location and ensure a smooth ride to
                  your destination. No need to worry about public transport or
                  arranging multiple connections.
                </p>
              </div>
            </div>
            <div className="card" data-aos="zoom-in">
              <div className="image">
                <img
                  src="/Media/scheduled-on-demand.jpg"
                  alt="Scheduled & On-Demand Rides"
                />
              </div>
              <div className="text">
                <h1>Scheduled & On-Demand Rides</h1>
                <p>
                  Whether you need recurring transportation or a one-time trip,
                  we offer both scheduled and on-demand options to fit your
                  lifestyle and care routine.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="why-us" data-aos="fade-up">
          <h1>Why Choose Us?</h1>
          <div className="cards">
            <div className="card" data-aos="flip-left">
              <div className="image">
                <img src="/Media/comfort-icon.png" alt="Comfortable" />
              </div>
              <div className="text">
                <h1>Comfortable, well-equipped vehicles</h1>
              </div>
            </div>
            <div className="card" data-aos="flip-left">
              <div className="image">
                <img src="/Media/on-time-icon.png" alt="On-time" />
              </div>
              <div className="text">
                <h1>On-time, reliable service</h1>
              </div>
            </div>
            <div className="card" data-aos="flip-left">
              <div className="image">
                <img
                  src="/Media/patient-focused-icon.png"
                  alt="professional drivers"
                />
              </div>
              <div className="text">
                <h1>Patient-focused & professional drivers</h1>
              </div>
            </div>
            <div className="card" data-aos="flip-left">
              <div className="image">
                <img
                  src="/Media/coverage-icon.png"
                  alt="Coverage across Germany"
                />
              </div>
              <div className="text">
                <h1>Coverage across Germany</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="faq" data-aos="fade-up">
          <h1>Frequently Asked Questions. (FAQ)</h1>
          <div className="cards">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="card"
                onClick={() => toggleFAQ(i)}
                data-aos="fade-right">
                <h1>
                  {
                    [
                      "How can I book a ride?",
                      "Do you provide wheelchair-accessible vehicles?",
                      "Can I schedule regular transportation (e.g., weekly appointments)?",
                      "Do you offer transportation outside of city limits?",
                      "What safety measures do your drivers follow?",
                      "What languages do your drivers speak?",
                    ][i]
                  }
                </h1>
                <p className={`faq-answer ${openFAQs[i] ? "open" : ""}`}>
                  {
                    [
                      "You can book a ride through our website, by phone, or via WhatsApp. We recommend booking at least 24 hours in advance, especially for medical appointments.",
                      "Yes, we offer vehicles equipped to accommodate wheelchairs and mobility aids. Please mention your requirements when booking.",
                      "Absolutely. We offer scheduled recurring rides for patients who need regular transportation to medical facilities or therapy sessions.",
                      "Yes, we provide long-distance transportation to hospitals, airports, and clinics across Germany.",
                      "Our drivers are trained in patient care and follow strict hygiene and safety protocols, including vehicle sanitization and courteous assistance.",
                      "Our drivers speak German and English. If you need assistance in another language, please let us know in advance.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
