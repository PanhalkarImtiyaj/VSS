function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: ['Up to 10 users', '5GB storage', 'Basic support', 'Core features'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Best for growing businesses',
      features: ['Up to 50 users', '50GB storage', 'Priority support', 'Advanced features', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: ['Unlimited users', 'Unlimited storage', '24/7 dedicated support', 'Custom features', 'SLA guarantee'],
      popular: false
    }
  ]

  return (
    <>
      <style>{`
        .pricing {
          padding: 145px 2rem 100px;
          background: white;
        }
        
        .pricing-container {
          max-width: 100%;
          padding: 0 4rem;
          margin: 0 auto;
        }
        
        .pricing-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .pricing-badge {
          display: inline-block;
          background: #e8f0fe;
          color: #1a73e8;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .pricing-title {
          font-size: 3rem;
          font-weight: 800;
          color: #202124;
          margin-bottom: 1rem;
        }
        
        .pricing-subtitle {
          font-size: 1.2rem;
          color: #5f6368;
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        
        .pricing-card {
          background: white;
          border: 2px solid #e8eaed;
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s;
          position: relative;
        }
        
        .pricing-card.popular {
          border-color: #1a73e8;
          box-shadow: 0 8px 24px rgba(26, 115, 232, 0.2);
          transform: scale(1.05);
        }
        
        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }
        
        .popular-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: linear-gradient(135deg, #1a73e8 0%, #4285f4 100%);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
        }
        
        .plan-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #202124;
          margin-bottom: 0.5rem;
        }
        
        .plan-description {
          font-size: 0.95rem;
          color: #5f6368;
          margin-bottom: 1.5rem;
        }
        
        .plan-price {
          font-size: 3rem;
          font-weight: 800;
          color: #202124;
          margin-bottom: 0.5rem;
        }
        
        .plan-period {
          font-size: 1rem;
          color: #5f6368;
        }
        
        .plan-features {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }
        
        .plan-feature {
          padding: 0.8rem 0;
          color: #5f6368;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        
        .feature-check {
          color: #1a73e8;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .plan-btn {
          width: 100%;
          padding: 1rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          text-align: center;
          display: block;
          transition: all 0.3s;
        }
        
        .plan-btn-primary {
          background: linear-gradient(135deg, #1a73e8 0%, #4285f4 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
        }
        
        .plan-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(26, 115, 232, 0.4);
        }
        
        .plan-btn-secondary {
          background: white;
          color: #1a73e8;
          border: 2px solid #1a73e8;
        }
        
        .plan-btn-secondary:hover {
          background: #f8f9fa;
        }
      `}</style>
      
      <section id="pricing" className="pricing">
        <div className="pricing-container">
          <div className="pricing-header">
            <span className="pricing-badge">PRICING</span>
            <h2 className="pricing-title">Choose Your Plan</h2>
            <p className="pricing-subtitle">Simple, transparent pricing that grows with you</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div>
                  <span className="plan-price">{plan.price}</span>
                  <span className="plan-period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="plan-feature">
                      <i className='bx bx-check feature-check'></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`plan-btn ${plan.popular ? 'plan-btn-primary' : 'plan-btn-secondary'}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
