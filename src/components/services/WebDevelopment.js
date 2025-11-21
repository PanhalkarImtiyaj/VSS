function WebDevelopment() {
  const services = [
    {
      icon: 'bx-shopping-bag',
      title: 'E-Commerce Solutions',
      description: 'Enterprise-grade online stores with advanced features including multi-currency support, real-time inventory, automated order processing, and comprehensive analytics dashboard.',
      features: ['Secure Payment Gateway', 'Inventory Management', 'Multi-vendor Support', 'Analytics Dashboard']
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Responsive Web Design',
      description: 'Pixel-perfect, mobile-first designs optimized for all devices. Lightning-fast loading times with exceptional user experience across desktop, tablet, and mobile platforms.',
      features: ['Mobile-First Approach', 'Cross-Browser Testing', 'Performance Optimized', 'Accessibility Compliant']
    },
    {
      icon: 'bx-code-block',
      title: 'Custom Web Applications',
      description: 'Tailored enterprise solutions with microservices architecture, RESTful APIs, real-time data processing, and seamless third-party integrations for complex business workflows.',
      features: ['Microservices Architecture', 'RESTful API Development', 'Real-time Processing', 'System Integration']
    },
    {
      icon: 'bx-data',
      title: 'CMS Development',
      description: 'Powerful content management platforms with intuitive interfaces, role-based access control, multi-language support, and advanced SEO capabilities for maximum visibility.',
      features: ['Custom CMS Solutions', 'WordPress Development', 'Headless CMS', 'SEO Optimization']
    },
    {
      icon: 'bx-rocket',
      title: 'Progressive Web Apps',
      description: 'Next-generation web applications that combine the best of web and mobile apps. Offline functionality, push notifications, and native app-like performance.',
      features: ['Offline Capability', 'Push Notifications', 'App Shell Architecture', 'Service Workers']
    },
    {
      icon: 'bx-line-chart',
      title: 'Web Analytics & SEO',
      description: 'Comprehensive SEO strategies and analytics implementation to boost organic traffic, improve search rankings, and maximize conversion rates with data-driven insights.',
      features: ['Technical SEO Audit', 'Google Analytics Setup', 'Conversion Optimization', 'Performance Tracking']
    }
  ]

  const technologies = [
    { name: 'React', icon: 'bxl-react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'bxl-nodejs', color: '#339933' },
    { name: 'Angular', icon: 'bxl-angular', color: '#DD0031' },
    { name: 'Vue.js', icon: 'bxl-vuejs', color: '#4FC08D' },
    { name: 'Python', icon: 'bxl-python', color: '#3776AB' },
    { name: 'PHP', icon: 'bxl-php', color: '#777BB4' },
    { name: 'MongoDB', icon: 'bxl-mongodb', color: '#47A248' },
    { name: 'PostgreSQL', icon: 'bxl-postgresql', color: '#336791' },
    { name: 'JavaScript', icon: 'bxl-javascript', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'bxl-typescript', color: '#3178C6' },
    { name: 'Docker', icon: 'bxl-docker', color: '#2496ED' },
    { name: 'AWS', icon: 'bxl-aws', color: '#FF9900' }
  ]

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: 'bx-check-circle' },
    { number: '98%', label: 'Client Satisfaction', icon: 'bx-happy' },
    { number: '50+', label: 'Expert Developers', icon: 'bx-group' },
    { number: '24/7', label: 'Support Available', icon: 'bx-support' }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'In-depth analysis of your business objectives, target audience, market positioning, and competitive landscape. We create a comprehensive roadmap aligned with your goals.',
      icon: 'bx-search-alt'
    },
    {
      step: '02',
      title: 'UX/UI Design',
      description: 'User-centric design process including wireframing, prototyping, and visual design. We create intuitive interfaces that enhance engagement and conversion.',
      icon: 'bx-palette'
    },
    {
      step: '03',
      title: 'Agile Development',
      description: 'Iterative development using agile methodology with regular sprints, code reviews, and continuous integration. Clean, maintainable code following industry best practices.',
      icon: 'bx-code-alt'
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Comprehensive testing including unit tests, integration tests, performance testing, security audits, and cross-browser compatibility verification.',
      icon: 'bx-bug'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Seamless deployment with zero downtime, SSL configuration, CDN setup, performance optimization, and comprehensive monitoring implementation.',
      icon: 'bx-rocket'
    },
    {
      step: '06',
      title: 'Ongoing Support',
      description: 'Continuous monitoring, regular updates, security patches, performance optimization, and dedicated technical support to ensure peak performance.',
      icon: 'bx-support'
    }
  ]

  const benefits = [
    { icon: 'bx-trending-up', title: 'Increased ROI', description: 'Data-driven solutions designed to maximize your return on investment and accelerate business growth' },
    { icon: 'bx-shield-alt-2', title: 'Enterprise Security', description: 'Bank-level security protocols, SSL encryption, and regular security audits to protect your data' },
    { icon: 'bx-time-five', title: 'Faster Delivery', description: 'Agile methodology and experienced team ensure faster time-to-market without compromising quality' },
    { icon: 'bx-infinite', title: 'Scalable Architecture', description: 'Future-proof solutions built to scale seamlessly as your business grows and evolves' }
  ]

  const features = [
    { icon: 'bx-code-curly', title: 'Clean Code', text: 'Well-documented, maintainable code' },
    { icon: 'bx-mobile', title: 'Mobile First', text: 'Optimized for mobile devices' },
    { icon: 'bx-bolt', title: 'Fast Performance', text: 'Lightning-fast load times' },
    { icon: 'bx-lock-alt', title: 'Secure', text: 'Industry-standard security' },
    { icon: 'bx-search', title: 'SEO Ready', text: 'Search engine optimized' },
    { icon: 'bx-refresh', title: 'Maintainable', text: 'Easy to update and scale' }
  ]

  return (
    <>
      <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                .web-dev-page {
                    padding: 100px 0 0;
                    background: #f5f7fa;
                    min-height: 100vh;
                    overflow-x: hidden;
                }
                
                .web-dev-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 32px 2rem;
                }
                
                /* Animations */
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.15); opacity: 0.8; }
                }
                
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                
                @keyframes slideInFromLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideInFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes bounceIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.3);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.05);
                    }
                    70% {
                        transform: scale(0.9);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                
                /* Hero Section */
                .hero-section {
                    background: linear-gradient(135deg, #003366 0%, #004d7a 50%, #00BCD4 100%);
                    padding: 6rem 3rem;
                    border-radius: 30px;
                    color: white;
                    position: relative;
                    overflow: hidden;
                    margin-bottom: 6rem;
                    box-shadow: 0 20px 60px rgba(0,51,102,0.4);
                    animation: fadeInDown 0.8s ease-out;
                }
                
                .hero-section::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(0,188,212,0.2) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: pulse 4s ease-in-out infinite;
                }
                
                .hero-section::after {
                    content: '';
                    position: absolute;
                    bottom: -30%;
                    left: -10%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 6s ease-in-out infinite;
                }
                
                .hero-content {
                    max-width: 900px;
                    position: relative;
                    z-index: 1;
                }
                
                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.15);
                    padding: 0.7rem 1.8rem;
                    border-radius: 50px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    margin-bottom: 2rem;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.2);
                    animation: fadeInLeft 1s ease-out 0.2s both;
                }
                
                .hero-title {
                    font-size: 4.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                    letter-spacing: -1px;
                    animation: fadeInUp 1s ease-out 0.4s both;
                }
                
                .hero-subtitle {
                    font-size: 1.4rem;
                    opacity: 0.95;
                    line-height: 1.8;
                    margin-bottom: 3rem;
                    font-weight: 300;
                    animation: fadeInUp 1s ease-out 0.6s both;
                }
                
                .hero-buttons {
                    display: flex;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                    animation: fadeInUp 1s ease-out 0.8s both;
                }
                
                .hero-btn {
                    padding: 1.2rem 3rem;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.7rem;
                    position: relative;
                    overflow: hidden;
                }
                
                .hero-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s;
                }
                
                .hero-btn:hover::before {
                    left: 100%;
                }
                
                .hero-btn-primary {
                    background: white;
                    color: #003366;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                }
                
                .hero-btn-primary:hover {
                    transform: translateY(-5px) scale(1.05);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
                }
                
                .hero-btn-secondary {
                    background: transparent;
                    color: white;
                    border: 2px solid white;
                }
                
                .hero-btn-secondary:hover {
                    background: white;
                    color: #003366;
                    transform: translateY(-5px) scale(1.05);
                }
                
                /* Stats Section */
                .stats-section {
                    margin-bottom: 6rem;
                }
                
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2.5rem;
                }
                
                .stat-card {
                    background: white;
                    padding: 3rem 2rem;
                    border-radius: 24px;
                    text-align: center;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    animation: scaleIn 0.6s ease-out both;
                }
                
                .stat-card:nth-child(1) { animation-delay: 0.1s; }
                .stat-card:nth-child(2) { animation-delay: 0.2s; }
                .stat-card:nth-child(3) { animation-delay: 0.3s; }
                .stat-card:nth-child(4) { animation-delay: 0.4s; }
                
                .stat-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(90deg, #003366, #00BCD4);
                }
                
                .stat-card:hover {
                    transform: translateY(-15px) scale(1.05);
                    box-shadow: 0 20px 60px rgba(0,188,212,0.2);
                }
                
                .stat-icon {
                    font-size: 3.5rem;
                    color: #00BCD4;
                    margin-bottom: 1.5rem;
                    animation: bounceIn 0.8s ease-out;
                }
                
                .stat-card:hover .stat-icon {
                    animation: rotate 0.6s ease-in-out;
                }
                
                .stat-number {
                    font-size: 3.5rem;
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
                
                /* Section Headers */
                .section-header {
                    text-align: center;
                    margin-bottom: 5rem;
                    animation: fadeInUp 0.8s ease-out;
                }
                
                .section-badge {
                    display: inline-block;
                    background: linear-gradient(135deg, #e8f4f8, #d4f1f9);
                    color: #003366;
                    padding: 0.6rem 1.8rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    animation: fadeInDown 0.6s ease-out;
                }
                
                .section-title {
                    font-size: 3.5rem;
                    font-weight: 900;
                    background: linear-gradient(135deg, #003366, #00BCD4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 1.5rem;
                    letter-spacing: -1px;
                    animation: fadeInUp 0.8s ease-out 0.2s both;
                }
                
                .section-subtitle {
                    font-size: 1.25rem;
                    color: #5f6368;
                    max-width: 750px;
                    margin: 0 auto;
                    line-height: 1.8;
                    animation: fadeInUp 0.8s ease-out 0.4s both;
                }
                
                /* Features Grid */
                .features-section {
                    margin-bottom: 6rem;
                }
                
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .feature-item {
                    background: white;
                    padding: 2rem;
                    border-radius: 20px;
                    text-align: center;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.06);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    animation: fadeInUp 0.6s ease-out both;
                }
                
                .feature-item:nth-child(1) { animation-delay: 0.1s; }
                .feature-item:nth-child(2) { animation-delay: 0.2s; }
                .feature-item:nth-child(3) { animation-delay: 0.3s; }
                .feature-item:nth-child(4) { animation-delay: 0.4s; }
                .feature-item:nth-child(5) { animation-delay: 0.5s; }
                .feature-item:nth-child(6) { animation-delay: 0.6s; }
                
                .feature-item:hover {
                    transform: translateY(-10px) scale(1.05);
                    box-shadow: 0 15px 40px rgba(0,188,212,0.15);
                }
                
                .feature-icon {
                    font-size: 2.5rem;
                    color: #00BCD4;
                    margin-bottom: 1rem;
                    transition: all 0.4s ease;
                }
                
                .feature-item:hover .feature-icon {
                    transform: scale(1.2) rotate(10deg);
                    color: #003366;
                }
                
                .feature-title {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #003366;
                    margin-bottom: 0.5rem;
                }
                
                .feature-text {
                    font-size: 0.9rem;
                    color: #5f6368;
                }
                
                /* Services Section */
                .services-section {
                    margin-bottom: 6rem;
                }
                
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 3rem;
                }
                
                .service-card {
                    background: white;
                    padding: 3.5rem;
                    border-radius: 24px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    animation: fadeInUp 0.8s ease-out both;
                }
                
                .service-card:nth-child(1) { animation-delay: 0.1s; }
                .service-card:nth-child(2) { animation-delay: 0.2s; }
                .service-card:nth-child(3) { animation-delay: 0.3s; }
                .service-card:nth-child(4) { animation-delay: 0.4s; }
                .service-card:nth-child(5) { animation-delay: 0.5s; }
                .service-card:nth-child(6) { animation-delay: 0.6s; }
                
                .service-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 6px;
                    background: linear-gradient(90deg, #003366, #00BCD4);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.5s ease;
                }
                
                .service-card::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(0,188,212,0.1), transparent);
                    transform: translate(-50%, -50%);
                    transition: width 0.6s ease, height 0.6s ease;
                }
                
                .service-card:hover::before {
                    transform: scaleX(1);
                }
                
                .service-card:hover::after {
                    width: 500px;
                    height: 500px;
                }
                
                .service-card:hover {
                    transform: translateY(-20px) scale(1.02);
                    box-shadow: 0 25px 60px rgba(0,188,212,0.2);
                }
                
                .service-icon {
                    font-size: 4rem;
                    color: #00BCD4;
                    margin-bottom: 2rem;
                    display: block;
                    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    position: relative;
                    z-index: 1;
                }
                
                .service-card:hover .service-icon {
                    transform: scale(1.2) rotate(360deg);
                    color: #003366;
                }
                
                .service-title {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #003366;
                    margin-bottom: 1.5rem;
                    position: relative;
                    z-index: 1;
                }
                
                .service-description {
                    color: #5f6368;
                    line-height: 1.9;
                    margin-bottom: 2rem;
                    font-size: 1.05rem;
                    position: relative;
                    z-index: 1;
                }
                
                .service-features {
                    list-style: none;
                    padding: 0;
                    position: relative;
                    z-index: 1;
                }
                
                .service-feature {
                    padding: 0.8rem 0;
                    color: #5f6368;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }
                
                .service-card:hover .service-feature {
                    transform: translateX(10px);
                }
                
                .service-feature i {
                    color: #00BCD4;
                    font-size: 1.3rem;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                }
                
                .service-card:hover .service-feature i {
                    transform: scale(1.2);
                }
                
                /* Benefits Section */
                .benefits-section {
                    margin-bottom: 6rem;
                    background: white;
                    padding: 6rem 4rem;
                    border-radius: 30px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                    animation: fadeInUp 0.8s ease-out;
                }
                
                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 4rem;
                    margin-top: 4rem;
                }
                
                .benefit-item {
                    text-align: center;
                    animation: scaleIn 0.6s ease-out both;
                }
                
                .benefit-item:nth-child(1) { animation-delay: 0.2s; }
                .benefit-item:nth-child(2) { animation-delay: 0.4s; }
                .benefit-item:nth-child(3) { animation-delay: 0.6s; }
                .benefit-item:nth-child(4) { animation-delay: 0.8s; }
                
                .benefit-icon {
                    width: 90px;
                    height: 90px;
                    background: linear-gradient(135deg, #003366, #00BCD4);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 2rem;
                    font-size: 2.8rem;
                    color: white;
                    box-shadow: 0 10px 30px rgba(0,188,212,0.3);
                    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
                
                .benefit-item:hover .benefit-icon {
                    transform: scale(1.15) rotate(360deg);
                    box-shadow: 0 15px 40px rgba(0,188,212,0.5);
                }
                
                .benefit-title {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #003366;
                    margin-bottom: 1rem;
                }
                
                .benefit-description {
                    color: #5f6368;
                    line-height: 1.8;
                    font-size: 1.05rem;
                }
                
                /* Technologies Section */
                .tech-section {
                    margin-bottom: 6rem;
                }
                
                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 2.5rem;
                }
                
                .tech-item {
                    text-align: center;
                    padding: 2.5rem 1.5rem;
                    background: white;
                    border-radius: 20px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 5px 20px rgba(0,0,0,0.06);
                    cursor: pointer;
                    animation: bounceIn 0.6s ease-out both;
                }
                
                .tech-item:nth-child(1) { animation-delay: 0.1s; }
                .tech-item:nth-child(2) { animation-delay: 0.15s; }
                .tech-item:nth-child(3) { animation-delay: 0.2s; }
                .tech-item:nth-child(4) { animation-delay: 0.25s; }
                .tech-item:nth-child(5) { animation-delay: 0.3s; }
                .tech-item:nth-child(6) { animation-delay: 0.35s; }
                .tech-item:nth-child(7) { animation-delay: 0.4s; }
                .tech-item:nth-child(8) { animation-delay: 0.45s; }
                .tech-item:nth-child(9) { animation-delay: 0.5s; }
                .tech-item:nth-child(10) { animation-delay: 0.55s; }
                .tech-item:nth-child(11) { animation-delay: 0.6s; }
                .tech-item:nth-child(12) { animation-delay: 0.65s; }
                
                .tech-item:hover {
                    transform: translateY(-15px) scale(1.1);
                    box-shadow: 0 20px 50px rgba(0,188,212,0.2);
                }
                
                .tech-icon {
                    font-size: 4rem;
                    margin-bottom: 1.2rem;
                    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
                
                .tech-item:hover .tech-icon {
                    transform: scale(1.3) rotate(360deg);
                }
                
                .tech-name {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #003366;
                }
                
                /* Process Section */
                .process-section {
                    margin-bottom: 6rem;
                }
                
                .process-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
                    gap: 3rem;
                }
                
                .process-card {
                    background: white;
                    padding: 3rem;
                    border-radius: 24px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    animation: slideInFromLeft 0.8s ease-out both;
                }
                
                .process-card:nth-child(even) {
                    animation: slideInFromRight 0.8s ease-out both;
                }
                
                .process-card:nth-child(1) { animation-delay: 0.1s; }
                .process-card:nth-child(2) { animation-delay: 0.2s; }
                .process-card:nth-child(3) { animation-delay: 0.3s; }
                .process-card:nth-child(4) { animation-delay: 0.4s; }
                .process-card:nth-child(5) { animation-delay: 0.5s; }
                .process-card:nth-child(6) { animation-delay: 0.6s; }
                
                .process-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(0,188,212,0.1), transparent);
                    transition: left 0.8s ease;
                }
                
                .process-card:hover::before {
                    left: 100%;
                }
                
                .process-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 20px 60px rgba(0,188,212,0.2);
                }
                
                .process-icon {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, #003366, #00BCD4);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    color: white;
                    margin-bottom: 2rem;
                    box-shadow: 0 10px 30px rgba(0,188,212,0.3);
                    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
                
                .process-card:hover .process-icon {
                    transform: scale(1.15) rotate(360deg);
                }
                
                .process-step {
                    font-size: 0.95rem;
                    font-weight: 800;
                    color: #00BCD4;
                    margin-bottom: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                
                .process-title {
                    font-size: 1.7rem;
                    font-weight: 800;
                    color: #003366;
                    margin-bottom: 1.2rem;
                }
                
                .process-description {
                    color: #5f6368;
                    line-height: 1.9;
                    font-size: 1.05rem;
                }
                
                /* CTA Section */
                .cta-section {
                    background: linear-gradient(135deg, #003366 0%, #004d7a 50%, #00BCD4 100%);
                    padding: 6rem 4rem;
                    border-radius: 30px;
                    text-align: center;
                    color: white;
                    position: relative;
                    overflow: hidden;
                    margin-bottom: 6rem;
                    box-shadow: 0 20px 60px rgba(0,51,102,0.4);
                    animation: fadeInUp 0.8s ease-out;
                }
                
                .cta-section::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -20%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: pulse 4s ease-in-out infinite;
                }
                
                .cta-section::after {
                    content: '';
                    position: absolute;
                    bottom: -40%;
                    right: -15%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(0,188,212,0.15) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 5s ease-in-out infinite;
                }
                
                .cta-content {
                    position: relative;
                    z-index: 1;
                }
                
                .cta-title {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin-bottom: 2rem;
                    letter-spacing: -1px;
                    animation: fadeInDown 0.8s ease-out 0.2s both;
                }
                
                .cta-text {
                    font-size: 1.4rem;
                    margin-bottom: 3rem;
                    opacity: 0.95;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 1.8;
                    font-weight: 300;
                    animation: fadeInUp 0.8s ease-out 0.4s both;
                }
                
                .cta-buttons {
                    display: flex;
                    gap: 2rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    animation: fadeInUp 0.8s ease-out 0.6s both;
                }
                
                .cta-button {
                    padding: 1.3rem 3.5rem;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.15rem;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.8rem;
                    position: relative;
                    overflow: hidden;
                }
                
                .cta-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s;
                }
                
                .cta-button:hover::before {
                    left: 100%;
                }
                
                .cta-button-primary {
                    background: white;
                    color: #003366;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                }
                
                .cta-button-primary:hover {
                    transform: translateY(-5px) scale(1.05);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
                }
                
                .cta-button-secondary {
                    background: transparent;
                    color: white;
                    border: 2px solid white;
                }
                
                .cta-button-secondary:hover {
                    background: white;
                    color: #003366;
                    transform: translateY(-5px) scale(1.05);
                }
                
                /* Responsive */
                @media (max-width: 992px) {
                    .web-dev-page {
                        max-width: 100%;
                        overflow-x: hidden;
                        padding-top: 65px;
                    }
                    
                    .web-dev-container {
                        padding: 0 1rem;
                        max-width: 100%;
                    }
                    
                    .hero-section,
                    .stats-section,
                    .features-section,
                    .services-section,
                    .benefits-section,
                    .tech-section,
                    .process-section,
                    .cta-section {
                        max-width: 100%;
                    }
                    
                    .hero-section {
                        padding: 4rem 1.5rem;
                        margin-bottom: 4rem;
                    }
                    
                    .hero-title {
                        font-size: 2.2rem;
                    }
                    
                    .hero-subtitle {
                        font-size: 1.1rem;
                    }
                    
                    .hero-btn {
                        padding: 1rem 2rem;
                        font-size: 1rem;
                    }
                    
                    .section-title {
                        font-size: 2rem;
                    }
                    
                    .section-subtitle {
                        font-size: 1.1rem;
                    }
                    
                    .services-grid,
                    .process-grid,
                    .benefits-grid,
                    .stats-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem;
                    }
                    
                    .service-card,
                    .process-card {
                        padding: 2rem 1.5rem;
                        max-width: 100%;
                    }
                    
                    .tech-grid {
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 1rem;
                    }
                    
                    .features-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 1.5rem;
                    }
                    
                    .benefits-section {
                        padding: 3rem 1.5rem;
                    }
                    
                    .benefits-grid {
                        gap: 3rem;
                    }
                    
                    .cta-section {
                        padding: 4rem 1.5rem;
                        margin-bottom: 4rem;
                    }
                    
                    .cta-title {
                        font-size: 2rem;
                    }
                    
                    .cta-text {
                        font-size: 1.1rem;
                    }
                    
                    .cta-button {
                        padding: 1rem 2rem;
                        font-size: 1rem;
                    }
                }
            `}</style>

      <div className="web-dev-page">
        <div className="web-dev-container">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-content">
              <span className="hero-badge">
                <i className='bx bx-code-alt'></i>
                Professional Web Development
              </span>
              <h1 className="hero-title">Transform Your Vision Into Digital Reality</h1>
              <p className="hero-subtitle">
                We craft exceptional web experiences that drive business growth. From concept to deployment,
                our expert team delivers scalable, secure, and stunning digital solutions tailored to your unique needs.
              </p>
              <div className="hero-buttons">
                <a href="/#contact" className="hero-btn hero-btn-primary">
                  <i className='bx bx-rocket'></i>
                  Start Your Project
                </a>
                <a href="#services" className="hero-btn hero-btn-secondary">
                  <i className='bx bx-search-alt'></i>
                  Explore Services
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <i className={`bx ${stat.icon} stat-icon`}></i>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="features-section">
            <div className="section-header">
              <span className="section-badge">Why Choose Us</span>
              <h2 className="section-title">Built With Excellence</h2>
              <p className="section-subtitle">
                Every project is crafted with attention to detail and industry best practices
              </p>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <i className={`bx ${feature.icon} feature-icon`}></i>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-text">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="services-section" id="services">
            <div className="section-header">
              <span className="section-badge">Our Services</span>
              <h2 className="section-title">Comprehensive Web Solutions</h2>
              <p className="section-subtitle">
                End-to-end web development services designed to elevate your digital presence
                and drive measurable business results
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <i className={`bx ${service.icon} service-icon`}></i>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-feature">
                        <i className='bx bx-check-circle'></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <div className="section-header">
              <span className="section-badge">Benefits</span>
              <h2 className="section-title">The VSS Advantage</h2>
              <p className="section-subtitle">
                Partner with us to unlock the full potential of your digital initiatives
              </p>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    <i className={`bx ${benefit.icon}`}></i>
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="tech-section">
            <div className="section-header">
              <span className="section-badge">Technology Stack</span>
              <h2 className="section-title">Powered By Modern Technologies</h2>
              <p className="section-subtitle">
                We leverage cutting-edge tools and frameworks to build robust, scalable solutions
              </p>
            </div>
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <i className={`bx ${tech.icon} tech-icon`} style={{ color: tech.color }}></i>
                  <div className="tech-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="process-section">
            <div className="section-header">
              <span className="section-badge">Our Process</span>
              <h2 className="section-title">How We Deliver Excellence</h2>
              <p className="section-subtitle">
                A proven methodology that ensures successful project delivery, every time
              </p>
            </div>
            <div className="process-grid">
              {process.map((item, index) => (
                <div key={index} className="process-card">
                  <div className="process-icon">
                    <i className={`bx ${item.icon}`}></i>
                  </div>
                  <div className="process-step">Step {item.step}</div>
                  <h3 className="process-title">{item.title}</h3>
                  <p className="process-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Let's Build Something Amazing Together</h2>
              <p className="cta-text">
                Ready to transform your digital presence? Our team of experts is here to turn your
                vision into reality. Get in touch today for a free consultation.
              </p>
              <div className="cta-buttons">
                <a href="/#contact" className="cta-button cta-button-primary">
                  <i className='bx bx-envelope'></i>
                  Get Free Consultation
                </a>
                <a href="tel:+918850024342" className="cta-button cta-button-secondary">
                  <i className='bx bx-phone'></i>
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WebDevelopment
