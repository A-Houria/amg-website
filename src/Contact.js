const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <h1>Contact us</h1>
        <div className="cards">
          <div className="card">
            <img src="/Media/phone.png" alt="Phone" />
            <h1>By Phone</h1>
            <p>+49 1111-111-11111</p>
          </div>
          <div className="card">
            <img src="/Media/mail.png" alt="email" />
            <h1>By email</h1>
            <p>info@amgmobilitysolutions.de</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
