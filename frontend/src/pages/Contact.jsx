import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page container">
      <div className="contact-grid">
        <div>
          <div className="eyebrow">GET IN TOUCH</div>
          <h1>
            Let's build <span className="grad">together.</span>
          </h1>
          <p>
            Whether you are a student aspiring to break into tech or an enterprise looking
            to hire top-tier engineering talent, we would love to connect.
          </p>
        </div>

        <div>
          {submitted ? (
            <div className="card" style={{ padding: "40px", textAlign: "center" }}>
              <div className="icon" style={{ margin: "0 auto 20px" }}>✓</div>
              <h3>Thank you for reaching out!</h3>
              <p>We have received your message and our team will get back to you shortly.</p>
              <button
                type="button"
                className="btn outline"
                style={{ marginTop: "20px" }}
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject / Program of Interest"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows={5}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn primary">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
