function Features() {
  const features = [
    {
      icon: 'bx-bolt',
      title: 'Lightning Fast',
      description: 'Optimized performance that delivers results in milliseconds, not seconds.'
    },
    {
      icon: 'bx-lock-alt',
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with SOC 2, GDPR, and ISO certifications.'
    },
    {
      icon: 'bx-plug',
      title: 'Easy Integration',
      description: 'Seamlessly connect with your existing tools and workflows.'
    },
    {
      icon: 'bx-bar-chart-alt-2',
      title: 'Advanced Analytics',
      description: 'Real-time insights and reporting to make data-driven decisions.'
    },
    {
      icon: 'bx-group',
      title: 'Collaboration Tools',
      description: 'Work together efficiently with built-in team collaboration features.'
    },
    {
      icon: 'bx-globe',
      title: 'Global Scale',
      description: 'Reliable infrastructure that scales with your business worldwide.'
    }
  ]

  return (
    <>
      <style>{`
        .features {
          padding: 145px 2rem 100px;
          background: #f8f9fa;
        }
        
        .features-container {
          max-width: 100%;
          padding: 0 4rem;
          margin: 0 auto;
        }
        
        .features-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .features-badge {
          display: inline-block;
          background: #e8f0fe;
          color: #1a73e8;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .features-title {
          font-size: 3rem;
          font-weight: 800;
          color: #202124;
          margin-bottom: 1rem;
        }
        
        .features-subtitle {
          font-size: 1.2rem;
          color: #5f6368;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: all 0.3s;
          border: 1px solid rgba(0,0,0,0.05);
        }
        
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        }
        
        .feature-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          display: block;
          color: #1a73e8;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #202124;
          margin-bottom: 1rem;
        }
        
        .feature-description {
          font-size: 1rem;
          color: #5f6368;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .features-title {
            font-size: 2rem;
          }
        }
      `}</style>
      
      <section id="product" className="features">
        <div className="features-container">
          <div className="features-header">
            <span className="features-badge">FEATURES</span>
            <h2 className="features-title">Everything You Need to Succeed</h2>
            <p className="features-subtitle">
              Powerful features designed to help your business grow faster and smarter
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <i className={`bx ${feature.icon} feature-icon`}></i>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
