import './download.css'
import appImg from '../assets/images/app_mockup.png'

export default function Download() {
  return (
    <section id="download" className="download-section">
      <div className="download-bg-orb download-orb-1" />
      <div className="download-bg-orb download-orb-2" />

      <div className="container download-container">
        <div className="download-text">
          <span className="section-label section-label-light">🎉 Get The App</span>
          <h2 className="download-title">
            Fresh Food is Just<br />a <span>Download Away!</span>
          </h2>
          <p className="download-desc">
            Join over 30,000 happy foodies who trust Mr. Breado every day.
            Available on Android and iOS — free to download, always.
          </p>

          <div className="download-perks">
            <div className="perk-item">
              <span className="perk-icon">🎁</span>
              <span>Free delivery on your first order</span>
            </div>
            <div className="perk-item">
              <span className="perk-icon">💸</span>
              <span>Exclusive app-only deals every day</span>
            </div>
            <div className="perk-item">
              <span className="perk-icon">⚡</span>
              <span>Lightning-fast order tracking</span>
            </div>
          </div>

          <div className="download-btns">
            <a href="#" id="google-play-btn" className="dwnld-store-btn">
              <div className="dwnld-store-icon">▶</div>
              <div className="dwnld-store-text">
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </a>
            <a href="#" id="apple-store-btn" className="dwnld-store-btn">
              <div className="dwnld-store-icon">⌘</div>
              <div className="dwnld-store-text">
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </a>
          </div>
        </div>

        <div className="download-img-wrap">
          <img src={appImg} alt="Mr. Breado App" className="download-app-img" />
          <div className="download-glow" />
        </div>
      </div>
    </section>
  )
}
