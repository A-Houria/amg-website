const Services = () => {
  return (
    <div className="services">
      <section className="banner">
        <h1>Our Services</h1>
      </section>
      <section className="service">
        <div className="image">
          <img src="/Media/airport-service.jpg" alt="Airport Transfers" />
        </div>
        <div className="text">
          <div className="title">
            <h1>Airport Transfers</h1>
          </div>
          <div className="disc">
            <p>
              Whether traveling for treatment or returning from a trip, our
              airport transfer service offers reliable pick-up and drop-off with
              assistance for those needing extra care.
            </p>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="image">
          <img src="/Media/medical-service.jpg" alt="Medical Transportation" />
        </div>
        <div className="text">
          <div className="title">
            <h1>Medical Transportation</h1>
          </div>
          <div className="disc">
            <p>
              We provide safe and comfortable rides to hospitals, clinics, and
              rehabilitation centers. Our drivers are trained to assist patients
              and ensure timely arrivals for medical appointments.
            </p>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="image">
          <img src="/Media/leasing-service.jpg" alt="Car Leasing" />
        </div>
        <div className="text">
          <div className="title">
            <h1>Car Leasing</h1>
          </div>
          <div className="disc">
            <p>
              Flexible car leasing options tailored for healthcare institutions,
              caretakers, and patients needing long-term transportation. Choose
              from a variety of vehicles to meet your needs.
            </p>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="image">
          <img
            src="/Media/door-to-door-service.jpg"
            alt="Door-to-Door Service"
          />
        </div>
        <div className="text">
          <div className="title">
            <h1>Door-to-Door Service</h1>
          </div>
          <div className="disc">
            <p>
              We come directly to your location and ensure a smooth ride to your
              destination. No need to worry about public transport or arranging
              multiple connections.
            </p>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="image">
          <img
            src="/Media/on-demand-service.jpg"
            alt="Scheduled & On-Demand Rides"
          />
        </div>
        <div className="text">
          <div className="title">
            <h1>Scheduled & On-Demand Rides</h1>
          </div>
          <div className="disc">
            <p>
              Whether you need recurring transportation or a one-time trip, we
              offer both scheduled and on-demand options to fit your lifestyle
              and care routine.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
