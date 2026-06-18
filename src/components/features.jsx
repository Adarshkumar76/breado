import './features.css'
import foodImg from '../assets/images/food_categories.png'

const features = [
  { icon: '⚡', title: '30-Min Delivery', desc: 'We guarantee your food arrives hot and fresh within 30 minutes or your next order is on us.' },
  { icon: '🍕', title: '500+ Restaurants', desc: 'Choose from a massive selection of local gems and popular chains across all cuisines.' },
  { icon: '🔒', title: 'Safe Payments', desc: 'Your payment is always protected. We support UPI, cards, wallets, and cash on delivery.' },
  { icon: '📍', title: 'Live Order Tracking', desc: 'Watch your delivery rider move in real-time on the map. No more guessing when your food arrives.' },
  { icon: '💰', title: 'Best Price Promise', desc: 'Get exclusive deals and discounts daily. We match prices so you always get the best deal.' },
  { icon: '⭐', title: 'Top-Rated Only', desc: 'Every restaurant on our platform is verified and rated by real customers just like you.' },
]

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-bg-pattern" />
      <div className="container features-container">
        <div className="features-top">
          <div className="features-text">
            <span className="section-label">🌟 Why Mr. Breado?</span>
            <h2 className="section-title">
              We Deliver More Than <span>Just Food</span>
            </h2>
            <p className="section-desc">
              Mr. Breado is built for people who love great food and hate waiting.
              Every feature is designed to make your experience effortless and delightful.
            </p>
            <a href="#download" className="btn-primary features-cta">
              <span>📱</span> Start Ordering
            </a>
          </div>
          <div className="features-img-wrap">
            <img src={foodImg} alt="Food Categories" className="features-food-img" />
            <div className="features-badge">
              <span className="badge-num">4.9 ⭐</span>
              <span className="badge-text">App Store Rating</span>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
