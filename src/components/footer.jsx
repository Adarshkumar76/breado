import './footer.css'
import logoImg from '../assets/images/logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img src={logoImg} alt="Mr. Breado" />
            </a>
            <p className="footer-tagline">
              The Best You Can Get! Fresh food delivered hot to your door in under 30 minutes.
            </p>
            <div className="footer-socials">
              <a href="#" id="fb-link" className="social-link" aria-label="Facebook">f</a>
              <a href="#" id="ig-link" className="social-link" aria-label="Instagram">📸</a>
              <a href="#" id="tw-link" className="social-link" aria-label="Twitter">𝕏</a>
              <a href="#" id="yt-link" className="social-link" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Download App</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>For Partners</h4>
              <ul>
                <li><a href="#">Add Your Restaurant</a></li>
                <li><a href="#">Become a Rider</a></li>
                <li><a href="#">Partner Benefits</a></li>
                <li><a href="#">Advertise with Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li><a href="tel:+911234567890">📞 +91 123 456 7890</a></li>
                <li><a href="mailto:hello@mrbreado.com">✉️ hello@mrbreado.com</a></li>
                <li><span>📍 Mumbai, India</span></li>
              </ul>
              <div className="footer-store-badges">
                <a href="#download" className="footer-badge" id="footer-play">▶ Google Play</a>
                <a href="#download" className="footer-badge" id="footer-apple">⌘ App Store</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {currentYear} Mr. Breado. All rights reserved. The Best You Can Get!</p>
          <p className="footer-love">Made with ❤️ for food lovers everywhere</p>
        </div>
      </div>
    </footer>
  )
}
