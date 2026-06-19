import './pages.css'

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-badge">📄 Legal</div>
          <h1>Terms & <span style={{ color: 'var(--orange-light)' }}>Conditions</span></h1>
          <p>Please read these terms carefully before using Mr. Breado. By using our platform, you agree to be bound by these terms.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="container">
          <div className="page-card">

            <div className="page-highlight" style={{ marginBottom: 36 }}>
              <p>📅 <strong>Effective Date:</strong> June 1, 2025 &nbsp;|&nbsp; These terms govern your use of the Mr. Breado app and website.</p>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">✅</span> Acceptance of Terms</h2>
              <p>By downloading, installing, or using the Mr. Breado application or website ("Platform"), you confirm that you are at least 18 years of age and agree to these Terms and Conditions. If you do not agree, please do not use our Platform.</p>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">👤</span> User Accounts</h2>
              <ul>
                <li>You must provide accurate, complete, and up-to-date information during registration</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized access to your account</li>
                <li>One person may not maintain more than one active account</li>
                <li>Mr. Breado reserves the right to suspend or terminate accounts that violate these terms</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🛒</span> Orders & Payments</h2>
              <ul>
                <li>Orders are subject to restaurant availability and delivery area coverage</li>
                <li>Prices displayed include applicable taxes unless stated otherwise</li>
                <li>Payment must be completed at the time of placing the order</li>
                <li>We accept UPI, credit/debit cards, net banking, and cash on delivery</li>
                <li>Once an order is confirmed and being prepared, it cannot be cancelled</li>
                <li>In case of payment failure, the order will not be processed</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🚚</span> Delivery Terms</h2>
              <ul>
                <li>Estimated delivery times are approximate and may vary due to traffic, weather, or demand</li>
                <li>Delivery is available only within our serviceable areas</li>
                <li>You must be available at the delivery address at the time of delivery</li>
                <li>After 3 failed delivery attempts, the order may be cancelled without a refund</li>
                <li>Mr. Breado is not liable for delays caused by circumstances beyond our control</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🚫</span> Prohibited Activities</h2>
              <p>Users are strictly prohibited from:</p>
              <ul>
                <li>Using the Platform for any unlawful or fraudulent purpose</li>
                <li>Placing fake orders to harass restaurants or riders</li>
                <li>Attempting to reverse engineer, hack, or disrupt our Platform</li>
                <li>Posting abusive, offensive, or defamatory content in reviews</li>
                <li>Misusing promotional codes or referral systems</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">⚖️</span> Limitation of Liability</h2>
              <p>Mr. Breado acts as a facilitator between customers and restaurant partners. We are not responsible for:</p>
              <ul>
                <li>The quality, safety, or accuracy of food prepared by restaurants</li>
                <li>Any allergic reactions or food-related health issues</li>
                <li>Indirect, incidental, or consequential damages arising from use of our Platform</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🔄</span> Changes to Terms</h2>
              <p>We may update these Terms from time to time. We will notify you of significant changes via app notification or email. Continued use of the Platform after changes constitutes your acceptance of the revised Terms.</p>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">📬</span> Contact</h2>
              <div className="page-highlight">
                <p>For legal queries, contact us at <strong>legal@mrbreado.com</strong> or write to us at 123 Foodie Lane, Bandra West, Mumbai 400050.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
