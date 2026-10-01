import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* Left */}
        <div className="contact-content">
          <p className="contact-tag">GET IN TOUCH</p>

          <h2>
            Let's Build
            <span> Something Great.</span>
          </h2>

          <p className="contact-description">
            Have a project idea, internship opportunity, or
            collaboration in mind? Let's connect and build
            something impactful together.
          </p>

          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">✉</div>

              <div>
                <span>Email</span>
                <p>your-email@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">↗</div>

              <div>
                <span>GitHub</span>
                <p>github.com/yourusername</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">in</div>

              <div>
                <span>LinkedIn</span>
                <p>linkedin.com/in/yourprofile</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right - Form */}
        <form className="contact-form">

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}