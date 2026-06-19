import './pages.css'

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-badge">🍞 Our Story</div>
          <h1>About <span style={{ color: 'var(--orange-light)' }}>Mr. Breado</span></h1>
          <p>Born in the heart of Mumbai, we're on a mission to make great food accessible to every doorstep — fast, fresh, and affordable.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="container">
          <div className="page-card">

            {/* Stats */}
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-num">50K+</span>
                <span className="about-stat-label">Happy Customers</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">500+</span>
                <span className="about-stat-label">Restaurant Partners</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">28 min</span>
                <span className="about-stat-label">Avg. Delivery Time</span>
              </div>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🌟</span> Who We Are</h2>
              <p>Mr. Breado is a food delivery platform that connects hungry customers with the best local restaurants in Mumbai. Founded in 2022, we started with a simple belief — everyone deserves hot, delicious food delivered to their door without the wait.</p>
              <p>Today, we partner with over 500 restaurants across Mumbai and have delivered millions of meals to thousands of happy customers. We are more than just a delivery app — we're a community of food lovers, passionate chefs, and dedicated riders.</p>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">🎯</span> Our Mission</h2>
              <p>Our mission is simple: <strong>The Best You Can Get!</strong> We strive to make every meal order effortless, every delivery on-time, and every bite unforgettable. We believe technology should bridge the gap between great food and great people.</p>
              <div className="page-highlight">
                <p>"We don't just deliver food — we deliver moments of joy, comfort, and connection."</p>
              </div>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">💡</span> What Makes Us Different</h2>
              <ul>
                <li>Real-time GPS tracking so you always know where your food is</li>
                <li>No hidden charges — the price you see is the price you pay</li>
                <li>Dedicated support team available 7 days a week</li>
                <li>Eco-friendly packaging initiative with 200+ restaurant partners</li>
                <li>Loyalty rewards program with every order you place</li>
                <li>Scheduled delivery — order now, arrive when you want</li>
              </ul>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">👥</span> Meet the Team</h2>
              <p>Behind every great delivery is a passionate team working round the clock to make your experience magical.</p>
              <div className="about-team">
                <div className="team-card">
                  <div className="team-avatar">👨‍💼</div>
                  <h4>Arjun Kapoor</h4>
                  <p>CEO & Co-Founder</p>
                </div>
                <div className="team-card">
                  <div className="team-avatar">👩‍💻</div>
                  <h4>Priya Sharma</h4>
                  <p>CTO & Co-Founder</p>
                </div>
                <div className="team-card">
                  <div className="team-avatar">👨‍🍳</div>
                  <h4>Rohit Mehra</h4>
                  <p>Head of Partnerships</p>
                </div>
              </div>
            </div>

            <div className="page-section">
              <h2><span className="sec-icon">📍</span> Our Presence</h2>
              <p>Currently serving Mumbai, Maharashtra — with plans to expand to Pune, Bengaluru, Delhi, and Hyderabad by 2026. Our rider network of 2,000+ delivery partners ensures your food arrives fresh and on time, every time.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
