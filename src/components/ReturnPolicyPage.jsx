import './pages.css'

export default function ReturnPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-badge">↩️ Returns & Refunds</div>
          <h1>Return <span style={{ color: 'var(--orange-light)' }}>Policy</span></h1>
          <p>We stand behind every order. If something isn't right, we'll make it right — quickly and without hassle.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="container">
          <div className="page-card">

            <div className="page-highlight" style={{ marginBottom: 36 }}>
              <p>🕐 <strong>Refund requests must be raised within 24 hours of delivery.</strong> Requests after this window may not be eligible.</p>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">✅</span> Eligible Refund Situations</h2>
              <p>You are entitled to a full or partial refund in the following cases:</p>
              <ul>
                <li>Order not delivered within 90 minutes of the estimated time</li>
                <li>Incorrect items delivered that don't match your order</li>
                <li>Food arrived damaged, spilled, or in unusable condition</li>
                <li>Missing items from your order</li>
                <li>Food quality significantly below acceptable standards (with photo proof)</li>
                <li>Restaurant cancelled your order after payment was processed</li>
                <li>Duplicate charges or payment errors</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🚫</span> Non-Refundable Situations</h2>
              <ul>
                <li>Change of mind after the restaurant has started preparing the order</li>
                <li>Incorrect delivery address provided by the customer</li>
                <li>Customer unavailable at delivery location after 3 attempts</li>
                <li>Dissatisfaction with taste or spice level (subjective preferences)</li>
                <li>Orders placed during promotional offers with stated non-refundable terms</li>
                <li>Refund requests raised more than 24 hours after delivery</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">💰</span> Refund Methods & Timeline</h2>
              <ul>
                <li><strong>Original Payment Method:</strong> 5–7 business days (credit/debit cards)</li>
                <li><strong>UPI / Net Banking:</strong> 2–3 business days</li>
                <li><strong>Mr. Breado Wallet:</strong> Instant (credited within minutes)</li>
                <li><strong>Cash on Delivery Orders:</strong> Refunded to Mr. Breado Wallet or via bank transfer within 3 days</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">📋</span> How to Request a Refund</h2>
              <ol className="delete-steps">
                <li><span>Open the Mr. Breado app and go to <strong>My Orders</strong></span></li>
                <li><span>Select the affected order and tap <strong>Report an Issue</strong></span></li>
                <li><span>Choose the issue type and attach photos if applicable</span></li>
                <li><span>Submit your request — our team reviews it within 2 hours</span></li>
                <li><span>Approved refunds are processed to your original payment method</span></li>
              </ol>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🔄</span> Order Cancellation Policy</h2>
              <p>Cancellations are allowed under the following conditions:</p>
              <ul>
                <li><strong>Free cancellation:</strong> Within 2 minutes of placing the order (before restaurant accepts)</li>
                <li><strong>Partial refund:</strong> After restaurant accepts but before preparation starts</li>
                <li><strong>No refund:</strong> Once the restaurant has started preparing your food</li>
              </ul>
              <div className="page-highlight">
                <p>⚡ Tip: If you need to cancel urgently, act quickly — use the <strong>Cancel Order</strong> button in the app immediately after placing.</p>
              </div>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">📬</span> Escalate a Refund Dispute</h2>
              <p>If your refund request was rejected and you believe it was incorrectly assessed, you can escalate to our senior support team:</p>
              <div className="page-highlight">
                <p>📧 <strong>refunds@mrbreado.com</strong> — Include your Order ID and a description of the issue. We aim to resolve all disputes within 48 hours.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
