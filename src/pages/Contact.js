const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-card glass-card">
        <h2>Contact Me</h2>
        <p>
          Please enter your information and a message below if you would like to get in touch.
          I'll respond as soon as possible.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
