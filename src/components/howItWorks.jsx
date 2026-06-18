import './howItWorks.css'

const steps = [
  {
    icon: '📍',
    number: '01',
    title: 'Set Your Location',
    desc: 'Tell us where you are and we will find the best restaurants delivering near you right now.',
  },
  {
    icon: '🍽️',
    number: '02',
    title: 'Pick Your Meal',
    desc: 'Browse hundreds of dishes from your favourite restaurants. Filter by cuisine, price, or rating.',
  },
  {
    icon: '💳',
    number: '03',
    title: 'Pay in Seconds',
    desc: 'Choose from UPI, cards, or cash on delivery. Quick, secure, and totally hassle-free.',
  },
  {
    icon: '🚀',
    number: '04',
    title: 'Enjoy Your Food',
    desc: 'Track your order live on the map. Hot food arrives at your door in under 30 minutes.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="hiw-section">
      <div className="container hiw-container">
        <div className="hiw-header">
          <span className="section-label">⚡ Simple Process</span>
          <h2 className="section-title">
            Order Food in <span>4 Easy Steps</span>
          </h2>
          <p className="section-desc">
            From hunger to happiness in minutes. Here is exactly how Mr. Breado works its magic.
          </p>
        </div>

        <div className="hiw-steps">
          {steps.map((step, i) => (
            <div className="hiw-card" key={step.number}>
              <div className="hiw-number">{step.number}</div>
              <div className="hiw-icon-wrap">{step.icon}</div>
              <h3 className="hiw-title">{step.title}</h3>
              <p className="hiw-desc">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hiw-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
