function Consulting() {
  const services = [
    {
      icon: 'bx-line-chart',
      title: 'Digital Transformation',
      description: 'Strategic roadmap for digital transformation. Modernize legacy systems, adopt cloud technologies, implement automation, and drive innovation across your organization.',
      features: ['Technology Roadmap', 'Legacy Modernization', 'Process Automation', 'Change Management']
    },
    {
      icon: 'bx-network-chart',
      title: 'IT Strategy & Planning',
      description: 'Comprehensive IT strategy aligned with business objectives. Technology assessment, vendor selection, budget planning, and long-term IT infrastructure planning.',
      features: ['Strategic Planning', 'Technology Assessment', 'Vendor Selection', 'Budget Optimization']
    },
    {
      icon: 'bx-shield-alt-2',
      title: 'Cybersecurity Consulting',
      description: 'Protect your business with comprehensive security strategies. Risk assessment, compliance audits, security architecture, and incident response planning.',
      features: ['Security Audit', 'Risk Assessment', 'Compliance Review', 'Incident Response']
    },
    {
      icon: 'bx-data',
      title: 'Data & Analytics',
      description: 'Unlock insights from your data with advanced analytics. Business intelligence, data warehousing, predictive analytics, and data governance strategies.',
      features: ['Business Intelligence', 'Data Warehousing', 'Predictive Analytics', 'Data Governance']
    },
    {
      icon: 'bx-cog',
      title: 'Process Optimization',
      description: 'Streamline operations and improve efficiency. Business process analysis, workflow automation, system integration, and performance optimization.',
      features: ['Process Analysis', 'Workflow Automation', 'System Integration', 'Performance Tuning']
    },
    {
      icon: 'bx-briefcase',
      title: 'Enterprise Architecture',
      description: 'Design scalable, future-proof enterprise architecture. Application architecture, microservices design, API strategy, and technology stack selection.',
      features: ['Architecture Design', 'Microservices', 'API Strategy', 'Tech Stack Selection']
    }
  ]

  const technologies = [
    { name: 'SAP', icon: 'bx-briefcase-alt', color: '#0FAAFF' },
    { name: 'Salesforce', icon: 'bx-cloud', color: '#00A1E0' },
    { name: 'Oracle', icon: 'bx-data', color: '#F80000' },
    { name: 'Microsoft', icon: 'bxl-microsoft', color: '#00A4EF' },
    { name: 'AWS', icon: 'bxl-aws', color: '#FF9900' },
    { name: 'Azure', icon: 'bx-cloud', color: '#0078D4' },
    { name: 'Tableau', icon: 'bx-bar-chart-alt-2', color: '#E97627' },
    { name: 'Power BI', icon: 'bx-line-chart', color: '#F2C811' },
    { name: 'Jira', icon: 'bx-task', color: '#0052CC' },
    { name: 'ServiceNow', icon: 'bx-cog', color: '#62D84E' },
    { name: 'Kubernetes', icon: 'bx-server', color: '#326CE5' },
    { name: 'Docker', icon: 'bxl-docker', color: '#2496ED' }
  ]

  const stats = [
    { number: '150+', label: 'Consulting Projects', icon: 'bx-briefcase' },
    { number: '95%', label: 'Success Rate', icon: 'bx-trophy' },
    { number: '25+', label: 'Industry Experts', icon: 'bx-group' },
    { number: '10+', label: 'Years Experience', icon: 'bx-time-five' }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current IT landscape, business processes, pain points, and opportunities. Stakeholder interviews and documentation review.',
      icon: 'bx-search-alt'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create customized IT strategy aligned with business goals. Define objectives, prioritize initiatives, and develop detailed implementation roadmap.',
      icon: 'bx-map'
    },
    {
      step: '03',
      title: 'Solution Design',
      description: 'Design comprehensive solutions addressing identified challenges. Architecture design, technology selection, and detailed technical specifications.',
      icon: 'bx-pen'
    },
    {
      step: '04',
      title: 'Implementation Planning',
      description: 'Develop detailed implementation plan with timelines, resources, milestones, and risk mitigation strategies for successful execution.',
      icon: 'bx-calendar'
    },
    {
      step: '05',
      title: 'Execution Support',
      description: 'Hands-on support during implementation. Project management, technical guidance, quality assurance, and change management assistance.',
      icon: 'bx-support'
    },
    {
      step: '06',
      title: 'Optimization & Review',
      description: 'Post-implementation review and continuous optimization. Performance monitoring, feedback collection, and ongoing strategic recommendations.',
      icon: 'bx-trending-up'
    }
  ]

  const benefits = [
    { icon: 'bx-brain', title: 'Expert Guidance', description: 'Access to seasoned IT professionals with deep industry knowledge and proven expertise' },
    { icon: 'bx-dollar-circle', title: 'Cost Savings', description: 'Optimize IT spending and avoid costly mistakes with strategic planning and best practices' },
    { icon: 'bx-rocket', title: 'Faster Results', description: 'Accelerate digital transformation with proven methodologies and experienced consultants' },
    { icon: 'bx-shield-alt-2', title: 'Risk Mitigation', description: 'Identify and mitigate risks early with comprehensive assessments and strategic planning' }
  ]

  const features = [
    { icon: 'bx-user-voice', title: 'Expert Advisors', text: 'Industry-certified experts' },
    { icon: 'bx-customize', title: 'Custom Solutions', text: 'Tailored strategies' },
    { icon: 'bx-line-chart', title: 'ROI Focused', text: 'Measurable results' },
    { icon: 'bx-support', title: '24/7 Support', text: 'Always available' },
    { icon: 'bx-book-open', title: 'Best Practices', text: 'Industry standards' },
    { icon: 'bx-trending-up', title: 'Growth Driven', text: 'Scalable solutions' }
  ]

  return (
    <>
      <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                .consulting-page {
                    padding: 100px 0 0;
                    background: #f5f7fa;
                    min-height: 100vh;
                    overflow-x: hidden;
                }
                
                .consulting-container {
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
                    .consulting-page {
                        max-width: 100%;
                        overflow-x: hidden;
                        padding-top: 65px;
                    }
                    
                    .consulting-container {
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

      <div className="consulting-page">
        <div className="consulting-container">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-content">
              <span className="hero-badge">
                <i className='bx bx-user-voice'></i>
                IT Consulting & Strategy
              </span>
              <h1 className="hero-title">Transform Your Business With Expert IT Consulting</h1>
              <p className="hero-subtitle">
                Strategic IT guidance from industry experts. We help organizations navigate digital transformation,
                optimize technology investments, and achieve measurable business outcomes.
              </p>
              <div className="hero-buttons">
                <a href="/#contact" className="hero-btn hero-btn-primary">
                  <i className='bx bx-rocket'></i>
                  Schedule Consultation
                </a>
                <a href="#services" className="hero-btn hero-btn-secondary">
                  <i className='bx bx-search-alt'></i>
                  Our Expertise
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
              <span className="section-badge">Our Approach</span>
              <h2 className="section-title">Strategic IT Consulting</h2>
              <p className="section-subtitle">
                Proven methodologies and industry expertise to drive your digital success
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
              <span className="section-badge">Consulting Services</span>
              <h2 className="section-title">Expert IT Consulting Services</h2>
              <p className="section-subtitle">
                Comprehensive consulting services to address your unique business challenges
                and technology needs
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
              <h2 className="section-title">Why Choose Our Consulting</h2>
              <p className="section-subtitle">
                Partner with experienced consultants who understand your business
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
              <span className="section-badge">Expertise</span>
              <h2 className="section-title">Technology Expertise</h2>
              <p className="section-subtitle">
                Deep knowledge across enterprise platforms and modern technologies
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
              <h2 className="section-title">Consulting Methodology</h2>
              <p className="section-subtitle">
                A structured approach to deliver measurable results and lasting value
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
              <h2 className="cta-title">Let's Discuss Your IT Strategy</h2>
              <p className="cta-text">
                Ready to transform your business? Schedule a free consultation with our expert consultants
                to discuss your challenges and explore strategic solutions.
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

export default Consulting
