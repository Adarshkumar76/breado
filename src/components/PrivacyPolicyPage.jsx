import './pages.css'

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-badge">🔒 Your Privacy Matters</div>
          <h1>Privacy <span style={{ color: 'var(--orange-light)' }}>Policy</span></h1>
          <p>We are committed to protecting your personal information. Here's exactly how we collect, use, and safeguard your data.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="container">
          <div className="page-card">

            <div className="page-highlight" style={{ marginBottom: 36 }}>
              <p>📅 <strong>Last Updated:</strong> June 2025 &nbsp;|&nbsp; This policy applies to all users of the Mr. Breado app and website.</p>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">📋</span> Information We Collect</h2>
              <p>When you use Mr. Breado, we collect the following types of information:</p>
              <ul>
                <li><strong>Account Information:</strong> Your name, email address, phone number, and profile photo</li>
                <li><strong>Delivery Addresses:</strong> Locations you save for food delivery</li>
                <li><strong>Order History:</strong> Details of your past orders and preferences</li>
                <li><strong>Device Information:</strong> Device type, OS version, app version, and unique device ID</li>
                <li><strong>Location Data:</strong> Real-time location to enable delivery tracking (only when app is active)</li>
                <li><strong>Payment Information:</strong> Transaction records (card details are handled by secure payment gateways — we never store full card numbers)</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🎯</span> How We Use Your Information</h2>
              <p>Your data is used exclusively to improve your experience on Mr. Breado:</p>
              <ul>
                <li>Processing and delivering your food orders accurately</li>
                <li>Sending order confirmations, delivery updates, and receipts</li>
                <li>Personalising restaurant and menu recommendations</li>
                <li>Resolving support tickets and customer complaints</li>
                <li>Detecting and preventing fraud or unauthorized access</li>
                <li>Improving app performance, features, and user experience</li>
                <li>Sending promotional offers (only with your consent)</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🤝</span> Information Sharing</h2>
              <p>We do not sell your personal data to third parties. We share your information only in these limited circumstances:</p>
              <ul>
                <li><strong>Restaurant Partners:</strong> Your name and delivery address are shared with the restaurant fulfilling your order</li>
                <li><strong>Delivery Riders:</strong> Your contact number and address are shared with the rider assigned to your delivery</li>
                <li><strong>Payment Processors:</strong> Secure payment gateways handle all financial transactions</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🛡️</span> Data Security</h2>
              <p>We implement industry-standard security measures to protect your data:</p>
              <ul>
                <li>All data is encrypted in transit using TLS/SSL protocols</li>
                <li>Sensitive data is encrypted at rest using AES-256 encryption</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls ensuring only authorized personnel can view your data</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">⚙️</span> Your Rights & Controls</h2>
              <ul>
                <li>Access and download a copy of all your personal data</li>
                <li>Correct inaccurate information in your profile at any time</li>
                <li>Opt out of marketing communications via app settings</li>
                <li>Request deletion of your account and all associated data</li>
                <li>Withdraw consent for location tracking in device settings</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🍪</span> Cookies & Tracking</h2>
              <p>Our website uses cookies to remember your preferences, analyse traffic, and improve performance. You can manage cookie preferences through your browser settings. Essential cookies required for the site to function cannot be disabled.</p>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">📬</span> Contact for Privacy</h2>
              <p>For any privacy-related questions, concerns, or data requests, please contact our Data Protection Officer:</p>
              <div className="page-highlight">
                <p>📧 <strong>privacy@mrbreado.com</strong><br />We aim to respond to all privacy requests within 72 hours.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
