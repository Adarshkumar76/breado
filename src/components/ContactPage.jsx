import { useState } from 'react'
import './pages.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-badge">📬 Get In Touch</div>
          <h1>Contact <span style={{ color: 'var(--orange-light)' }}>Us</span></h1>
          <p>Have a question or need help? We're here for you 24/7. Reach out and our team will respond within minutes.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info-card">
              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+911234567890">+91 123 456 7890</a>
                  <p>Mon – Sun · 8 AM – 11 PM</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:hello@mrbreado.com">hello@mrbreado.com</a>
                  <p>We reply within 2 hours</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>123 Foodie Lane, Bandra West<br />Mumbai, Maharashtra 400050</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">💬</div>
                <div>
                  <h4>Live Chat</h4>
                  <p>Chat with us directly inside the Mr. Breado app — available 24/7.</p>
                </div>
              </div>
              <div className="page-highlight" style={{ marginTop: 'auto' }}>
                <p>🚀 For urgent order issues, use the <strong>Help</strong> section inside the app for fastest support.</p>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-card">
              {sent ? (
                <div className="form-success">
                  <div className="success-icon">🎉</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. Our team will get back to you within 2 hours.</p>
                </div>
              ) : (
                <>
                  <h3>Send us a Message</h3>
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-name">Full Name</label>
                        <input id="contact-name" name="name" type="text" placeholder="Rahul Sharma" required value={form.name} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-phone">Phone</label>
                        <input id="contact-phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input id="contact-email" name="email" type="email" placeholder="rahul@email.com" required value={form.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-subject">Subject</label>
                      <select id="contact-subject" name="subject" value={form.subject} onChange={handleChange} required>
                        <option value="">Select a topic…</option>
                        <option>Order Issue</option>
                        <option>Payment Problem</option>
                        <option>Delivery Complaint</option>
                        <option>Restaurant Partner Query</option>
                        <option>App Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">Message</label>
                      <textarea id="contact-message" name="message" rows={5} placeholder="Tell us how we can help you…" required value={form.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="form-submit" id="contact-submit-btn">Send Message →</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
