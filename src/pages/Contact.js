const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Please enter your information and a message below if you would like to get in touch with me. I will respond to it as soon as possible.</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label><br></br>

          <input type="text" id="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label><br></br>

          <input type="email" id="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label><br></br>

          <textarea id="message" required></textarea>
        </div>

        <button type="submit">Send</button>
      </form>

    </div>
  );
};

export default Contact;
