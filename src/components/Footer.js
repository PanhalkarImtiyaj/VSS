function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #003366 0%, #004d7a 50%, #003366 100%);
          color: white;
          padding: 5rem 0 0;
          margin-top: 6rem;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00BCD4, #003366, #00BCD4);
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-section h3 {
          font-size: 1.6rem;
          margin-bottom: 1.8rem;
          font-weight: 800;
          position: relative;
          padding-bottom: 1rem;
        }

        .footer-section h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #00BCD4;
        }

        .footer-about p {
          line-height: 1.9;
          opacity: 0.95;
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }

        .footer-logo {
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
        }

        .footer-logo img {
          height: 60px;
          width: auto;
          filter: brightness(0) invert(1);
          transition: all 0.3s;
        }

        .footer-logo img:hover {
          filter: brightness(0) invert(1) drop-shadow(0 0 10px rgba(0, 188, 212, 0.5));
          transform: scale(1.05);
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 1rem;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          opacity: 0.9;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.05rem;
        }

        .footer-links a i {
          color: #00BCD4;
          font-size: 1.1rem;
          transition: all 0.3s;
        }

        .footer-links a:hover {
          opacity: 1;
          color: #00BCD4;
          transform: translateX(8px);
        }

        .footer-links a:hover i {
          transform: scale(1.2);
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          opacity: 0.95;
          line-height: 1.8;
        }

        .footer-contact-item i {
          font-size: 1.4rem;
          color: #00BCD4;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .footer-contact-item a {
          color: white;
          text-decoration: none;
          transition: all 0.3s;
        }

        .footer-contact-item a:hover {
          color: #00BCD4;
        }

        .footer-address {
          font-style: normal;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .footer-social a {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.3rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
        }

        .footer-social a:hover {
          background: #00BCD4;
          transform: translateY(-8px) rotate(360deg);
          border-color: white;
          box-shadow: 0 8px 20px rgba(0, 188, 212, 0.4);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding: 2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom-left {
          opacity: 0.9;
          font-size: 1rem;
        }

        .footer-bottom-right {
          display: flex;
          gap: 2rem;
        }

        .footer-bottom-right a {
          color: white;
          text-decoration: none;
          opacity: 0.9;
          transition: all 0.3s;
          font-size: 0.95rem;
        }

        .footer-bottom-right a:hover {
          opacity: 1;
          color: #00BCD4;
        }

        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 188, 212, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          margin-top: 1rem;
          border: 1px solid rgba(0, 188, 212, 0.3);
        }

        .footer-badge i {
          color: #00BCD4;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 0;
            margin-top: 4rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .footer-section h3 {
            text-align: center;
          }

          .footer-section h3::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .footer-logo {
            justify-content: center;
          }

          .footer-about p {
            text-align: center;
          }

          .footer-links {
            text-align: center;
          }

          .footer-links a {
            justify-content: center;
          }

          .footer-contact-item {
            justify-content: center;
            text-align: left;
          }

          .footer-social {
            justify-content: center;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-right {
            flex-direction: column;
            gap: 1rem;
          }

          .footer-badge {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* About Section */}
            <div className="footer-section footer-about">
              <div className="footer-logo">
                <img src="/images/vss-logo.png" alt="VSS Software Solutions" />
              </div>
              <p>
                We are a leading software development company specializing in web development,
                mobile applications, cloud services, and IT consulting. Delivering innovative
                solutions that drive business growth and digital transformation.
              </p>
              <div className="footer-badge">
                <i className='bx bx-badge-check'></i>
                Trusted by 500+ Clients
              </div>
              <div className="footer-social">
                <a href="#" aria-label="Facebook" title="Facebook">
                  <i className='bx bxl-facebook'></i>
                </a>
                <a href="#" aria-label="LinkedIn" title="LinkedIn">
                  <i className='bx bxl-linkedin'></i>
                </a>
                <a href="#" aria-label="Twitter" title="Twitter">
                  <i className='bx bxl-twitter'></i>
                </a>
                <a href="#" aria-label="Instagram" title="Instagram">
                  <i className='bx bxl-instagram'></i>
                </a>
                <a href="#" aria-label="GitHub" title="GitHub">
                  <i className='bx bxl-github'></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/"><i className='bx bx-home-alt'></i> Home</a></li>
                <li><a href="/#about"><i className='bx bx-info-circle'></i> About Us</a></li>
                <li><a href="/#services"><i className='bx bx-briefcase'></i> Services</a></li>
                <li><a href="/career"><i className='bx bx-user-plus'></i> Careers</a></li>
                <li><a href="/#contact"><i className='bx bx-envelope'></i> Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3>Our Services</h3>
              <ul className="footer-links">
                <li><a href="/services/web-development"><i className='bx bx-code-alt'></i> Web Development</a></li>
                <li><a href="/services/mobile-apps"><i className='bx bx-mobile'></i> Mobile Apps</a></li>
                <li><a href="/services/cloud-services"><i className='bx bx-cloud'></i> Cloud Services</a></li>
                <li><a href="/services/consulting"><i className='bx bx-user-voice'></i> IT Consulting</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="footer-section">
              <h3>Contact Us</h3>
              <div className="footer-contact-item">
                <i className='bx bx-map'></i>
                <address className="footer-address">
                  Peth Vadgaon,<br />
                  Kolhapur, Maharashtra<br />
                  PIN: 416112, India
                </address>
              </div>
              <div className="footer-contact-item">
                <i className='bx bx-phone'></i>
                <div>
                  <a href="tel:+918850024342">+91 8850024342</a><br />
                  <a href="tel:+917517005494">+91 7517005494</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <i className='bx bx-envelope'></i>
                <a href="mailto:VssSoftwaresolutions@gmail.com">
                  VssSoftwaresolutions@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>&copy; {new Date().getFullYear()} VSS Software Solutions. All Rights Reserved.</p>
            </div>
            <div className="footer-bottom-right">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
