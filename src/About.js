import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about">
      <section className="hero" data-aos="fade-up">
        <img
          className="hero-image"
          src="/Media/about-hero.jpg"
          alt="hero image"
          data-aos="zoom-in"
        />
        <div className="cont" data-aos="fade-left">
          <h1>Driven by Care. Powered by Trust.</h1>
          <div className="line"></div>
          <p>
            At AMG Mobility Solutions, every journey begins with compassion and
            ends with reliability. We prioritize comfort, safety, and
            respect—earning the trust of our passengers through consistent,
            dependable service.
          </p>
        </div>
      </section>

      <section className="analytics" data-aos="fade-up">
        <div className="card" data-aos="flip-left">
          <h1>24/7</h1>
          <p>ready when you need us.</p>
        </div>
        <div className="card" data-aos="flip-left">
          <h1>Nationwide Coverage</h1>
          <p>Wherever you are, we’ll get you there.</p>
        </div>
        <div className="card" data-aos="flip-left">
          <h1>Patient First</h1>
          <p>Compassionate rides, every time.</p>
        </div>
      </section>

      <section className="process" data-aos="fade-up">
        <div className="cont" data-aos="fade-right">
          <img src="/Media/proccess_1.png" alt="Book Your Ride" />
          <div className="text">
            <h1>Book Your Ride</h1>
            <ul className="proccess-list">
              <li>Select the date and time that fits your schedule.</li>
              <li>Choose the type of transportation service you need.</li>
              <li>Confirm your booking by email</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="process" data-aos="fade-up">
        <div className="cont" data-aos="fade-left">
          <img src="/Media/proccess_2.jpg" alt="Travel Comfortably" />
          <div className="text">
            <h1>Travel Comfortably</h1>
            <ul className="proccess-list">
              <li>Our trained drivers arrive promptly at your location.</li>
              <li>Vehicles are clean, safe, and equipped for patient needs.</li>
              <li>
                Assistance is provided during boarding and throughout the ride.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="process" data-aos="fade-up">
        <div className="cont" data-aos="fade-right">
          <img src="/Media/proccess_3.jpg" alt="Arrive Stress-Free" />
          <div className="text">
            <h1>Arrive Stress-Free</h1>
            <ul className="proccess-list">
              <li>We ensure timely arrival at your destination.</li>
              <li>Drivers follow safety and hygiene protocols.</li>
              <li>You receive friendly and professional service every trip.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
