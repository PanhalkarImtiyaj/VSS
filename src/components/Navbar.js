import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleContactClick = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    // Check if we're already on home page
    if (window.location.pathname === '/') {
      // Just scroll to contact section
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/')
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'bx-home-alt', hasDropdown: false },
    { id: 'about', label: 'About', icon: 'bx-info-circle', hasDropdown: false },
    {
      id: 'services',
      label: 'Services',
      icon: 'bx-briefcase',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Development', desc: 'Custom web solutions', icon: 'bx-code-alt', path: '/services/web-development' },
        { name: 'Mobile Apps', desc: 'iOS & Android apps', icon: 'bx-mobile', path: '/services/mobile-apps' },
        { name: 'Cloud Services', desc: 'Scalable infrastructure', icon: 'bx-cloud', path: '/services/cloud-services' },
        { name: 'Consulting', desc: 'Expert guidance', icon: 'bx-user-voice', path: '/services/consulting' }
      ]
    },
    { id: 'career', label: 'Career', icon: 'bx-briefcase-alt-2', hasDropdown: false }
  ]

  return (
    <>
      <style>{`
        .top-bar {
          background: #003366;
          color: white;
          padding: 0.6rem 0;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1001;
          font-size: 0.9rem;
        }
        
        .top-bar-container {
          max-width: 100%;
          padding: 0 3rem;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .top-bar-link {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 0.3s;
          font-size: 0.95rem;
        }
        
        .top-bar-link:hover {
          color: #00BCD4;
        }
        
        .top-bar-link i {
          font-size: 1.1rem;
        }
        
        .top-bar-divider {
          color: #7f8c8d;
          margin: 0 0.3rem;
        }
        
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .social-icon {
          color: white;
          font-size: 1.1rem;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        
        .social-icon:hover {
          color: #00BCD4;
          background: rgba(52, 152, 219, 0.1);
        }
        
        .navbar {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          padding: 0.5rem 0;
          position: fixed;
          width: 100%;
          top: 45px;
          left: 0;
          z-index: 1000;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          min-height: 70px;
          display: flex;
          align-items: center;
        }
        
        .navbar-container {
          max-width: 100%;
          padding: 0 3rem;
          margin: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .navbar-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.3s;
          order: 1;
        }
        
        .navbar-logo:hover {
          transform: scale(1.05);
        }
        
        .navbar-logo img {
          height: 60px;
          width: auto;
          object-fit: contain;
          max-width: 200px;
        }
        
        .hamburger {
          order: 1;
        }
        
        .navbar-center {
          order: 2;
        }
        
        .navbar-right {
          order: 3;
        }
        
        .navbar-center {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          margin: 0 2rem;
        }
        
        .navbar-menu {
          display: flex;
          list-style: none;
          gap: 2.5rem;
          margin: 0;
          padding: 0;
          align-items: center;
          justify-content: center;
        }
        
        .navbar-item {
          position: relative;
        }
        
        .navbar-link {
          color: #003366;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.15rem;
          transition: all 0.3s;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 0;
        }
        
        .navbar-link:hover {
          color: #00BCD4;
        }
        
        .menu-icon {
          font-size: 1.4rem;
        }
        
        .dropdown-arrow {
          font-size: 0.9rem;
          transition: transform 0.3s;
          color: #7f8c8d;
        }
        
        .navbar-item:hover .dropdown-arrow {
          transform: rotate(180deg);
          color: #00BCD4;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: -20px;
          background: white;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          border-radius: 12px;
          padding: 0.8rem 0;
          min-width: 280px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 0.8rem;
          border: 1px solid rgba(0,0,0,0.05);
        }
        
        .navbar-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .dropdown-item {
          padding: 1rem 1.5rem;
          color: #003366;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.2s;
          cursor: pointer;
        }
        
        .dropdown-item:hover {
          background: #ecf0f1;
          padding-left: 1.8rem;
        }
        
        .dropdown-item-icon {
          font-size: 1.5rem;
          color: #00BCD4;
        }
        
        .dropdown-item-content {
          flex: 1;
        }
        
        .dropdown-item-name {
          font-weight: 600;
          font-size: 1rem;
          color: #003366;
          margin-bottom: 0.2rem;
        }
        
        .dropdown-item-desc {
          font-size: 0.85rem;
          color: #7f8c8d;
        }
        
        .dropdown-item:hover .dropdown-item-name {
          color: #00BCD4;
        }
        
        .dropdown-item:hover .dropdown-item-icon {
          transform: scale(1.1);
        }
        
        .navbar-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }
        
        .contact-btn {
          
          color: #003366;
          padding: 1rem 2.5rem;
          border:2px solid  rgba(44, 62, 80, 0.3);
          border-radius: 8px ;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s;
          // box-shadow: 0 3px 10px rgba(44, 62, 80, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(44, 62, 80, 0.4);
          background: #004d7a;
        }
        
        .contact-btn i {
          font-size: 1.3rem;
        }

        .mobile-contact-item {
          display: none;
        }
        
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 0.4rem;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }
        
        .hamburger-line {
          width: 25px;
          height: 3px;
          background: #003366;
          border-radius: 3px;
          transition: all 0.3s;
        }
        
        .hamburger.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(9px, 9px);
        }
        
        .hamburger.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        @media (max-width: 1400px) {
          .navbar-container {
            padding: 0 2rem;
          }
          
          .top-bar-container {
            padding: 0 2rem;
          }
          
          .navbar-center {
            margin: 0 1.5rem;
          }
          
          .navbar-menu {
            gap: 2rem;
          }
        }
        
        @media (max-width: 1200px) {
          .navbar-center {
            margin: 0 1rem;
          }
          
          .navbar-menu {
            gap: 1.8rem;
          }
          
          .navbar-link {
            font-size: 0.95rem;
          }
          
          .contact-btn {
            padding: 0.7rem 1.3rem;
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 1024px) {
          .navbar-container {
            padding: 0 1.5rem;
          }
          
          .navbar-center {
            margin: 0 0.8rem;
          }
          
          .navbar-menu {
            gap: 1.5rem;
          }
          
          .navbar-link {
            font-size: 0.9rem;
          }
          
          .menu-icon {
            font-size: 1.1rem;
          }
          
          .contact-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 900px) {
          .navbar-menu {
            gap: 1.2rem;
          }
          
          .navbar-link {
            font-size: 0.85rem;
          }
          
          .contact-btn {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }
        }
        
        @media (max-width: 768px) {
          .top-bar {
            display: none;
          }
          
          .navbar {
            padding: 0.6rem 0;
            min-height: 60px;
            top: 0;
          }
          
          .navbar-container {
            padding: 0 1rem;
            justify-content: space-between;
          }
          
          .navbar-logo {
            order: 1;
            grid-column: 1;
          }
          
          .navbar-logo img {
            height: 45px;
          }
          
          .hamburger {
            display: flex;
            padding: 0.6rem;
            order: 3;
          }
          
          .hamburger-line {
            width: 28px;
            height: 3px;
          }
          
          .navbar-center {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem 1rem 0.5rem;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            transform: translateX(-100%);
            transition: transform 0.3s;
            max-height: calc(100vh - 60px);
            overflow-y: auto;
            margin: 0;
          }
          
          .navbar-center.mobile-open {
            transform: translateX(0);
          }
          
          .navbar-menu {
            flex-direction: column;
            gap: 0;
            width: 100%;
          }
          
          .navbar-item {
            width: 100%;
            border-bottom: 1px solid #ecf0f1;
          }
          
          .navbar-link {
            padding: 0.9rem 0.8rem;
            font-size: 1rem;
            width: 100%;
          }
          
          .menu-icon {
            font-size: 1.2rem;
          }
          
          .dropdown-arrow {
            font-size: 0.85rem;
          }
          
          .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            box-shadow: none;
            border-radius: 0;
            margin-top: 0;
            padding: 0;
            border: none;
            background: #f8f9fa;
            display: none;
          }
          
          .navbar-item.dropdown-open .dropdown-menu {
            display: block;
          }
          
          .dropdown-item {
            padding: 0.9rem 1.5rem;
          }
          
          .dropdown-item-icon {
            font-size: 1.4rem;
          }
          
          .dropdown-item-name {
            font-size: 0.95rem;
          }
          
          .dropdown-item-desc {
            font-size: 0.8rem;
          }
          
          .navbar-right {
            display: none;
          }
          

          
          .mobile-contact-item {
            display: block;
            border-top: 3px solid #003366;
            background: linear-gradient(135deg, #003366 0%, #004d7a 100%);
            margin-top: 0.5rem;
          }
          
          .mobile-contact-item .navbar-link {
            color: white;
            font-weight: 700;
            font-size: 1.1rem;
            padding: 1rem 0.8rem;
            background: transparent;
          }
          
          .mobile-contact-item .menu-icon {
            font-size: 1.3rem;
          }
          
          .mobile-contact-item:hover {
            background: linear-gradient(135deg, #004d7a 0%, #003366 100%);
          }
          
          .contact-btn {
            width: 100%;
            justify-content: center;
            padding: 0.9rem;
            font-size: 1rem;
          }
          
          .contact-btn i {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 480px) {
          .navbar-logo img {
            height: 40px;
          }
          
          .hamburger {
            padding: 0.5rem;
          }
          
          .hamburger-line {
            width: 26px;
            height: 3px;
          }
          
          .navbar-link {
            font-size: 0.95rem;
            padding: 0.85rem 0.7rem;
          }
          
          .dropdown-item {
            padding: 0.8rem 1.2rem;
          }
          
          .dropdown-item-name {
            font-size: 0.9rem;
          }
          
          .dropdown-item-desc {
            font-size: 0.75rem;
          }
          
          .mobile-contact-item .navbar-link {
            font-size: 1.05rem;
            padding: 0.9rem 0.7rem;
          }
          
          .mobile-contact-item .menu-icon {
            font-size: 1.25rem;
          }
        }
      `}</style>

      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+918850024342" className="top-bar-link">
              <i className='bx bx-phone'></i>
              +91 8850024342
            </a>
            <span className="top-bar-divider">/</span>
            <a href="tel:+917517005494" className="top-bar-link">
              <i className='bx bx-phone'></i>
              +91 7517005494
            </a>
            <span className="top-bar-divider">/</span>
            <a href="mailto:VssSoftwaresolutions@gmail.com" className="top-bar-link">
              <i className='bx bx-envelope'></i>
              VssSoftwaresolutions@gmail.com
            </a>
          </div>
          <div className="top-bar-right">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className='bx bxl-facebook'></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className='bx bxl-twitter'></i>
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/images/vss-logo.png" alt="VSS Logo" />
          </Link>

          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>

          <div className={`navbar-center ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="navbar-menu">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`navbar-item ${openDropdown === item.id ? 'dropdown-open' : ''}`}
                  onMouseEnter={() => window.innerWidth > 768 && item.hasDropdown && setOpenDropdown(item.id)}
                  onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
                >
                  {item.id === 'career' ? (
                    <Link
                      to="/career"
                      className="navbar-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <i className={`bx ${item.icon} menu-icon`}></i>
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.id === 'home' ? '/' : `/#${item.id}`}
                      className="navbar-link"
                      onClick={(e) => {
                        if (item.hasDropdown && window.innerWidth <= 768) {
                          e.preventDefault()
                          setOpenDropdown(openDropdown === item.id ? null : item.id)
                        } else {
                          setMobileMenuOpen(false)
                        }
                      }}
                    >
                      <i className={`bx ${item.icon} menu-icon`}></i>
                      {item.label}
                      {item.hasDropdown && <i className='bx bx-chevron-down dropdown-arrow'></i>}
                    </a>
                  )}

                  {item.hasDropdown && (
                    <div className="dropdown-menu">
                      {item.dropdownItems.map((dropItem, index) => (
                        <Link
                          key={index}
                          to={dropItem.path}
                          className="dropdown-item"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <i className={`bx ${dropItem.icon} dropdown-item-icon`}></i>
                          <div className="dropdown-item-content">
                            <div className="dropdown-item-name">{dropItem.name}</div>
                            <div className="dropdown-item-desc">{dropItem.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}

              <li className="navbar-item mobile-contact-item">
                <a
                  href="#contact"
                  className="navbar-link"
                  onClick={handleContactClick}
                >
                  <i className='bx bx-envelope menu-icon'></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            <a
              href="#contact"
              className="contact-btn"
              onClick={handleContactClick}
            >
              <i className='bx bx-envelope'></i>
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
