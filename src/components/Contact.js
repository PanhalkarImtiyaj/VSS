function Contact() {
  return (
    <>
      <style>{`
        .contact {
          padding: 145px 2rem 100px;
          background: #f8f9fa;
        }
        
        .contact-container {
          max-width: 100%;
          padding: 0 4rem;
          margin: 0 auto;
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .contact-title {
          font-size: 3rem;
          font-weight: 800;
          color: #202124;
          margin-bottom: 1rem;
        }
        
        .contact-subtitle {
          font-size: 1.2rem;
          color: #5f6368;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: start;
          gap: 1rem;
        }
        
        .contact-icon {
          font-size: 2rem;
          background: #e8f0fe;
          padding: 1rem;
          border-radius: 12px;
          color: #1a73e8;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .contact-item-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #202124;
          margin-bottom: 0.3rem;
        }
        
        .contact-item-content p {
          color: #5f6368;
          font-size: 0.95rem;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-label {
          font-weight: 600;
          color: #202124;
          font-size: 0.95rem;
        }
        
        .form-input,
        .form-textarea {
          padding: 0.9rem;
          border: 2px solid #e8eaed;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s;
          font-family: inherit;
        }
        
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #1a73e8;
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .form-submit {
          background: linear-gradient(135deg, #1a73e8 0%, #4285f4 100%);
          color: white;
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
        }
        
        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(26, 115, 232, 0.4);
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
          
          .contact-title {
            font-size: 2rem;
          }
        }
      `}</style>
      
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle">We'd love to hear from you. Let's talk about your project.</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className='bx bx-envelope'></i>
                </div>
                <div className="contact-item-content">
                  <h4>Email</h4>
                  <p>sssoftwaresolutions@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className='bx bx-phone'></i>
                </div>
                <div className="contact-item-content">
                  <h4>Phone</h4>
                  <p>+91 7748195959 / +91 8850024342 / +91 7517005494</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className='bx bx-map'></i>
                </div>
                <div className="contact-item-content">
                  <h4>Office</h4>
                  <p>123 Business Street<br/>San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-input" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
