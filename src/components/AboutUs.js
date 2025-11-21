import React from 'react';

const AboutUs = () => {
  return (
    <>
      <style>{`
        .about-page {
          width: 100%;
          background: #f8f9fa;
          padding-top: 80px;
        }

        .hero-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 120px 20px 80px;
          text-align: center;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about-section {
          padding: 80px 20px;
          background: white;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 50px;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        .about-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #555;
        }

        .about-text h3 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .about-text p {
          margin-bottom: 20px;
        }

        .about-image {
          text-align: center;
        }

        .about-image img {
          max-width: 100%;
          border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .stats-section {
          background: #f8f9fa;
          padding: 80px 20px;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-top: 50px;
        }

        .stat-item {
          background: white;
          padding: 40px 20px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1.1rem;
          color: #666;
          font-weight: 500;
        }

        .values-section {
          padding: 80px 20px;
          background: white;
        }

        .values-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 50px;
        }

        .value-card {
          background: #f8f9fa;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .value-card:hover {
          border-color: #667eea;
          transform: translateY(-5px);
        }

        .value-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 2rem;
          color: white;
        }

        .value-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 15px;
        }

        .value-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }

        .team-section {
          background: #f8f9fa;
          padding: 80px 20px;
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .team-text {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto 50px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-top: 50px;
        }

        .team-member {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .team-member:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .member-avatar {
          width: 100px;
          height: 100px;
          margin: 0 auto 25px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .avatar-placeholder {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
        }

        .member-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .member-role {
          font-size: 1.1rem;
          color: #667eea;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .member-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }

        .cta-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 80px 20px;
          text-align: center;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .cta-description {
          font-size: 1.2rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .cta-button {
          display: inline-block;
          background: white;
          color: #667eea;
          padding: 15px 40px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 255, 255, 0.3);
          text-decoration: none;
          color: #5a67d8;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .section-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .cta-title {
            font-size: 2rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .team-member {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="about-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">About VSS Software</h1>
            <p className="hero-subtitle">
              We are a leading software development company dedicated to transforming businesses through innovative technology solutions and exceptional digital experiences.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-container">
            <h2 className="section-title">Who We Are</h2>
            <div className="about-content">
              <div className="about-text">
                <h3>Our Story</h3>
                <p>
                  Founded with a vision to bridge the gap between technology and business success, VSS Software has been at the forefront of digital innovation. We specialize in creating custom software solutions that drive growth and efficiency.
                </p>
                <p>
                  Our team of experienced developers, designers, and strategists work collaboratively to deliver exceptional results that exceed client expectations. We believe in building long-term partnerships with our clients.
                </p>
                <p>
                  From startups to enterprise-level organizations, we have successfully delivered hundreds of projects across various industries, helping businesses achieve their digital transformation goals.
                </p>
              </div>
              <div className="about-image">
                <img src="/images/about/team-working.jpg" alt="VSS Software Team" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <h2 className="section-title">Our Achievements</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="values-container">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3 className="value-title">Excellence</h3>
                <p className="value-description">
                  We strive for excellence in every project, ensuring the highest quality standards and attention to detail in all our deliverables.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Integrity</h3>
                <p className="value-description">
                  Honesty and transparency are at the core of our business relationships. We build trust through reliable communication and ethical practices.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                  We embrace cutting-edge technologies and creative solutions to solve complex business challenges and drive digital transformation.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <h3 className="value-title">Agility</h3>
                <p className="value-description">
                  Our agile approach ensures rapid development cycles, quick adaptability to changes, and faster time-to-market for your projects.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎨</div>
                <h3 className="value-title">Creativity</h3>
                <p className="value-description">
                  We combine technical expertise with creative thinking to deliver unique and engaging digital experiences that stand out.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌟</div>
                <h3 className="value-title">Customer Focus</h3>
                <p className="value-description">
                  Your success is our priority. We work closely with clients to understand their needs and deliver solutions that drive real business value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="team-container">
            <h2 className="section-title">Meet Our Expert Team</h2>
            <div className="team-text">
              <p>
                Our diverse team of talented professionals brings together expertise in software development, UI/UX design, data engineering, and digital strategy. We are passionate about technology and committed to delivering exceptional results.
              </p>
            </div>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">K</div>
                </div>
                <h3 className="member-name">Karuna</h3>
                <p className="member-role">Full Stack Developer</p>
                <p className="member-description">
                  Expert in both frontend and backend development with extensive experience in modern web technologies, frameworks, and database management.
                </p>
              </div>

              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">M</div>
                </div>
                <h3 className="member-name">Mubina</h3>
                <p className="member-role">Full Stack Developer</p>
                <p className="member-description">
                  Specialized in creating scalable web applications with expertise in API development, cloud services, and modern development practices.
                </p>
              </div>

              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">M</div>
                </div>
                <h3 className="member-name">Mansi</h3>
                <p className="member-role">Graphic Designer</p>
                <p className="member-description">
                  Creative designer focused on visual identity, UI/UX design, branding, and creating compelling graphics for digital platforms.
                </p>
              </div>

              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">P</div>
                </div>
                <h3 className="member-name">Priya</h3>
                <p className="member-role">Data Engineer</p>
                <p className="member-description">
                  Specialist in data architecture, analytics, machine learning, and building robust data pipelines for business intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">Ready to Work With Us?</h2>
            <p className="cta-description">
              Let's discuss your project and explore how VSS Software can help transform your business with innovative technology solutions.
            </p>
            <a href="#contact" className="cta-button">Get Started Today</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;