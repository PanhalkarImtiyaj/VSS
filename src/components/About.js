function About() {
  return (
    <>
      <style>{`
        .about {
          padding: 145px 0 100px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        
        .about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 300px;
          background: linear-gradient(135deg, #003366 0%, #00BCD4 100%);
          clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
          z-index: 0;
        }
        
        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }
        
        .about-hero {
          text-align: center;
          color: white;
          margin-bottom: 5rem;
          padding-top: 2rem;
        }
        
        .about-hero h1 {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1rem;
          letter-spacing: -1px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        
        .about-hero .tagline {
          font-size: 1.5rem;
          font-weight: 300;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .stats-section {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 5rem;
        }
        
        .stat-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
        }
        
        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 188, 212, 0.25);
          border-color: #00BCD4;
        }
        
        .stat-number {
          font-size: 3.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #00BCD4, #003366);
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
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-title h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #202124;
          margin-bottom: 0.5rem;
          position: relative;
          display: inline-block;
        }
        
        .section-title h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(135deg, #00BCD4, #003366);
          border-radius: 2px;
        }
        
        .section-title p {
          font-size: 1.2rem;
          color: #5f6368;
          max-width: 600px;
          margin: 1.5rem auto 0;
        }
        
        .story-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 5rem;
          padding: 4rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e8f0fe 100%);
          border-radius: 24px;
        }
        
        .story-content h3 {
          font-size: 2.5rem;
          color: #202124;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }
        
        .story-content p {
          font-size: 1.15rem;
          color: #5f6368;
          line-height: 1.9;
          margin-bottom: 1.5rem;
        }
        
        .story-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .highlight-badge {
          padding: 0.8rem 1.5rem;
          background: white;
          border-radius: 25px;
          font-weight: 600;
          color: #00BCD4;
          box-shadow: 0 4px 15px rgba(0, 188, 212, 0.15);
          font-size: 0.95rem;
        }
        
        .story-image {
          position: relative;
        }
        
        .story-image::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: 20px;
          bottom: 20px;
          background: linear-gradient(135deg, #00BCD4, #003366);
          border-radius: 20px;
          z-index: 0;
          opacity: 0.1;
        }
        
        .story-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          position: relative;
          z-index: 1;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        
        .mission-vision-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 5rem;
        }
        
        .mv-card {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }
        
        .mv-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #00BCD4, #003366);
        }
        
        .mv-card h3 {
          font-size: 2rem;
          color: #202124;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 800;
        }
        
        .mv-card h3 i {
          font-size: 2.5rem;
          color: #00BCD4;
        }
        
        .mv-card ul {
          list-style: none;
          padding: 0;
        }
        
        .mv-card ul li {
          font-size: 1.1rem;
          color: #5f6368;
          margin-bottom: 1.2rem;
          padding-left: 2.5rem;
          position: relative;
          line-height: 1.6;
        }
        
        .mv-card ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #00BCD4, #003366);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mv-card ul li::after {
          content: '✓';
          position: absolute;
          left: 6px;
          top: 4px;
          color: white;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .services-showcase {
          background: linear-gradient(135deg, #00BCD4 0%, #003366 100%);
          padding: 5rem 3rem;
          border-radius: 24px;
          margin-bottom: 5rem;
        }
        
        .services-showcase h3 {
          font-size: 3rem;
          color: white;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 800;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .service-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s;
          cursor: pointer;
        }
        
        .service-card:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-5px);
        }
        
        .service-card i {
          font-size: 3rem;
          color: white;
          margin-bottom: 1rem;
        }
        
        .service-card h4 {
          font-size: 1.3rem;
          color: white;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .service-card p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }
        
        .why-choose-section {
          margin-bottom: 5rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        
        .feature-item {
          text-align: center;
          padding: 2.5rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s;
        }
        
        .feature-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 188, 212, 0.2);
        }
        
        .feature-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #00BCD4, #003366);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .feature-icon i {
          font-size: 2.5rem;
          color: white;
        }
        
        .feature-item h4 {
          font-size: 1.4rem;
          color: #202124;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }
        
        .feature-item p {
          font-size: 1rem;
          color: #5f6368;
          line-height: 1.6;
        }
        
        .values-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e8f0fe 100%);
          padding: 5rem 3rem;
          border-radius: 24px;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        
        .value-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          transition: all 0.3s;
        }
        
        .value-card:hover {
          box-shadow: 0 15px 50px rgba(0, 188, 212, 0.2);
        }
        
        .value-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #00BCD4, #003366);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
        }
        
        .value-icon i {
          font-size: 2rem;
          color: white;
          transform: rotate(-45deg);
        }
        
        .value-card h4 {
          font-size: 1.3rem;
          color: #202124;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }
        
        .value-card p {
          font-size: 0.95rem;
          color: #5f6368;
        }
        
        @media (max-width: 1024px) {
          .stats-section {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.5rem;
          }
          
          .about-hero .tagline {
            font-size: 1.2rem;
          }
          
          .stats-section {
            grid-template-columns: 1fr;
          }
          
          .story-section {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          
          .mission-vision-section {
            grid-template-columns: 1fr;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      <section id="about" className="about">
        <div className="about-container">
          {/* Hero Section */}
          <div className="about-hero">
            <h1>About VSS Software Solutions</h1>
            <p className="tagline">
              Making technology smart, powerful, and accessible for everyone
            </p>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Experts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>

          {/* Story Section */}
          <div className="story-section">
            <div className="story-content">
              <h3>Who We Are</h3>
              <p>
                We are a team of passionate developers, designers, and problem-solvers who believe in creating meaningful digital solutions. Founded with a vision to empower businesses through technology, VSS Software Solutions has grown into a trusted partner for companies seeking digital transformation.
              </p>
              <p>
                We specialize in building custom software, web applications, mobile apps, and business automation tools that drive real results. Our approach combines cutting-edge technology with deep industry expertise to deliver solutions that not only meet but exceed expectations.
              </p>
              <div className="story-highlights">
                <span className="highlight-badge">Innovation-Driven</span>
                <span className="highlight-badge">Client-Focused</span>
                <span className="highlight-badge">Result-Oriented</span>
                <span className="highlight-badge">Future-Ready</span>
              </div>
            </div>
            <div className="story-image">
              <img src="/images/bg.png" alt="VSS Team" />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mission-vision-section">
            <div className="mv-card">
              <h3>
                <i className='bx bx-target-lock'></i>
                Our Mission
              </h3>
              <ul>
                <li>Empower businesses through digital innovation and cutting-edge technology</li>
                <li>Deliver high-quality, scalable, and secure software solutions</li>
                <li>Solve real-world problems using smart and efficient technology</li>
                <li>Foster long-term partnerships built on trust and excellence</li>
              </ul>
            </div>

            <div className="mv-card">
              <h3>
                <i className='bx bx-rocket'></i>
                Our Vision
              </h3>
              <ul>
                <li>To become one of India's leading technology companies</li>
                <li>Enable businesses of all sizes to achieve digital transformation</li>
                <li>Create innovative solutions that shape the future of technology</li>
                <li>Build a culture of excellence, innovation, and continuous learning</li>
              </ul>
            </div>
          </div>

          {/* Services Showcase */}
          <div className="services-showcase">
            <h3>What We Do</h3>
            <div className="services-grid">
              <div className="service-card">
                <i className='bx bx-code-alt'></i>
                <h4>Custom Web Development</h4>
                <p>Responsive, modern websites built with latest technologies</p>
              </div>
              <div className="service-card">
                <i className='bx bx-mobile'></i>
                <h4>Mobile App Development</h4>
                <p>Native & cross-platform apps for Android & iOS</p>
              </div>
              <div className="service-card">
                <i className='bx bx-data'></i>
                <h4>ERP & CRM Solutions</h4>
                <p>Streamline your business operations efficiently</p>
              </div>
              <div className="service-card">
                <i className='bx bx-cloud'></i>
                <h4>Cloud Applications</h4>
                <p>Scalable cloud-based solutions for modern businesses</p>
              </div>
              <div className="service-card">
                <i className='bx bx-cart'></i>
                <h4>E-Commerce Development</h4>
                <p>Complete online store solutions with payment integration</p>
              </div>
              <div className="service-card">
                <i className='bx bx-plug'></i>
                <h4>API Development</h4>
                <p>Secure and efficient API integrations</p>
              </div>
              <div className="service-card">
                <i className='bx bx-palette'></i>
                <h4>UI/UX Design</h4>
                <p>Beautiful, user-friendly interface designs</p>
              </div>
              <div className="service-card">
                <i className='bx bx-support'></i>
                <h4>Technical Support</h4>
                <p>Round-the-clock maintenance and support</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="why-choose-section">
            <div className="section-title">
              <h2>Why Choose Us?</h2>
              <p>We deliver excellence through expertise, dedication, and innovation</p>
            </div>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className='bx bx-user-check'></i>
                </div>
                <h4>Experienced Team</h4>
                <p>Professional developers with years of industry experience</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className='bx bx-rocket'></i>
                </div>
                <h4>Fast Delivery</h4>
                <p>High-quality work delivered on time, every time</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className='bx bx-show'></i>
                </div>
                <h4>100% Transparency</h4>
                <p>Clear communication and complete project visibility</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className='bx bx-heart'></i>
                </div>
                <h4>Client-First Approach</h4>
                <p>Your success is our top priority</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className='bx bx-time'></i>
                </div>
                <h4>Long-term Support</h4>
                <p>We're here for you beyond project completion</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className='bx bx-dollar'></i>
                </div>
                <h4>Affordable Pricing</h4>
                <p>Premium quality at competitive prices</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <div className="section-title">
              <h2>Our Core Values</h2>
              <p>Principles that guide everything we do</p>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className='bx bx-bulb'></i>
                </div>
                <h4>Innovation</h4>
                <p>New ideas in every project we undertake</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className='bx bx-medal'></i>
                </div>
                <h4>Quality</h4>
                <p>Premium work without any compromise</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className='bx bx-shield-alt-2'></i>
                </div>
                <h4>Trust</h4>
                <p>Clear and honest communication always</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className='bx bx-trending-up'></i>
                </div>
                <h4>Growth</h4>
                <p>Your success is our success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
