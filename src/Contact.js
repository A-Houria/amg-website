import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="contact">
      <div className="wrapper">
        <h1 data-aos="fade-down">Contact us</h1>
        <div className="cards">
          <div className="card" data-aos="fade-up">
            <img src="/Media/phone.png" alt="Phone" />
            <h1>By Phone</h1>
            <p>+49 173-467-1667</p>
          </div>
          <div className="card" data-aos="fade-up">
            <img src="/Media/mail.png" alt="email" />
            <h1>By email</h1>
            <p>info@amgmobilitysolutions.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
