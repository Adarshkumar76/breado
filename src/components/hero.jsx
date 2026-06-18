import './hero.css'
import heroImg from '../assets/images/hero_delivery.png'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="section-label hero-badge">
            🚀 Fast Delivery in 30 Mins
          </div>

          <h1 className="hero-title">
            Delicious Food,<br />
            <span>Right at Your</span><br />
            Doorstep
          </h1>

          <p className="hero-desc">
            Order from the best restaurants near you with Mr. Breado. 
            Fresh food, quick delivery, and the best prices — always!
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Restaurants</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">30K+</span>
              <span className="stat-label">Happy Users</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">30 Min</span>
              <span className="stat-label">Avg. Delivery</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#download" className="btn-primary hero-btn">
              <span>📱</span> Download Now
            </a>
            <a href="#how-it-works" className="btn-outline">
              <span>▶</span> See How It Works
            </a>
          </div>

          <div className="store-badges">
            <a href="#download" className="store-badge" id="play-store-badge">
              <span className="store-icon">▶</span>
              <div>
                <span className="store-top">Get it on</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>
            <a href="#download" className="store-badge" id="app-store-badge">
              <span className="store-icon">⌘</span>
              <div>
                <span className="store-top">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-img-wrapper">
            <div className="hero-ring hero-ring-1" />
            <div className="hero-ring hero-ring-2" />
            <img src={heroImg} alt="Mr. Breado Delivery" className="hero-img" />
            <div className="floating-card card-delivery">
              <span className="card-icon">🛵</span>
              <div>
                <span className="card-title">On the Way!</span>
                <span className="card-sub">Arriving in 12 mins</span>
              </div>
            </div>
            <div className="floating-card card-rating">
              <span className="card-icon">⭐</span>
              <div>
                <span className="card-title">4.9 Rating</span>
                <span className="card-sub">2,340 reviews</span>
              </div>
            </div>
            <div className="floating-card card-order">
              <span className="card-icon">🍔</span>
              <div>
                <span className="card-title">Order Placed!</span>
                <span className="card-sub">Preparing now...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
