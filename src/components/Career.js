import { useState } from 'react';

function Career() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = [
    { id: 'all', name: 'All Positions', icon: 'bx-briefcase' },
    { id: 'development', name: 'Development', icon: 'bx-code-alt' },
    { id: 'design', name: 'Design', icon: 'bx-palette' },
    { id: 'marketing', name: 'Marketing', icon: 'bx-trending-up' },
    { id: 'sales', name: 'Sales', icon: 'bx-dollar-circle' }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'development',
      location: 'Remote / Mumbai',
      type: 'Full-time',
      experience: '5+ years',
      salary: '₹15-25 LPA',
      description: 'We are looking for an experienced Full Stack Developer to join our growing team. You will work on cutting-edge projects using React, Node.js, and cloud technologies.',
      requirements: [
        'Strong proficiency in React.js and Node.js',
        'Experience with MongoDB, PostgreSQL',
        'Knowledge of AWS/Azure cloud services',
        'Experience with CI/CD pipelines',
        'Excellent problem-solving skills'
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable code',
        'Mentor junior developers',
        'Participate in code reviews'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'Hybrid / Pune',
      type: 'Full-time',
      experience: '3+ years',
      salary: '₹8-15 LPA',
      description: 'Join our design team to create beautiful, user-centric interfaces for web and mobile applications.',
      requirements: [
        'Proficiency in Figma, Adobe XD',
        'Strong portfolio showcasing UI/UX work',
        'Understanding of design systems',
        'Knowledge of HTML/CSS basics',
        'Excellent communication skills'
      ],
      responsibilities: [
        'Create wireframes and prototypes',
        'Design user interfaces for web and mobile',
        'Conduct user research and testing',
        'Collaborate with developers',
        'Maintain design system'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      department: 'development',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-12 LPA',
      description: 'We need a talented Frontend Developer who is passionate about creating amazing user experiences.',
      requirements: [
        'Expert in React.js and modern JavaScript',
        'Experience with TypeScript',
        'Knowledge of responsive design',
        'Familiarity with REST APIs',
        'Git version control'
      ],
      responsibilities: [
        'Build responsive web applications',
        'Optimize application performance',
        'Implement pixel-perfect designs',
        'Write unit tests',
        'Stay updated with latest technologies'
      ]
    },
    {
      id: 4,
      title: 'Digital Marketing Manager',
      department: 'marketing',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '4+ years',
      salary: '₹10-18 LPA',
      description: 'Lead our digital marketing efforts and drive growth through innovative marketing strategies.',
      requirements: [
        'Proven experience in digital marketing',
        'SEO/SEM expertise',
        'Social media marketing skills',
        'Analytics and data-driven mindset',
        'Excellent content creation skills'
      ],
      responsibilities: [
        'Develop marketing strategies',
        'Manage social media campaigns',
        'Analyze marketing metrics',
        'Lead marketing team',
        'Collaborate with sales team'
      ]
    },
    {
      id: 5,
      title: 'Business Development Executive',
      department: 'sales',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹5-10 LPA + Incentives',
      description: 'Drive business growth by identifying new opportunities and building strong client relationships.',
      requirements: [
        'Proven sales track record',
        'Excellent communication skills',
        'IT industry knowledge',
        'CRM software experience',
        'Strong negotiation skills'
      ],
      responsibilities: [
        'Generate new business leads',
        'Build client relationships',
        'Prepare proposals and presentations',
        'Meet sales targets',
        'Market research and analysis'
      ]
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'development',
      location: 'Remote / Hyderabad',
      type: 'Full-time',
      experience: '3+ years',
      salary: '₹12-20 LPA',
      description: 'Join our infrastructure team to build and maintain scalable, reliable systems.',
      requirements: [
        'Experience with AWS/Azure/GCP',
        'Docker and Kubernetes expertise',
        'CI/CD pipeline management',
        'Infrastructure as Code (Terraform)',
        'Linux system administration'
      ],
      responsibilities: [
        'Manage cloud infrastructure',
        'Implement CI/CD pipelines',
        'Monitor system performance',
        'Ensure security compliance',
        'Automate deployment processes'
      ]
    }
  ];

  const benefits = [
    { icon: 'bx-money', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: 'bx-health', title: 'Health Insurance', description: 'Comprehensive medical coverage for you and family' },
    { icon: 'bx-time-five', title: 'Flexible Hours', description: 'Work-life balance with flexible timings' },
    { icon: 'bx-home', title: 'Remote Work', description: 'Work from anywhere options available' },
    { icon: 'bx-book-open', title: 'Learning & Development', description: 'Continuous learning opportunities and certifications' },
    { icon: 'bx-trophy', title: 'Performance Bonus', description: 'Quarterly and annual performance incentives' }
  ];
  const teamMembers = [
    {
      id: 1,
      name: 'Imtihaj Panhalkar',
      role: 'CEO & Founder',
      image: '/images/employes/founder.png',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 2,
      name: 'Karuna Patil',
      role: 'Chief Technology Officer',
      image: 'https://ui-avatars.com/api/?name=Karuna+Patil&background=003366&color=fff',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 3,
      name: 'Mubina Mulla',
      role: 'Lead Full Stack Developer',
      image: 'https://ui-avatars.com/api/?name=Mubina+Mulla&background=003366&color=fff',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 4,
      name: 'Aman Karbu',
      role: 'Senior UI/UX Designer',
      image: 'https://ui-avatars.com/api/?name=Aman+Karbu&background=003366&color=fff',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 5,
      name: 'Priya Patil',
      role: 'DevOps Lead',
      image: 'https://ui-avatars.com/api/?name=Priya+Patil&background=003366&color=fff',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 6,
      name: 'Rohit Patil',
      role: 'Marketing Director',
      image: 'https://ui-avatars.com/api/?name=Rohit+Patil&background=003366&color=fff',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 7,
      name: 'Pravin Singh',
      role: 'Senior Backend Developer',
      image: 'https://ui-avatars.com/api/?name=Pravin+Singh&background=003366&color=fff',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 8,
      name: 'Vaishnavi Bhosle',
      role: 'HR Manager',
      image: 'https://ui-avatars.com/api/?name=Vaishnavi+Bhosle&background=003366&color=fff',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 9,
      name: 'Mansi',
      role: 'Product Manager',
      image: 'https://ui-avatars.com/api/?name=Mansi&background=003366&color=fff',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 10,
      name: 'Kartik Bhosale',
      role: 'Business Analyst',
      image: 'https://ui-avatars.com/api/?name=Kartik+Bhosale&background=003366&color=fff',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 11,
      name: 'Parath Patil',
      role: 'Digital Marketing Head',
      image: 'https://ui-avatars.com/api/?name=Parath+Patil&background=003366&color=fff',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const filteredJobs = selectedDepartment === 'all'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <>
      <style>{`
        .career-page {
          padding: 65px 0 0;
          background: #f5f7fa;
          min-height: 100vh;
        }

        .career-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 84px 2rem;
        }

        /* Hero Section */
        .career-hero {
          background: linear-gradient(135deg, #003366 0%, #004d7a 50%, #00BCD4 100%);
          padding: 6rem 3rem;
          border-radius: 30px;
          color: white;
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          overflow: hidden;
        }

        .career-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0,188,212,0.2) 0%, transparent 70%);
          border-radius: 50%;
        }

        .career-hero h1 {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .career-hero p {
          font-size: 1.4rem;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Department Filter */
        .department-filter {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .department-btn {
          padding: 1rem 2rem;
          border: 2px solid #e8eaed;
          background: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .department-btn i {
          font-size: 1.2rem;
        }

        .department-btn:hover {
          border-color: #00BCD4;
          color: #00BCD4;
          transform: translateY(-2px);
        }

        .department-btn.active {
          background: linear-gradient(135deg, #003366, #00BCD4);
          color: white;
          border-color: transparent;
        }

        /* Jobs Grid */
        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .job-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .job-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #003366, #00BCD4);
          transform: scaleX(0);
          transition: transform 0.3s;
        }

        .job-card:hover::before {
          transform: scaleX(1);
        }

        .job-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,188,212,0.2);
        }

        .job-header {
          margin-bottom: 1.5rem;
        }

        .job-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #003366;
          margin-bottom: 1rem;
        }

        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .job-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #5f6368;
          font-size: 0.95rem;
        }

        .job-meta-item i {
          color: #00BCD4;
          font-size: 1.1rem;
        }

        .job-description {
          color: #5f6368;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .job-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .job-tag {
          background: #e8f4f8;
          color: #003366;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .apply-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #003366, #00BCD4);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .apply-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,188,212,0.4);
        }

        /* Benefits Section */
        .benefits-section {
          background: white;
          padding: 4rem 3rem;
          border-radius: 30px;
          margin-bottom: 4rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #003366, #00BCD4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #5f6368;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .benefit-card {
          text-align: center;
          padding: 2rem;
          border-radius: 16px;
          transition: all 0.3s;
        }

        .benefit-card:hover {
          background: #f8f9fa;
          transform: translateY(-5px);
        }

        .benefit-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #003366, #00BCD4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2.5rem;
          color: white;
          transition: all 0.3s;
        }

        .benefit-card:hover .benefit-icon {
          transform: scale(1.1) rotate(360deg);
        }

        .benefit-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #003366;
          margin-bottom: 0.5rem;
        }

        .benefit-description {
          color: #5f6368;
          line-height: 1.6;
        }

        /* Job Modal */
        .job-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 2rem;
          overflow-y: auto;
        }

        .modal-content {
          background: white;
          border-radius: 24px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-header {
          background: linear-gradient(135deg, #003366, #00BCD4);
          color: white;
          padding: 3rem;
          border-radius: 24px 24px 0 0;
          position: relative;
        }

        .close-modal {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255,255,255,0.2);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .close-modal:hover {
          background: rgba(255,255,255,0.3);
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 3rem;
        }

        .modal-section {
          margin-bottom: 2.5rem;
        }

        .modal-section h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #003366;
          margin-bottom: 1rem;
        }

        .modal-section ul {
          list-style: none;
          padding: 0;
        }

        .modal-section li {
          padding: 0.8rem 0;
          color: #5f6368;
          display: flex;
          align-items: start;
          gap: 1rem;
        }

        .modal-section li i {
          color: #00BCD4;
          font-size: 1.2rem;
          margin-top: 0.2rem;
        }

        .modal-apply-btn {
          width: 100%;
          padding: 1.2rem;
          background: linear-gradient(135deg, #003366, #00BCD4);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .modal-apply-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,188,212,0.4);
        }

        /* Team Gallery Section */
        .team-section {
          margin-bottom: 4rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
        }

        .team-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .team-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 20px 60px rgba(0,188,212,0.25);
        }

        .team-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 320px;
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }

        .team-card:hover .team-image {
          transform: scale(1.1);
        }

        .team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,51,102,0.9), rgba(0,188,212,0.9));
          opacity: 0;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .team-card:hover .team-overlay {
          opacity: 1;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #003366;
          font-size: 1.3rem;
          transition: all 0.3s;
          transform: translateY(20px);
          opacity: 0;
        }

        .team-card:hover .social-link {
          transform: translateY(0);
          opacity: 1;
        }

        .team-card:hover .social-link:nth-child(1) {
          transition-delay: 0.1s;
        }

        .team-card:hover .social-link:nth-child(2) {
          transition-delay: 0.2s;
        }

        .social-link:hover {
          background: #00BCD4;
          color: white;
          transform: translateY(-5px) scale(1.1);
        }

        .team-info {
          padding: 2rem;
          text-align: center;
        }

        .team-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #003366;
          margin-bottom: 0.5rem;
        }

        .team-role {
          color: #00BCD4;
          font-size: 1rem;
          font-weight: 600;
        }


        /* Responsive */
        @media (max-width: 992px) {
          .career-page {
            padding-top: 65px;
          }

          .career-container {
            padding: 0 1rem;
          }

          .career-hero {
            padding: 4rem 2rem;
          }

          .career-hero h1 {
            font-size: 2.5rem;
          }

          .career-hero p {
            font-size: 1.1rem;
          }

          .jobs-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .team-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .modal-content {
            margin: 1rem;
          }

          .modal-header,
          .modal-body {
            padding: 2rem;
          }
        }
      `}</style>

      <div className="career-page">
        <div className="career-container">
          {/* Hero Section */}
          <div className="career-hero">
            <h1>Join Our Team</h1>
            <p>Build your career with us and work on cutting-edge projects that make a difference</p>
          </div>

          {/* Department Filter */}
          <div className="department-filter">
            {departments.map(dept => (
              <button
                key={dept.id}
                className={`department-btn ${selectedDepartment === dept.id ? 'active' : ''}`}
                onClick={() => setSelectedDepartment(dept.id)}
              >
                <i className={`bx ${dept.icon}`}></i>
                {dept.name}
              </button>
            ))}
          </div>

          {/* Jobs Grid */}
          <div className="jobs-grid">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-card" onClick={() => setSelectedJob(job)}>
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <div className="job-meta-item">
                      <i className='bx bx-map'></i>
                      {job.location}
                    </div>
                    <div className="job-meta-item">
                      <i className='bx bx-briefcase'></i>
                      {job.type}
                    </div>
                    <div className="job-meta-item">
                      <i className='bx bx-time-five'></i>
                      {job.experience}
                    </div>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-tags">
                  <span className="job-tag">{job.salary}</span>
                  <span className="job-tag">{job.type}</span>
                </div>
                <button className="apply-btn">View Details & Apply</button>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <div className="section-header">
              <h2 className="section-title">Why Work With Us?</h2>
              <p className="section-subtitle">Amazing benefits and perks for our team members</p>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <i className={`bx ${benefit.icon}`}></i>
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Gallery Section */}
          <div className="team-section">
            <div className="section-header">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-subtitle">Talented professionals who make it all happen</p>
            </div>
            <div className="team-grid">
              {teamMembers.map(member => (
                <div key={member.id} className="team-card">
                  <div className="team-image-wrapper">
                    <img src={member.image} alt={member.name} className="team-image" />
                    <div className="team-overlay">
                      <a href={member.linkedin} className="social-link" aria-label="LinkedIn">
                        <i className='bx bxl-linkedin'></i>
                      </a>
                      <a href={member.twitter} className="social-link" aria-label="Twitter">
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Detail Modal */}
        {selectedJob && (
          <div className="job-modal" onClick={() => setSelectedJob(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <button className="close-modal" onClick={() => setSelectedJob(null)}>
                  <i className='bx bx-x'></i>
                </button>
                <h2>{selectedJob.title}</h2>
                <div className="job-meta" style={{ marginTop: '1rem' }}>
                  <div className="job-meta-item">
                    <i className='bx bx-map'></i>
                    {selectedJob.location}
                  </div>
                  <div className="job-meta-item">
                    <i className='bx bx-briefcase'></i>
                    {selectedJob.type}
                  </div>
                  <div className="job-meta-item">
                    <i className='bx bx-time-five'></i>
                    {selectedJob.experience}
                  </div>
                  <div className="job-meta-item">
                    <i className='bx bx-dollar-circle'></i>
                    {selectedJob.salary}
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className="modal-section">
                  <h3>About the Role</h3>
                  <p style={{ color: '#5f6368', lineHeight: '1.8' }}>{selectedJob.description}</p>
                </div>
                <div className="modal-section">
                  <h3>Requirements</h3>
                  <ul>
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>
                        <i className='bx bx-check-circle'></i>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-section">
                  <h3>Responsibilities</h3>
                  <ul>
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index}>
                        <i className='bx bx-right-arrow-circle'></i>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="modal-apply-btn">
                  <i className='bx bx-send' style={{ marginRight: '0.5rem' }}></i>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Career;
