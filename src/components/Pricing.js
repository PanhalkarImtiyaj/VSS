function Pricing() {
  const features = [
    {
      icon: 'bx-rocket',
      title: 'Fast Delivery',
      description: 'Quick turnaround time without compromising on quality. We deliver projects on schedule.',
      color: '#FF6B6B'
    },
    {
      icon: 'bx-shield-alt-2',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all our solutions.',
      color: '#4ECDC4'
    },
    {
      icon: 'bx-support',
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your business runs smoothly.',
      color: '#FFE66D'
    },
    {
      icon: 'bx-code-alt',
      title: 'Clean Code',
      description: 'Well-documented, maintainable code following industry best practices.',
      color: '#95E1D3'
    },
    {
      icon: 'bx-trending-up',
      title: 'Scalable Solutions',
      description: 'Built to grow with your business. Easily scale as your needs expand.',
      color: '#A8E6CF'
    },
    {
      icon: 'bx-dollar-circle',
      title: 'Cost Effective',
      description: 'Competitive pricing with transparent billing. No hidden costs.',
      color: '#FFD93D'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '300+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <>
      <style>{`
        .why-choose-us {
          padding: 100px 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8f0fe 100%);
          overflow-x: hidden;
          max-width: 100%;
          position: relative;
        }

        .why-choose-us::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 300px;
          background: linear-gradient(135deg, rgba(0,51,102,0.05) 0%, rgba(0,188,212,0.05) 100%);
          clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
        }

        .why-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .why-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .why-header h2 {
          font-size: 3.5rem;
          color: #003366;
          margin-bottom: 1rem;
          font-weight: 900;
          background: linear-gradient(135deg, #003366, #00BCD4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .why-header p {
          font-size: 1.3rem;
          color: #5f6368;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Stats Section */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 5rem;
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          border-right: 2px solid #e8eaed;
          transition: all 0.3s;
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-item:hover {
          transform: translateY(-3px);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #003366, #00BCD4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.1rem;
          color: #5f6368;
          font-weight: 600;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .feature-card {
          background: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border-top: 4px solid var(--card-color);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(0,0,0,0.12);
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          background: rgba(0, 188, 212, 0.1);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          background: rgba(0, 188, 212, 0.15);
        }

        .feature-icon i {
          font-size: 2.2rem;
          color: var(--card-color);
        }

        .feature-title {
          font-size: 1.5rem;
          color: #003366;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .feature-description {
          color: #5f6368;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        /* CTA Section */
        .cta-section {
          margin-top: 5rem;
          background: linear-gradient(135deg, #003366 0%, #00BCD4 100%);
          padding: 4rem 3rem;
          border-radius: 30px;
          text-align: center;
          color: white;
          box-shadow: 0 20px 60px rgba(0,188,212,0.3);
        }

        .cta-section h3 {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .cta-button {
          background: white;
          color: #003366;
          padding: 1.2rem 3rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .why-choose-us {
            padding: 60px 0;
          }

          .why-header h2 {
            font-size: 2.5rem;
          }

          .why-header p {
            font-size: 1.1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2rem;
          }

          .stat-item {
            border-right: none;
            border-bottom: 2px solid #e8eaed;
            padding: 1rem;
          }

          .stat-item:last-child {
            border-bottom: none;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .feature-card {
            padding: 2rem 1.5rem;
          }

          .cta-section {
            padding: 3rem 2rem;
          }

          .cta-section h3 {
            font-size: 2rem;
          }

          .cta-section p {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <section id="why-choose-us" className="why-choose-us">
        <div className="why-container">
          {/* Header */}
          <div className="why-header">
            <h2>Why Choose VSS?</h2>
            <p>We deliver excellence through innovation, expertise, and dedication to your success</p>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{ '--card-color': feature.color }}
              >
                <div className="feature-icon">
                  <i className={`bx ${feature.icon}`}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's build something amazing together. Contact us today for a free consultation.</p>
            <button className="cta-button" onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
