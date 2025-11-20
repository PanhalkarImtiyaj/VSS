import { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: '/images/silder/webstie-servises.png',
      title: 'Custom Website Development',
      subtitle: 'Modern • Responsive • SEO Optimized',
      description: 'Transform your digital presence with cutting-edge web solutions. We craft responsive, high-performance websites using the latest technologies like React, Next.js, and modern frameworks.',
      features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading'],
      stats: [
        { value: '500+', label: 'Websites Delivered' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '24/7', label: 'Support Available' }
      ]
    },
    {
      image: '/images/silder/mobile-app-servises.png',
      title: 'Mobile App Development',
      subtitle: 'iOS • Android • Cross-Platform',
      description: 'Build powerful mobile applications that deliver exceptional user experiences. From native iOS and Android apps to cross-platform solutions using React Native and Flutter.',
      features: ['Native Development', 'Cross-Platform', 'UI/UX Design', 'App Store Ready'],
      stats: [
        { value: '200+', label: 'Apps Launched' },
        { value: '5M+', label: 'Active Users' },
        { value: '4.8★', label: 'Average Rating' }
      ]
    },
    {
      image: '/images/silder/digital-services.png',
      title: 'Complete Digital Services',
      subtitle: 'Strategy • Design • Development • Marketing',
      description: 'End-to-end digital transformation solutions for your business. From strategic planning to execution, we provide comprehensive services including branding, digital marketing, and business automation.',
      features: ['Digital Strategy', 'Brand Identity', 'Marketing Automation', '24/7 Support'],
      stats: [
        { value: '300+', label: 'Projects Completed' },
        { value: '50+', label: 'Team Experts' },
        { value: '100%', label: 'Success Rate' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const changeSlide = (newSlideIndex) => {
    if (isTransitioning || newSlideIndex === currentSlide) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentSlide(newSlideIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const goToSlide = (index) => {
    changeSlide(index);
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style>{`
        .slider-container {
          position: relative;
          width: 100%;
          height: 700px;
          overflow: hidden;
          background: #e8f0f5;
          padding: 60px 20px;
          box-sizing: border-box;
        }

        .slider-content {
          max-width: 1200px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }



        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slider-text {
          flex: 1;
          color: #2c3e50;
          max-width: 600px;
          text-align: left;
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        .slider-text.fade-out {
          opacity: 0;
          transform: translateX(-20px);
        }

        .slider-text.fade-in {
          opacity: 1;
          transform: translateX(0);
        }

        .slider-title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 25px;
          line-height: 1.1;
          text-align: left;
        }



        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slider-subtitle {
          font-size: 1.1rem;
          color: #00BCD4;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .slider-description {
          font-size: 1.3rem;
          line-height: 1.6;
          margin-bottom: 25px;
          color: #555;
          text-align: left;
        }

        .slider-features {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 30px;
        }

        .feature-tag {
          background: linear-gradient(135deg, #00BCD4, #003366);
          color: white;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          box-shadow: 0 4px 15px rgba(0, 188, 212, 0.3);
        }

        .slider-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .stat-item {
          text-align: center;
          padding: 20px 15px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 188, 212, 0.3);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: bold;
          color: #00BCD4;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #555;
          font-weight: 500;
        }





        .slide-indicators {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(0, 188, 212, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #00BCD4;
          transform: scale(1.2);
        }

        .indicator:hover {
          background: #00BCD4;
          transform: scale(1.1);
        }



        .slider-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
          height: 100%;
        }

        .slider-image.fade-out {
          opacity: 0;
          transform: translateX(20px);
        }

        .slider-image.fade-in {
          opacity: 1;
          transform: translateX(0);
        }

        .slider-image img {
          max-width: 150%;
          max-height: 600px;
          width: auto;
          height: auto;
          border-radius: 12px;
          object-fit: contain;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }







        .whatsapp-float {
          position: fixed;
          left: 20px;
          bottom: 20px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          text-decoration: none;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-icon {
          width: 32px;
          height: 32px;
          fill: white;
        }

        .back-to-top {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 60px;
          height: 60px;
          background: #00BCD4;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 188, 212, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          text-decoration: none;
          border: none;
        }

        .back-to-top:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(0, 188, 212, 0.6);
          background: #5a67d8;
        }

        .back-to-top-icon {
          width: 24px;
          height: 24px;
          fill: white;
        }

        @media (max-width: 768px) {
          .slider-container {
            height: 1400px;
            padding: 10px;
            overflow: visible;
          }

          .slider-content {
            flex-direction: column;
            gap: 15px;
            justify-content: flex-start;
            align-items: center;
            height: 100%;
          }

          .slider-image {
            order: 1;
            height: auto;
            max-height: 800px;
            margin-bottom: 20px;
            flex: none;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
          }

          .slider-image img {
            max-height: 750px;
            max-width: 100%;
            width: 100%;
            height: auto;
            object-fit: contain;
            object-position: center;
          }

          .slider-text {
            order: 2;
            text-align: center;
            max-width: 100%;
            height: auto;
            justify-content: flex-start;
          }

          .slider-title {
            font-size: 2.5rem;
          }

          .slider-subtitle {
            font-size: 1rem;
          }

          .slider-description {
            font-size: 1.1rem;
          }

          .slider-features {
            justify-content: center;
          }

          .slider-stats {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 20px;
          }

          .stat-item {
            padding: 15px 10px;
          }

          .stat-value {
            font-size: 1.5rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }










          .whatsapp-float {
            left: 15px;
            bottom: 15px;
            width: 50px;
            height: 50px;
          }

          .whatsapp-icon {
            width: 28px;
            height: 28px;
          }

          .back-to-top {
            right: 15px;
            bottom: 15px;
            width: 50px;
            height: 50px;
          }

          .back-to-top-icon {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      <div className="slider-container">
        <div className="slider-content">
          <div className={`slider-image ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
            />
          </div>
          <div className={`slider-text ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <h1 className="slider-title">{slides[currentSlide].title}</h1>
            <p className="slider-subtitle">{slides[currentSlide].subtitle}</p>
            <p className="slider-description">{slides[currentSlide].description}</p>

            <div className="slider-features">
              {slides[currentSlide].features.map((feature, index) => (
                <span key={index} className="feature-tag">{feature}</span>
              ))}
            </div>

            <div className="slider-stats">
              {slides[currentSlide].stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>


        <a
          href="https://wa.me/917517005494"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="whatsapp-icon" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
          </svg>
        </a>

        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back to top"
        >
          <svg className="back-to-top-icon" viewBox="0 0 24 24">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Slider;
