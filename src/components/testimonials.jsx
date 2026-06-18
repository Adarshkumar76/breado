import './testimonials.css'

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Food Blogger',
    avatar: '👩',
    rating: 5,
    text: 'Mr. Breado is hands down the fastest delivery app I have ever used. The food always arrives hot and the app is so easy to use. Totally obsessed!',
    location: 'Mumbai',
  },
  {
    name: 'Rahul Gupta',
    role: 'Software Engineer',
    avatar: '👨‍💻',
    rating: 5,
    text: 'I order lunch through Mr. Breado every day at work. The restaurant selection is amazing and the live tracking feature is genuinely impressive.',
    location: 'Bangalore',
  },
  {
    name: 'Aisha Khan',
    role: 'Doctor',
    avatar: '👩‍⚕️',
    rating: 5,
    text: 'After a long shift, the last thing I want is to cook. Mr. Breado saves me every time — quick, reliable, and always delicious. Five stars!',
    location: 'Delhi',
  },
  {
    name: 'Vikram Nair',
    role: 'College Student',
    avatar: '🧑‍🎓',
    rating: 5,
    text: 'The deals and discounts are insane! I get great food at student-friendly prices. Mr. Breado is literally a lifesaver during exam season.',
    location: 'Pune',
  },
  {
    name: 'Sneha Patel',
    role: 'Entrepreneur',
    avatar: '👩‍💼',
    rating: 5,
    text: 'I have tried every food app out there. Nothing comes close to Mr. Breado for speed, variety, and the sheer quality of restaurants available.',
    location: 'Ahmedabad',
  },
  {
    name: 'Arjun Menon',
    role: 'Fitness Trainer',
    avatar: '💪',
    rating: 5,
    text: 'Healthy options, calorie info, quick delivery — Mr. Breado ticks all boxes even for someone with strict dietary needs. Absolutely love it!',
    location: 'Chennai',
  },
]

export default function Testimonials() {
  return (
    <section id="contact" className="testimonials-section">
      <div className="container testimonials-container">
        <div className="testimonials-header">
          <span className="section-label">💬 Real Reviews</span>
          <h2 className="section-title">
            What Our Customers <span>Love About Us</span>
          </h2>
          <p className="section-desc">
            Do not take our word for it. Here is what thousands of happy customers say about their Mr. Breado experience.
          </p>
        </div>

        <div className="testimonials-marquee">
          <div className="marquee-track">
            {[...reviews, ...reviews].map((r, i) => (
              <div className="review-card" key={`${r.name}-${i}`}>
                <div className="review-stars">
                  {'⭐'.repeat(r.rating)}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <span className="review-avatar">{r.avatar}</span>
                  <div>
                    <span className="review-name">{r.name}</span>
                    <span className="review-role">{r.role} · {r.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-numbers">
          <div className="tnum-item">
            <span className="tnum-value">30K+</span>
            <span className="tnum-label">Happy Customers</span>
          </div>
          <div className="tnum-divider" />
          <div className="tnum-item">
            <span className="tnum-value">4.9/5</span>
            <span className="tnum-label">Average Rating</span>
          </div>
          <div className="tnum-divider" />
          <div className="tnum-item">
            <span className="tnum-value">500+</span>
            <span className="tnum-label">Restaurants</span>
          </div>
          <div className="tnum-divider" />
          <div className="tnum-item">
            <span className="tnum-value">98%</span>
            <span className="tnum-label">On-Time Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}
