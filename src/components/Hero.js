import Slider from './Slider';

function Hero() {
  return (
    <>
      <style>{`
        .hero {
          padding-top: 115px;
        }
        
        @media (max-width: 768px) {
          .hero {
            padding-top: 80px;
          }
        }
      `}</style>
      
      <section className="hero">
        <Slider />
      </section>
    </>
  )
}

export default Hero
