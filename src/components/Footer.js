function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #202124;
          color: white;
          padding: 4rem 2rem 2rem;
        }
        
        .footer-container {
          max-width: 100%;
          padding: 0 4rem;
          margin: 0 auto;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-brand h3 {
          font-size: 1.8rem;
          color: #4285f4;
          margin-bottom: 1rem;
        }
        
        .footer-brand p {
          color: #9aa0a6;
          line-height: 1.6;
        }
        
        .footer-section h4 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links a {
          color: #9aa0a6;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-links a:hover {
          color: #4285f4;
        }
        
        .footer-bottom {
          border-top: 1px solid #3c4043;
          padding-top: 2rem;
          text-align: center;
          color: #9aa0a6;
        }
      `}</style>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/images/vss-logo.png" alt="VSS Logo" style={{height: '100px', marginBottom: '1rem', maxWidth: '250px', objectFit: 'contain'}} />
              <p>Empowering businesses with innovative solutions for a digital future.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#security">Security</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#blog">Blog</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 VSS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
