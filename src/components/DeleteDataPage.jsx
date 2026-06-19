import { useState } from 'react'
import './pages.css'

export default function DeleteDataPage() {
  const [form, setForm] = useState({ email: '', reason: '', confirm: false })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm({ ...form, [e.target.name]: val })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-badge">🗑️ Data Rights</div>
          <h1>Delete My <span style={{ color: 'var(--orange-light)' }}>Data</span></h1>
          <p>You have full control over your personal data. Submit a request and we will permanently delete your account and all associated information.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="container">
          <div className="page-card">

            <div className="delete-warning-box">
              <div className="delete-warning-icon">⚠️</div>
              <div>
                <h3>This Action is Permanent & Irreversible</h3>
                <p>Once processed, all your account info, order history, addresses, loyalty points, and preferences will be permanently erased and cannot be recovered.</p>
              </div>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">📦</span> What Will Be Deleted</h2>
              <ul>
                <li>Name, email, phone number, and profile photo</li>
                <li>All order history and transaction records</li>
                <li>Saved delivery addresses and location history</li>
                <li>Loyalty points, rewards, and referral credits</li>
                <li>Payment methods and billing information</li>
                <li>Reviews, ratings, and app activity logs</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">📋</span> How the Process Works</h2>
              <ol className="delete-steps">
                <li><span>Submit the deletion request form below with your registered email.</span></li>
                <li><span>You'll receive a verification email — click the link to confirm your identity.</span></li>
                <li><span>Our team reviews and initiates the deletion within 48 hours.</span></li>
                <li><span>All data is permanently deleted within <strong>30 days</strong>.</span></li>
                <li><span>You receive a final confirmation email once deletion is complete.</span></li>
              </ol>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">📝</span> Submit Deletion Request</h2>
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✅</div>
                  <h3>Request Received!</h3>
                  <p>Check your inbox at <strong>{form.email}</strong> — click the verification link to confirm. Process completes within 30 days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="delete-data-form">
                  <div className="form-group">
                    <label htmlFor="delete-email">Registered Email Address</label>
                    <input id="delete-email" name="email" type="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="delete-reason">Reason (Optional)</label>
                    <select id="delete-reason" name="reason" value={form.reason} onChange={handleChange}>
                      <option value="">Select a reason…</option>
                      <option>No longer using the service</option>
                      <option>Privacy concerns</option>
                      <option>Switching to another platform</option>
                      <option>Bad experience</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <input id="delete-confirm" name="confirm" type="checkbox" required checked={form.confirm} onChange={handleChange} style={{ width: 18, height: 18, accentColor: 'var(--orange)' }} />
                    <label htmlFor="delete-confirm" style={{ textTransform: 'none', letterSpacing: 0, fontSize: 14.5, fontWeight: 400, cursor: 'pointer' }}>
                      I understand this is <strong>permanent and irreversible</strong> and wish to delete all my Mr. Breado data.
                    </label>
                  </div>
                  <button type="submit" id="delete-submit-btn" className="form-submit" style={{ background: 'linear-gradient(135deg, #c62828, #e53935)' }}>
                    Submit Deletion Request →
                  </button>
                </form>
              )}
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">💬</span> Need Help Instead?</h2>
              <div className="page-highlight">
                <p>Having an issue? Our support team may resolve it without deleting your account. Email <strong>support@mrbreado.com</strong> or use in-app chat.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
