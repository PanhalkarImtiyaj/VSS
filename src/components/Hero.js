import Slider from './Slider';

function Hero() {
  return (
    <>
      <style>{`
        .hero {
          padding-top: 115px;
          overflow-x: hidden;
          max-width: 100%;
        }
        
        @media (max-width: 768px) {
          .hero {
            padding-top: 18px;
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
